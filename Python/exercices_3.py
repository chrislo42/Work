#! /usr/bin/python3
# -*-coding:Utf-8 -*

def bissextile(annee):
  if annee%4 == 0:
    if annee%100 == 0:
      return (False)
    return (True)
  if annee%400 == 0:
    return (True)
  return (False)

def lignes(n):
  ligne = ""
  for i in range(0,n):
    for j in range(1,(i+2)):
      ligne += str(j) + " "
    ligne += "\n"
  return (ligne)

print(lignes(5))
print(bissextile(2016))
