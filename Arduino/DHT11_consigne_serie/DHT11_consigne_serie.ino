/* 
 * *************************
 * Capteur : DHT11
 * 
 * Les broches sont numérotées de la gauche vers la droite lorsque l'on regarde le capteur de face
 * 
 * Broche n°1 connectée au +3.3V
 * Broche n°2 (data) connectée à la broche 'D3' du NodeMcu (Pin 2 pour l'arduino) avec une résistance de 10 K reliée au +3.3v
 * Broche n°3 non connectée
 * Broche n°4 connectée à la masse (GND)
 *  
 */

// Déclaration des librairies
#include <DHT.h>
#include <DHT_U.h>
#include "ThingSpeak.h"
#include <ESP8266WiFi.h>
 

// Préparation du capteur DHT
#define DHTPIN 0                      // broche sur laquelle est raccordée la data du capteur (la broche 'D4' du NodeMcu correspond à la broche 2 de l'arduino)
#define DHTTYPE DHT11                 // précise la référence du capteur DHT (DHT11 ou DHT21 ou DHT22)
DHT dht(DHTPIN, DHTTYPE);             // Initialisation du capteur DHT

// Préparation communication
char ssid[] = "SSID";    //  your network SSID (name) 
char pass[] = "PASSWORD";   // your network password
int status = WL_IDLE_STATUS;
WiFiClient  client;

// Data ThingSpeak
unsigned long myChannelNumber = 178845;
const char * myWriteAPIKey = "ZWCTYCQKRQS8C51R";

// définition des broches pour les leds rouge et vert
int marche = 16;
int arret = 5;

// définition des variables utilisées
int consigne = 22;
int entree = 0;
int conversion = 0;
int demande = 22;

boolean is_a_number(int n) // test pour savoir si le char est un code ASCII de nombre
{
    return n >= 48 && n <= 57;
}

int ascii2int(int n, int byte_read) // conversion et ajout du char au nombre
{
    return n*10 + (byte_read - 48);
}

// fonction de démarrage
void setup() {
  // Démarrage du bus série
  Serial.begin(115200);               // vitesse
  Serial.println("Bonjour");          // écriture d'un petit message...
  Serial.println("DHT11 et afficheur");
  
  // Démarrage du capteur DHT11
  dht.begin();

  //Démarrage service
  WiFi.begin(ssid, pass);
  ThingSpeak.begin(client);

  pinMode(arret, OUTPUT);
  pinMode(marche, OUTPUT);

}

// boucle infinie
void loop() {
  delay(5000);                        // attendre 5 seconde 
  conversion = 0;
  float t_read = dht.readTemperature();    // mesurer la température (en ° Celsius)
  float h_read = dht.readHumidity();
  int t = int(t_read);
  int h = int(h_read);
  if(t > 100) t = 1000;     // pour éviter les erreurs de lecture
  // si la valeur est erronée, "t" es mis à une valeur arbitraire afin de pouvoir la testée
  // test si des valeurs ont été récupérées ou si t etait erronée
  if (isnan(t) || t == 1000) {         // si non
    Serial.println("Failed to read from DHT sensor!");    // affiche un message d'erreur
    return;                           // quitte pour retenter une lecture
  }
  if(t >= consigne){ // gestion des leds de simulation de commande
    digitalWrite(arret, HIGH);
    digitalWrite(marche, LOW);
  }
  else {
    digitalWrite(arret, LOW);
    digitalWrite(marche, HIGH);
  }

  // affichage des valeurs dans le bus série
  Serial.print("Temperature : ");
  Serial.print(t);
  Serial.print(" *C\t");
  Serial.print("Humidity : ");
  Serial.print(h);
  Serial.println(" %");
  Serial.print("consigne :");
  Serial.print(consigne);
  Serial.println(" *C");

// préparation du json pour l'envoie
  ThingSpeak.setField(1,t);
  ThingSpeak.setField(2,h);
  Serial.println("set fields");


  // Write the fields that you've set all at once.
  int httpcode = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);  //la fonction renvoie le status de la com
  Serial.print("send fields status : ");  
  Serial.println(httpcode);

  for(int i = 0; i < 100; i++){ // boucle d'attente 100 x 100ms = 10s
    boolean buff = false;
    do{
      if (Serial.available()) {
        // read the most recent byte (which will be from 0 to 255):
        buff = true;
        entree = Serial.read();
        if ( is_a_number(entree) ) { // appel de la fonction pour vérifier le code ASCII
          conversion = ascii2int(conversion, entree);
          demande = conversion;
        }
      }
      else{
        buff = false; // plus d'entrées dans le port série
        conversion = 0; // reset de "conversion"
      }
    }while(buff == true);
    delay(100);
    if(consigne != demande){
      consigne = demande;
      conversion = 0;
      Serial.print("nouvelle consigne :");
      Serial.println(consigne);
    }
  }
//  delay(15000); // ThingSpeak will only accept updates every 15 seconds. 
 
}
