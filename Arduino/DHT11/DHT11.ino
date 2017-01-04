/* 
 * *************************
 * Capteur : DHT11
 * 
 * Les broches sont numérotées de la gauche vers la droite lorsque l'on regarde le capteur de face
 * 
 * Broche n°1 connectée au +3.3V
 * Broche n°2 (data) connectée à la broche 'D4' du NodeMcu (Pin 2 pour l'arduino) avec une résistance de 10 K reliée au +3.3v
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
#define DHTPIN 5                      // broche sur laquelle est raccordée la data du capteur (la broche 'D4' du NodeMcu correspond à la broche 2 de l'arduino)
#define DHTTYPE DHT11                 // précise la référence du capteur DHT (DHT11 ou DHT21 ou DHT22)
DHT dht(DHTPIN, DHTTYPE);             // Initialisation du capteur DHT

// Préparation communication
char ssid[] = "NETGEAR";    //  your network SSID (name) 
char pass[] = "";   // your network password
int status = WL_IDLE_STATUS;
WiFiClient  client;

// Data ThingSpeak
unsigned long myChannelNumber = 178845;
const char * myWriteAPIKey = "ZWCTYCQKRQS8C51R";



// fonction de démarrage
void setup() {
  // Démarrage du bus série
  Serial.begin(115200);               // vitesse
  Serial.println("Bonjour");          // écriture d'un petit message...
  Serial.println("DHT11 et afficheur");
  
  // Démarrage du capteur DHT11
  dht.begin();

  //Démmarage service
  WiFi.begin(ssid, pass);
  ThingSpeak.begin(client);
}

// boucle infinie
void loop() {
//  delay(5000);                        // attendre 5 seconde 

  float t = dht.readTemperature();    // mesurer la température (en ° Celsius)
  float h = dht.readHumidity();
  
  // test si des valeurs ont été récupérées
  if (isnan(t)) {         // si non
    Serial.println("Failed to read from DHT sensor!");    // affiche un message d'erreur
    return;                           // quitte pour retenter une lecture
  }

  // affichage des valeurs dans le bus série
  Serial.print("Temperature : ");
  Serial.print(t);
  Serial.print(" *C\t");
  Serial.print("Humidity : ");
  Serial.print(h);
  Serial.println(" %");

  ThingSpeak.setField(1,int(t));
  ThingSpeak.setField(2,int(h));
  Serial.println("set fields");


  // Write the fields that you've set all at once.
  int httpcode = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);  
  Serial.print("send fields status : ");  
  Serial.println(httpcode);


  delay(15000); // ThingSpeak will only accept updates every 15 seconds. 
 
}
