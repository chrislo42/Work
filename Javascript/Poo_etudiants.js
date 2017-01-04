function Personne(nom,prenom,age){
	this.nom = nom;
	this.prenom = prenom;
	this.age = age;
	
	Personne.prototype.presentation = function(){
    console.log("Bonjour, je m'appelle "+this.nom+" "+this.prenom+" et j'ai "+this.age+" ans");
	}
	
}
function Etudiant(nom,prenom,age,note,filiere){
	Personne.call(this,nom,prenom,age);
	this.note = note;
	this.filiere = filiere;
  
	Etudiant.prototype.moyenne = function(){
  		var moyen = 0;
		for (var i in this.note) moyen += this.note[i];
		moyen = moyen/note.length;
		return moyen;
	}
  
}
function Professeur(nom,prenom,age,filiere){
	Personne.call(this,nom,prenom,age);
	this.filiere = filiere;
  
	Professeur.prototype.liste_etudiants = function(tab_etudiants){
  		var liste = [];
  		for (var etu in tab_etudiants){
  			if ( tab_etudiants[etu].filiere == this.filiere) liste.push(tab_etudiants[etu]);
  		}
  		return liste;
	}
  
}
function Cours(prof,etudiants){
	this.professeur = prof;
	this.etudiants = etudiants;
	
	Cours.prototype.inscriptions = function(etud){
		this.etudiants.push(etud);
		return;
	}
	Cours.prototype.moyennes = function(){
		var moy = 0;
		for (var i in this.etudiants) moy += this.etudiants[i].moyenne();
		moy = moy/this.etudiants.length;
		return moy;
	}
	
}
Etudiant.prototype = Object.create(Personne.prototype);
Etudiant.prototype.constructor = Etudiant;

Professeur.prototype = Object.create(Personne.prototype);
Professeur.prototype.constructor = Professeur;

var fefe = new Professeur("fefe","giles",35,"filiere1");
var fifi = new Professeur("fifi","pierre",42,"filiere2");
var toto = new Etudiant("toto","alain",12,[12,13,14],"filiere1");
var tata = new Etudiant("tata","alex",13,[16,15,14],"filiere1");
var titi = new Etudiant("titi","jean",14,[12,13,14],"filiere2");
var tutu = new Etudiant("tutu","yves",15,[12,13,14],"filiere2");
var tete = new Etudiant("tete","bob",16,[12,13,14],"filiere1");
var cours1 = new Cours(fefe,[toto,tata,tete]);
var cours2 = new Cours(fifi,[titi,tutu]);
var tab_etudiants = [toto,tata,titi,tutu,tete]

console.log("Présentation de l'étudiant : ");
toto.presentation();
console.log("\nMoyenne de l'étudiant tata :"+tata.moyenne());
console.log("\nMoyenne de l'étudiant toto :"+toto.moyenne());
console.log("\nFilière du professeur fefe :"+fefe.filiere);
console.log("\nListe des étudiants du professeur fefe :");
console.log(fefe.liste_etudiants(tab_etudiants));
console.log("\nMoyenne du cours cours1 :"+cours1.moyennes());
console.log("\nListe des étudiant du cours cours2 :");
console.log(cours2.etudiants);
cours2.inscriptions(toto);
console.log("\nListe des étudiant du cours cours2 :");
console.log(cours2.etudiants);

