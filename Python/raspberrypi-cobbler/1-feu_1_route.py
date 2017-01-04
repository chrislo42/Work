#!/usr/bin/python
# coding: utf-8

import RPi.GPIO as GPIO  # Librairie de gestion des entrées/sorties du GPIOs
import time


# Définition des numéros de ports GPIOs 
route_1_rouge = 17 
route_1_orange = 27 
route_1_vert  = 22 

GPIO.cleanup()  # Initialisation du GPIOs
GPIO.setmode(GPIO.BCM)  # Choix du mode de numérotation des ports : identique aux inscriptions sur le Cobbler
# Configuration des ports en mode sortie
GPIO.setup(route_1_rouge, GPIO.OUT) 
GPIO.setup(route_1_orange, GPIO.OUT)
GPIO.setup(route_1_vert, GPIO.OUT)

while True:
    GPIO.output(route_1_rouge, GPIO.LOW)  # eteindre led rouge
    GPIO.output(route_1_vert, GPIO.HIGH)  # allumer led verte
    time.sleep(2)  # attendre
    
    GPIO.output(route_1_vert, GPIO.LOW)  # eteindre led verte
    GPIO.output(route_1_orange, GPIO.HIGH)  # allumer led orange
    time.sleep(0.5)  # attendre
    
    GPIO.output(route_1_orange, GPIO.LOW)  # eteindre led orange
    GPIO.output(route_1_rouge, GPIO.HIGH)  # allumer led rouge
    time.sleep(2)  # attendre
    
