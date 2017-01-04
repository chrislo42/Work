#! /usr/bin/python3
# -*-coding:Utf-8 -*
# lignes obligatoires
# démarer le code en dessous
#
annee = input()
try: # On essaye de convertir l'année en entier
    annee = int(annee)
except:
    print("Erreur lors de la conversion de l'année.")
