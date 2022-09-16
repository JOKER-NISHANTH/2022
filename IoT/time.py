# Import required libraries
import sys
import RPi.GPIO as GPIO
import time, datetime
now = datetime.datetime.now() #read raspberry pi clock
hour = now.hour #extract hours digits from clock
minute = now.minute #extract minutes digits from clock
converted_hours = str(hour) #convert hours digitsion string
converted_min = str(minute)#convert minutes digits in string
toDisplay=converted_hours+converted_min # numbers and digits to display
print(toDisplay) #print digits on shell
delay = 0.005 # delay between digits refresh

selDigit = [14,15,18,23]
# Digits:   1, 2, 3, 4

display_list = [26,19,13,6,5,11,9] # define GPIO ports to use
#disp.List ref: A ,B ,C,D,E,F ,G

digitDP = 10
#DOT = GPIO 10

# Use BCM GPIO references instead of physical pin numbers
GPIO.setmode(GPIO.BCM)

# Set all pins as output
GPIO.setwarnings(False)
for pin in display_list:
  GPIO.setup(pin,GPIO.OUT) # setting pins for segments
for pin in selDigit:
  GPIO.setup(pin,GPIO.OUT) # setting pins for digit selector
GPIO.setup(digitDP,GPIO.OUT) # setting dot pin
GPIO.setwarnings(True)

# DIGIT map as array of array ,
#so that arrSeg[0] shows 0, arrSeg[1] shows 1, etc
arrSeg = [[1,1,1,1,1,1,0],\
          [0,1,1,0,0,0,0],\
          [1,1,0,1,1,0,1],\
          [1,1,1,1,0,0,1],\
          [0,1,1,0,0,1,1],\
          [1,0,1,1,0,1,1],\
          [1,0,1,1,1,1,1],\
          [1,1,1,0,0,0,0],\
          [1,1,1,1,1,1,1],\
          [1,1,1,1,0,1,1]]

GPIO.output(digitDP,0) # DOT pin

def showDisplay(digit):
 for i in range(0, 4): #loop on 4 digits selectors (from 0 to 3 included)
  sel = [1,1,1,1]
  sel[i] = 0
  GPIO.output(selDigit, sel) # activates selected digit
  if digit[i].replace(".", "") == " ": # space disables digit
   GPIO.output(display_list,0)
   continue
  numDisplay = int(digit[i].replace(".", ""))
  GPIO.output(display_list, arrSeg[numDisplay]) # segments are activated according to digit mapping
  if digit[i].count(".") == 1:
   GPIO.output(digitDP,1)
  else:
   GPIO.output(digitDP,0)
  time.sleep(delay)

def splitToDisplay (toDisplay): # splits string to digits to display
 arrToDisplay=list(toDisplay)
 for i in range(len(arrToDisplay)):
  if arrToDisplay[i] == ".": arrToDisplay[(i-1)] = arrToDisplay[(i-1)] + arrToDisplay[i] # dots are concatenated to previous array element
 while "." in arrToDisplay: arrToDisplay.remove(".") # array items containing dot char alone are removed
 return arrToDisplay

try:
 while True:
  showDisplay(splitToDisplay(toDisplay))
except KeyboardInterrupt:
 print('interrupted!')
 GPIO.cleanup()
sys.exit()