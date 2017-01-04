#! /usr/bin/python3
# -*-coding:Utf-8 -*
# lignes obligatoires
# démarer le code en dessous
#
""" module multipy contenant la fonction table """

def table_nombre(nb,max=10):
	"""Fonction affichant la table de multiplication par nb de 1 à max
	(max >= 0, defaut 10)"""
	i = 0
	while i < max:
		print(i + 1,"*",nb,"=",(i+1)*nb)
		i += 1

# test de la fonction table_nombre
if __name__ == "__main__":
	table_nombre(6,20)
