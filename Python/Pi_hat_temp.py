from sense_hat import SenseHat
import time
 
sense = SenseHat()
sense.clear()
bou = 0
prev = 0

while bou < 250:
	temp = sense.get_temperature()
	temp = int(temp)
	diff = temp - prev
	lig = temp%8
	col = temp//8
	prevlig = prev%8
	prevcol = prev//8
	
	if diff > 0:
		for x in range(prevcol, col):
			for y in range(0,8):
				sense.set_pixel(x, y, 255, 0, 0)
		for y in range(prevlig,lig):
			sense.set_pixel(col, y, 255, 0, 0)
	elif diff < 0:
		for x in range(col,prevcol):
			for y in range(0,8):
				sense.set_pixel(x, y, 255, 0, 0)
		for y in range(lig,prevlig):
			sense.set_pixel(col, y, 0, 0, 0)
	bou +=
	prev = temp
	time.sleep(0.1)
sense.clear()
