#!/usr/bin/python
# coding: utf-8

import RPi.GPIO as GPIO  # Librairie de gestion des entrées/sorties du GPIOs
import time


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

while True:
    GPIO.output(route_1_rouge, GPIO.LOW)  # eteindre led rouge de la route 1
    GPIO.output(route_2_orange, GPIO.LOW)  # eteindre led orange de la route 2
    GPIO.output(route_1_vert, GPIO.HIGH)  # allumer led verte de la route 1
    GPIO.output(route_2_rouge, GPIO.HIGH)  # allumer led rouge de la route 2
    time.sleep(2)  # attendre
    
    GPIO.output(route_1_vert, GPIO.LOW)  # eteindre led verte de la route 1
    GPIO.output(route_1_orange, GPIO.HIGH)  # allumer led orange de la route 1
    time.sleep(0.5)  # attendre
    
    GPIO.output(route_1_orange, GPIO.LOW)  # eteindre led orange de la route 1
    GPIO.output(route_2_rouge, GPIO.LOW)  # eteindre led rouge de la route 2
    GPIO.output(route_1_rouge, GPIO.HIGH)  # allumer led rouge de la route 1
    GPIO.output(route_2_vert, GPIO.HIGH)  # allumer led verte de la route 2
    time.sleep(2)  # attendre
    
    GPIO.output(route_2_vert, GPIO.LOW)  # eteindre led verte de la route 2
    GPIO.output(route_2_orange, GPIO.HIGH)  # allumer led orange de la route 2
    time.sleep(0.5)  # attendre
    
    
