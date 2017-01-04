void setup() {
  //start serial connection
  Serial.begin(115200);
  //configure pin2 as an input and enable the internal pull-up resistor
  pinMode(2, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(13, OUTPUT);
  pinMode(1, OUTPUT);

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
  if (sensorVal1 == HIGH) {
    digitalWrite(13, LOW);
  } else {
    digitalWrite(13, HIGH);
  }
  if (sensorVal2 == HIGH) {
    digitalWrite(1, LOW);
  } else {
    digitalWrite(1, HIGH);
  }
}
