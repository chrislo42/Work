import RPi.GPIO as GPIO
import time
import subprocess
from random import randrange

GPIO.setmode(GPIO.BCM)
PIR = 7
GPIO.setup(PIR, GPIO.IN)


tableau= ["1728.wav", "1479.wav", "7907.wav", "0237.wav", "18.wav"]

try:
    print("PIR Module Test")
    print(" (CTRL+C to exit)")
    time.sleep(2)
    print "Ready"
    while True:
        if GPIO.input(PIR):
            tirage = randrange(5)
            fichier = tableau[tirage]
            print("Motion detected! ")
            print(fichier)
            subprocess.call(["aplay", fichier], shell = False)
            time.sleep(3)
        print(".")
        time.sleep(0.5)
except KeyboardInterrupt:
    print("Quitting")
    GPIO.cleanup()
