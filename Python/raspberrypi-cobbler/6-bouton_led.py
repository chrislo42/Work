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
# Configuration des ports en mode sortie
GPIO.setup(route_1_rouge, GPIO.OUT) 
GPIO.setup(route_1_orange, GPIO.OUT)
GPIO.setup(route_1_vert, GPIO.OUT)
GPIO.setup(route_2_rouge, GPIO.OUT) 
GPIO.setup(route_2_orange, GPIO.OUT)
GPIO.setup(route_2_vert, GPIO.OUT)
# Configuration des ports en mode entrée
GPIO.setup(bouton_1, GPIO.IN)
GPIO.setup(bouton_2, GPIO.IN)


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
etape0 = [{"led": route_1_vert, "etat": GPIO.HIGH}, {"led": route_2_rouge, "etat": GPIO.HIGH}]
etape1 = [{"led": route_1_orange, "etat": GPIO.HIGH}, {"led": route_2_rouge, "etat": GPIO.HIGH}]
etape2 = [{"led": route_1_rouge, "etat": GPIO.HIGH}, {"led": route_2_vert, "etat": GPIO.HIGH}]
etape3 = [{"led": route_1_rouge, "etat": GPIO.HIGH}, {"led": route_2_orange, "etat": GPIO.HIGH}]

# On définie l'ordre des étapes et leur durée
sequence = [{"num_etape": etape0, "duree": 4}, {"num_etape": etape1, "duree": 0.5}, {"num_etape": etape2, "duree": 4}, {"num_etape": etape3, "duree": 0.5}]

while True:
#    for etape in sequence:
#        tout_eteindre()
#        for feu in etape["num_etape"]:
#            GPIO.output(feu["led"], feu["etat"])
#        time.sleep(etape["duree"])

    if GPIO.input(bouton_1):
            GPIO.output(route_1_vert, GPIO.HIGH)
            GPIO.output(route_1_rouge, GPIO.LOW)
    else:
            GPIO.output(route_1_vert, GPIO.LOW)
            GPIO.output(route_1_rouge, GPIO.HIGH)
            
    if GPIO.input(bouton_2):
            GPIO.output(route_2_vert, GPIO.HIGH)
            GPIO.output(route_2_rouge, GPIO.LOW)
    else:
            GPIO.output(route_2_vert, GPIO.LOW)
            GPIO.output(route_2_rouge, GPIO.HIGH)

    
