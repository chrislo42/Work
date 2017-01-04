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

GPIO.cleanup()  # Initialisation du GPIOs
GPIO.setmode(GPIO.BCM)  # Choix du mode de numérotation des ports : identique aux inscriptions sur le Cobbler
# Configuration des ports en mode sortie
GPIO.setup(route_1_rouge, GPIO.OUT) 
GPIO.setup(route_1_orange, GPIO.OUT)
GPIO.setup(route_1_vert, GPIO.OUT)
GPIO.setup(route_2_rouge, GPIO.OUT) 
GPIO.setup(route_2_orange, GPIO.OUT)
GPIO.setup(route_2_vert, GPIO.OUT)


# Fonction qui arrête proprement le programme quand l'utilisateur fait CTRL-C
def arret(signal, frame):
    print "Arrêt du programme en cours..."
    GPIO.cleanup()  # Initialisation du GPIOs
    sys.exit(0)  # Arrête l'execution du programme
    
# Association de la fonction arret() au signal SIGINT qui est déclenché par un CTRL-C
signal.signal(signal.SIGINT, arret)

# On définie l'état de chaque led dans chaque étape
etape1 = [[route_1_rouge, GPIO.LOW], [route_2_orange, GPIO.LOW], [route_1_vert, GPIO.HIGH], [route_2_rouge, GPIO.HIGH]]
etape2 = [[route_1_vert, GPIO.LOW], [route_1_orange, GPIO.HIGH]]
etape3 = [[route_1_orange, GPIO.LOW], [route_2_rouge, GPIO.LOW], [route_1_rouge, GPIO.HIGH], [route_2_vert, GPIO.HIGH]]
etape4 = [[route_2_vert, GPIO.LOW], [route_2_orange, GPIO.HIGH]]

# On définie l'ordre des étapes et leur durée
sequence = [[etape1, 2], [etape2, 0.5], [etape3, 2], [etape4, 0.5]]

while True:
    for etape in sequence:  # boucle sur les étapes d'une séquence
        for led in etape[0]:  # boucle sur chaque led de l'étape
            GPIO.output(led[0], led[1])  # allumer ou éteindre la led
        time.sleep(etape[1])  # attendre


    
