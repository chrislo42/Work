//affectation des variables
int button1 = 2;
int button2 = 4;
int feu1_ve = 13;
int feu1_or = 12;
int feu1_ro = 14;
int feu2_ve = 1;
int feu2_or = 3;
int feu2_ro = 15;




void setup() {
  //start serial connection
  Serial.begin(115200);
  //configuration des IOs
  pinMode(button1, INPUT_PULLUP);
  pinMode(button2, INPUT_PULLUP);
  pinMode(feu1_ve, OUTPUT);
  pinMode(feu1_or, OUTPUT);
  pinMode(feu1_ro, OUTPUT);
  pinMode(feu2_ve, OUTPUT);
  pinMode(feu2_or, OUTPUT);
  pinMode(feu2_ro, OUTPUT);

}

void loop() {
  //read the pushbutton value into a variable
  int sensorVal1 = digitalRead(2);
  int sensorVal2 = digitalRead(4);
   //print out the value of the pushbutton
  Serial.println(sensorVal1);
  Serial.println(sensorVal2);

  // Keep in mind the pullup means the pushbutton's
  // logic is inverted. It goes HIGH when it's open,
  // and LOW when it's pressed. Turn on pin 13 when the
  // button's pressed, and off when it's not:
  
  digitalWrite(feu1_ro, LOW);
  digitalWrite(feu2_or, LOW);
  digitalWrite(feu1_ve, HIGH);
  digitalWrite(feu2_ro, HIGH);
  delay(2000);
  
  digitalWrite(feu1_ve, LOW);
  digitalWrite(feu1_or, HIGH);
  delay(500);
  
 digitalWrite(feu2_ro, LOW);
  digitalWrite(feu1_or, LOW);
  digitalWrite(feu2_ve, HIGH);
  digitalWrite(feu1_ro, HIGH);
  delay(2000);
  
  digitalWrite(feu2_ve, LOW);
  digitalWrite(feu2_or, HIGH);
  delay(500);
  
}
    

