#! /usr/bin/python3
# -*-coding:Utf-8 -*
# lignes obligatoires
# démarer le code en dessous
#
from random import randrange
import math
conti = True
cagnotte = 50
print("Vous disposez de :",cagnotte,"$")
while conti:
	numéro = input("Choisissez votre numéro de 0 à 49 :")
	numéro = int(numéro)
	mise = input("Choisissez votre mise :")
	mise = int(mise)
	if mise > cagnotte:
		print(" Votre mise est supérieure à votre cagnotte.")
		continue
	tirage = randrange(50)
	print("Le numéro sortant est le :",tirage)
	if tirage == numéro:
		print("Bingo ! Vous gagnez :",mise*3,"$")
		cagnotte += mise*2
	elif tirage%2 == numéro%2:
		print("Même couleur ! Vous perdez seulement:",mise*0.5,"$")
		cagnotte -= math.ceil(mise*0.5)
	else:
		print("Vous perdez :",mise,"$")
		cagnotte -= mise
	print(" Votre cagnotte s'élève à :",cagnotte,"$")
	if cagnotte <= 0:
		print("Vous n'avez plus assez d'argent")
		break
	rep = input("Voulez vous continuer (Y/n) :")
	if rep not in "Y,y":
		conti = False

	
