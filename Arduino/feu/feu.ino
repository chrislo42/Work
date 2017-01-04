//affectation des variables
int button1 = 2;
int button2 = 4;
int feu1_ve = 13;
int feu1_or = 12;
int feu1_ro = 14;
int feu2_ve = 1;  //pin utilisée pour la liaison série
int feu2_or = 3;  //pin utilisée pour la liaison série
int feu2_ro = 15;

int index_seq = 0;
int t = 0;
boolean stp = false;
char sequence[4][2] = {{feu1_ve,feu2_ro},{feu1_or,feu2_ro},{feu1_ro,feu2_ve},{feu1_ro,feu2_or}};
int duree[] = {10000,1000,10000,1000};
boolean sensorVal1 = true;
boolean sensorVal2 = true;

void tout_eteindre(){
  digitalWrite(feu1_ro, LOW);
  digitalWrite(feu1_or, LOW);
  digitalWrite(feu1_ve, LOW);
  digitalWrite(feu2_ro, LOW);
  digitalWrite(feu2_or, LOW);
  digitalWrite(feu2_ve, LOW);  
}

void bouton1(){
//  Serial.println("bouton1");
  if(index_seq == 0){
    if(t > (duree[index_seq]-duree[index_seq]/4)) delay(duree[index_seq]/4);
    index_seq = 0;
    stp = true;
    sensorVal1 = true;
  }
  else{
    if(index_seq == 2){
      if(t < 2000) t = 2000;
      sensorVal1 = true;
    }
  }
}
void bouton2(){
//  Serial.println("bouton2");
  if(index_seq == 2){
    if(t > (duree[index_seq]-duree[index_seq]/4)) delay(duree[index_seq]/4);
    index_seq = 2;
    stp = true;
    sensorVal2 = true;
  }
  else{
    if(index_seq == 0){
      if(t < 2000) t = 2000;
      sensorVal2 = true;
    }
  }
}


void setup() {
  //start serial connection
//  Serial.begin(115200);
//  Serial.println("test feu tricolore");
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
  
  tout_eteindre();
  digitalWrite(sequence[index_seq][0], HIGH);
  digitalWrite(sequence[index_seq][1], HIGH);
  
  t = duree[index_seq];
  stp = false;
  
  while(t > 0 && stp == false){
    delay(100);
    if(sensorVal1 == true && sensorVal2 == true){
      sensorVal1 = digitalRead(2); // lecture des entrees boutons
      sensorVal2 = digitalRead(4);
    }
    if(sensorVal1 == false) bouton1();
    if(sensorVal2 == false) bouton2();
    t -= 100;
  }
 
   index_seq += 1;
  if(index_seq > 4) index_seq = 0;
}
    

