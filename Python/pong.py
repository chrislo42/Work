#! /usr/bin/python3
# -*-coding:Utf-8 -*
# lignes obligatoires
# démarer le code en dessous
#
from sense_hat import SenseHat, ACTION_PRESSED, ACTION_HELD, ACTION_RELEASED
import time
from signal import pause

sense = SenseHat()
sense.clear()
ball = [3,4]
direc = 0
pos = 3
ok = True

def test_raq():
  ok = True
  if ball[0] == 1:
    if ball[1] != pos and ball[1] != pos+1:
      ok = False
  return(ok)

def mouv_ball(ball,direc):
  if direc == 0:
    ball[0] += 1
    ball[1] += 1
  elif direc == 1:
    ball[0] += 1
    ball[1] -= 1
  elif direc == 2:
    ball[0] -= 1
    ball[1] += 1
  elif direc == 3:
    ball[0] -= 1
    ball[1] -= 1

def rebond(ball,direction):
  if ball[0] == 7 and direction == 0:
    if ball[1] == 7:
      direction = 3
    else:
      direction = 2
  elif ball[0] == 7 and direction == 1:
    if ball[1] == 0:
      direction = 2
    else:
      direction = 3
  elif ball[0] == 1 and direction == 2:
    if ball[1] == 7:
      direction = 1
    else:
      direction = 0
  elif ball[0] == 1 and direction == 3:
    if ball[1] == 0:
      direction = 0
    else:
      direction = 1
  elif ball[1] == 7 and direction == 0:
    direction = 1
  elif ball[1] == 7 and direction == 2:
    direction = 3
  elif ball[1] == 0 and direction == 1:
    direction = 0
  elif ball[1] == 0 and direction == 3:
    direction = 2
  return(direction)
    
def aff_ball(ball):
  sense.set_pixel(ball[0],ball[1],255,255,255)
  
def clear_ball():
  sense.set_pixel(ball[0],ball[1],0,0,0)
    
def pos_up(event):
  global pos
  if event.action != ACTION_RELEASED:
    pos = lim_pos ( pos - 1)
  
def pos_down(event):
  global pos
  if event.action == ACTION_RELEASED:
    pos = lim_pos ( pos + 1)

def acq_joyst():
  sense.stick.direction_up = pos_up
  sense.stick.direction_down = pos_down
  
def lim_pos(valeur, min_valeur=0, max_valeur=6):
  print(valeur)
  return min(max_valeur, max(min_valeur, valeur))
  
def raquette_aff(pos):
  for i in range(0,2):
    sense.set_pixel(0, pos+i, 255, 0, 0)
    
def raquette_clear():
  for i in range(0,8):
    sense.set_pixel(0,i,0,0,0)
  
while ok:
  print("position : ",pos,"ball",ball,"direction",direc)
  acq_joyst()
  raquette_clear()
  raquette_aff(pos)
  clear_ball()
  direc = rebond(ball,direc)
  mouv_ball(ball,direc)
  aff_ball(ball)
  test_raq()
  ok = test_raq()
  print("continu :",ok)
  time.sleep(.75)
#  pause()

