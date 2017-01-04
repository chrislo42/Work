#! /usr/bin/python3
# -*-coding:Utf-8 -*
# lignes obligatoires
# démarer le code en dessous
#
import math # importation du module math
print (math.sqrt(144))

def table_nombre(nb,max=10):
	"""Fonction affichant la table de multiplication par nb de 1 à max
	(max >= 0, defaut 10)"""
	i = 0
	while i < 10:
		print(i + 1,"*",nb,"=",(i+1)*nb)
		i += 1

s = lambda x,y: x+y
print (s(4,5))

nb = input("entrer le nombre pour la table de multiplication")
nb = int(nb)
table_nombre(nb)
