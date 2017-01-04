#!/usr/bin/python
# coding: utf-8

import RPi.GPIO as GPIO  # Librairie de gestion des entrées/sorties du GPIOs
import time  # Manipulation du temps
import signal  # Permet de gérer les signaux utiliser par le système pour communiquer avec le programme
import sys  # Permet d'interagir avec le système


# Définition des numéros de ports GPIOs 
route_1_rouge = 17 
route_1_orange = 27 
route_1_vert  = 22 
route_2_rouge = 16 
route_2_orange = 20 
route_2_vert  = 21 
bouton_1 = 5
bouton_2 = 6

GPIO.cleanup()  # Initialisation du GPIOs
GPIO.setmode(GPIO.BCM)  # Choix du mode de numérotation des ports : identique aux inscriptions sur le Cobbler
# Configuration les ports en mode sortie
GPIO.setup(route_1_rouge, GPIO.OUT) 
GPIO.setup(route_1_orange, GPIO.OUT)
GPIO.setup(route_1_vert, GPIO.OUT)
GPIO.setup(route_2_rouge, GPIO.OUT) 
GPIO.setup(route_2_orange, GPIO.OUT)
GPIO.setup(route_2_vert, GPIO.OUT)
# Configuration des boutons en vue de déclencher des interruptions
GPIO.setup(bouton_1, GPIO.IN, pull_up_down=GPIO.PUD_UP)  
GPIO.setup(bouton_2, GPIO.IN, pull_up_down=GPIO.PUD_UP)  


def action_bouton1(channel):  
	global index_sequence
	global sequence
	global stop
	global t
#	print (sequence[index_sequence]["duree"])
	if index_sequence != 2 and index_sequence != 3:
		if t > sequence[index_sequence]["duree"]/2:
			time.sleep(sequence[index_sequence]["duree"]/2)
		index_sequence = 0  # défini la séquence qui doit être appelée lors de l'appuie sur le bouton 1
		stop = True  # on signale la présence d'un piéton
	else:
		if t < 3:
			t = 3
	#print "action_bouton1"  
    
GPIO.add_event_detect(bouton_1, GPIO.FALLING, callback=action_bouton1, bouncetime=300)  
  
def action_bouton2(channel):  
	global index_sequence
	global sequence
	global stop
	global t
	if index_sequence != 0 and index_sequence != 1:
		if t > sequence[index_sequence]["duree"]/2:
			time.sleep(sequence[index_sequence]["duree"]/2)
		index_sequence = 2  # défini la séquence qui doit être appelée lors de l'appuie sur le bouton 2
		stop = True  # on signale la présence d'un piéton
	else:
		if t < 3:
			t = 3
	#print "action_bouton2"  
    
GPIO.add_event_detect(bouton_2, GPIO.FALLING, callback=action_bouton2, bouncetime=300)  

# Fonction qui arrête proprement le programme quand l'utilisateur fait CTRL-C
def arret(signal, frame):
    print "Arrêt du programme en cours..."
    GPIO.cleanup()  # Initialisation du GPIOs
    sys.exit(0)  # Arrête l'execution du programme
    
# Association de la fonction arret() au signal SIGINT qui est déclenché par un CTRL-C
signal.signal(signal.SIGINT, arret)
   
# Fonction qui éteind toutes les led
def tout_eteindre():
    GPIO.output(route_1_rouge, GPIO.LOW)
    GPIO.output(route_1_orange, GPIO.LOW)
    GPIO.output(route_1_vert, GPIO.LOW)
    GPIO.output(route_2_rouge, GPIO.LOW)
    GPIO.output(route_2_orange, GPIO.LOW)
    GPIO.output(route_2_vert, GPIO.LOW)

# On définie l'état de chaque led dans chaque étape
etape0 = [{"led": route_1_vert}, {"led": route_2_rouge}]
etape1 = [{"led": route_1_orange}, {"led": route_2_rouge}]
etape2 = [{"led": route_1_rouge}, {"led": route_2_vert}]
etape3 = [{"led": route_1_rouge}, {"led": route_2_orange}]

# On définie l'ordre des étapes et leur durée
sequence = [{"num_etape": etape0, "duree": 6}, {"num_etape": etape1, "duree": 0.5}, {"num_etape": etape2, "duree": 6}, {"num_etape": etape3, "duree": 0.5}]

# on va gérer la manière de parcourir la séquence avec un index
# on commencera par la 1ère séquence
index_sequence = 0

while True:  # boucle infinie
    
    etape = sequence[index_sequence]  # je charge la 1ère partie de la séquence
    #print("Etape n°" + str(index_sequence))
    tout_eteindre()
    for feu in etape["num_etape"]:  # on boucle sur toutes les leds
        GPIO.output(feu["led"],GPIO.HIGH)  # on allume les led

    # on va gérer le temps de pause afin de vérifier la présence d'un piéton toutes les 100ms
    t = etape["duree"]  # compteur de temps
    stop = False  # il n'y a pas de piéton
    while t > 0 and not stop:  # tant que le temps n'est pas écoulée et qu'il n'y a pas de piéton
        #print(t)
        time.sleep(0.1)  # on attend 100ms
        t -= 0.1  # on incrémente le compteur de temps
    index_sequence += 1  # on incrémente l'index (pour la prochaine boucle)
    if index_sequence > len(sequence) - 1:  # si on veille à ce que l'index ne dépasse pas la longueur du tableau et qu'il revienne au début
        index_sequence = 0
        
