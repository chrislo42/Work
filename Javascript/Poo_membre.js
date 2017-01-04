function Membre(pseudo,passwd,grade){
	this.pseudo = pseudo;
	this.passwd = passwd;
	this.grade = grade;
	
	Membre.prototype.toString = function(){
    	return(this.pseudo+" - "+this.grade);
	}
	Membre.prototype.connexion = function(pass){
		if (pass == this.passwd) return ("ok");
		return ("Nok");
	}
}
function Equipe(nom,list){
	this.nom = nom;
	this.list = list;
	
	Equipe.prototype.ajoutMembre = function(nouv_mem){
		for (var indi in this.list){
			if (this.list[indi] == nouv_mem){
				console.log(nouv_mem+" est déjà dans la liste\n");
				return 1;
			}
		}
		this.list.push(nouv_mem);
		console.log(nouv_mem+" ajouté\n");
		return 0;
	}
	Equipe.prototype.suppression = function(membre){
		for (var indi in this.list){
			if (this.list[indi] == membre){
				this.list.splice(indi,1);
				console.log(membre+" suprimé\n");
				return 0;
			}
		}
		console.log(membre+" n'est pas dans la liste\n");
		return 1;
	}
	Equipe.prototype.afficherMembres = function(){
		var liste = [];
		for (var indi in this.list){
			liste[indi] = this.list[indi].toString();
		}
		return liste;
	}
}
function Administrateur(pseudo,passwd,grade){
	Membre.call(this,pseudo,passwd,grade);
	
	Administrateur.prototype.creationMembre = function(pseudo,passwd,grade){
		return (new Membre(pseudo,passwd,grade));
	}
}

Administrateur.prototype = Object.create(Membre.prototype);
Administrateur.prototype.constructor = Administrateur;

 var toto = new Membre("doudou","monpass","base");
 var tutu = new Membre("dad","dadpass","base");
 var titi = new Membre("good","gopass","chef");
 var fefe = new Administrateur("la_fee","pass_complique","dab");
 console.log(titi.toString());
 console.log(toto.toString());
 console.log(fefe.toString());
 console.log(tutu.connexion("dadpass"));
 console.log(tutu.connexion("dadpuss"));
 
 var la_team = new Equipe("la_team",[toto,tutu]);
 console.log(la_team.afficherMembres());
 la_team.ajoutMembre(titi);
 la_team.ajoutMembre(titi);
 console.log(la_team.afficherMembres());
 la_team.suppression(toto);
 la_team.suppression(toto);
console.log(la_team.afficherMembres());
 
 var tata = fefe.creationMembre("letat","tapass","grand_chef");
 console.log(tata.toString());
 

 
