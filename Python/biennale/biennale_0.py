#! /usr/bin/python
# -*-coding:Utf-8 -*
# lignes obligatoires
# démarer le code en dessous
#

from sense_hat import SenseHat
import time
from signal import pause
import psutil

sense = SenseHat()
sense.clear()
mem = psutil.virtual_memory()
net = psutil.net_io_counters()
net_sp = psutil.net_if_stats()
interface = 'enp0s31f6'

red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
white = (255, 255, 255)
yellow = (255, 255, 0)
nothing = (0, 0, 0)

duree = 10

G = green
O = nothing
C_logo = [
    O, O, O, O, O, O, O, O,
    O, G, G, G, O, O, O, O,
    G, O, O, O, G, O, O, O,
    G, O, O, O, O, O, O, O,
    G, O, O, O, O, O, O, O,
    G, O, O, O, G, O, O, O,
    O, G, G, G, O, O, O, O,
    O, O, O, O, O, O, O, O,
]

B = blue
O = nothing
M_logo = [
    O, O, O, O, O, O, O, O,
    B, O, O, O, B, O, O, O,
    B, B, O, B, B, O, O, O,
    B, O, B, O, B, O, O, O,
    B, O, O, O, B, O, O, O,
    B, O, O, O, B, O, O, O,
    B, O, O, O, B, O, O, O,
    O, O, O, O, O, O, O, O,
]

Y = yellow
O = nothing
N_logo = [
    O, O, O, O, O, O, O, O,
    Y, O, O, O, Y, O, O, O,
    Y, Y, O, O, Y, O, O, O,
    Y, O, Y, O, Y, O, O, O,
    Y, O, O, Y, Y, O, O, O,
    Y, O, O, O, Y, O, O, O,
    Y, O, O, O, Y, O, O, O,
    O, O, O, O, O, O, O, O,
]

"""
Fonction qui décale à droite la valeur de chaque led de chaque ligne
param d'entrée: liste de couleur pour chaque led
retour: liste modifiée
"""
def translate(logo):
    retour=[]
    for x in range(0, 8):
        # découpage de la x ligne
        tranche = logo[x*8:(x+1)*8]
        tranche.insert(0, (0, 0, 0))
        tranche.pop()
        # reconstruction de la liste
        retour.extend(tranche)
    return retour

"""
Fonction qui fait disparaitre progressivement le logo à droite
param d'entrée: liste de couleur pour chaque led
"""
def animate(logo):
    for x in range(0, 8):
        # pour chaque colonne
        logo = translate(logo)
        sense.clear()
        sense.set_pixels(logo)
        time.sleep(0.2)

"""
Fonction qui assure l'affichage du bargraph de chaque mesure
param d'entrée: la mesure à faire et la couleur d'affichage
"""
def graph_disp(valeur, couleur):
    bou = 0
    # 10 mesures et affichages par duree
    while bou < 10:
        val = meas_val(valeur)
        # effacement de la partie bargraph
        for y in range(0, 8):
            sense.set_pixel(7, 7 - y, nothing)
            sense.set_pixel(6, 7 - y, nothing)
        # affichage du bargraph
        for x in range(0, val):
            if (x <= 5):
                sense.set_pixel(7, 7 - x, couleur)
                sense.set_pixel(6, 7 - x, couleur)
            else:
                # on affiche en rouge les deux dernières leds
                sense.set_pixel(7, 7 - x, red)
                sense.set_pixel(6, 7 - x, red)

        if (valeur == 'net'):
            # la mesure de net prend 0.5 sec
            time.sleep(duree/20)
        else:
            time.sleep(duree/10)
        bou += 1

"""
Fonction qui calcule la valeur à afficher
param d'entrée: le nom de la valeur
retour: la valeur calibrée de 0 à 8
"""
def meas_val(valeur):
    if (valeur == 'cpu'):
        # retouche de la valeur pour entre comprse entre 0 et 8
        return (int((psutil.cpu_percent() * 8) / 100))
    elif (valeur == 'mem'):
        return (int((mem.percent * 8) / 100))
    else:
        speed = net_sp[interface][2]/8 # Mbytes/second
        net1 = net.bytes_sent
        time.sleep(0.5)
        net2 = net.bytes_sent
        if (net2 > net1):
            tx_net = (net2 - net1)*2 # bytes/second
            net_val = (tx_net/(speed*1000000))*100
            net_ajust = int((net_val * 8) / 100)
        else:
            net_ajust = 0
        return (int(net_ajust))


while True:

    sense.clear()
    sense.set_pixels(C_logo)
    graph_disp('cpu', green)
    animate(C_logo)

    sense.clear()
    sense.set_pixels(M_logo)
    graph_disp('mem', blue)
    animate(M_logo)

    sense.clear()
    sense.set_pixels(N_logo)
    graph_disp('net', yellow)
    animate(N_logo)

