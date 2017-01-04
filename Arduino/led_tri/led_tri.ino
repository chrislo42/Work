//affectation des variables
int led_r = 16;
int led_v = 5;
int led_b = 0;

char etat[5] = {LOW,LOW,LOW,LOW,LOW};
int k = 0;

void setup() {
  // put your setup code here, to run once:
  //configuration des IOs
  pinMode(led_r, OUTPUT);
  pinMode(led_v, OUTPUT);
  pinMode(led_b, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
/*  digitalWrite(led_r, HIGH);
  digitalWrite(led_b, LOW);
  delay(2000);
  digitalWrite(led_v, HIGH);
  digitalWrite(led_r, LOW);
  delay(2000);
  digitalWrite(led_b, HIGH);
  digitalWrite(led_v, LOW);
  delay(2000);*/
  digitalWrite(led_v, HIGH);
  for(int j = 0; j < 11; j++){
    if(j > 5) k = 10 - j;
    k = j;
    for(int i = 0; i < 5; i++){
      if(i <= 0) digitalWrite(led_r, HIGH);
      digitalWrite(led_r, LOW);
      delay(500);
    }
  }
}
