var user = ["titi","toto","tata","tutu","tete"];
var pwd = ["itit","otot","atat","utut","etet"];

function add_user(name){
	user.push(name);
	var bou = true;
	while (bou){
		pwd1_user = prompt("Nouvel utilisateur: Entrez votre mot de passe :");
		pwd2_user = prompt("Confirmez votre mot de passe :");
		if (pwd2_user == pwd1_user){
			pwd.push(pwd1_user);
			bou = false;
		}
		else{
			alert("Erreur dans la confirmation du mot de passe !");
		}
	}
	console.log(user);
	console.log(pwd);
}

var i = 0;
while (i<4){
	var userpos = -1;
	var ok = false;
	var str = prompt("Entrer votre login");
	var pos = str.indexOf("@");
	if (pos != -1){
		var name = str.slice(0,pos);
		if (name.length > 3){
			for (j in user){
				if (name == user[j]) userpos = j;
			}
			if (userpos != -1){
				var address = str.slice((pos+1),str.length);
				var dotpos = address.indexOf(".");
				if (dotpos != -1){
					var domain = address.slice(0,dotpos);
					if (domain != ""){
						var ext = address.slice((dotpos+1),address.length);
						if ( ext != ""){
							var passwd = prompt("Entrer votre mot de passe");
							if (pwd[userpos] == passwd){
//								i = 4;
								ok = true;
							}else alert("mauvais mot de passe !");
						}else alert("Pas d'extention au nom de domaine !");
					}else alert("Pas de nom de domaine !");
				}else alert("Pas de caractère . détecté !");
			}else{
				alert("votre nom n'est pas dans la table");
				add_user(name);
			}
		}else alert("Nom trop court !");
	}else alert("Pas de caractère @ détecté !");
	i++;
	if (ok) console.log("Bonjour "+ user[userpos]+" : accès autorisé !");
}
//if (ok) console.log("Bonjour "+ user[userpos]+" : accès autorisé !");
//else console.log("Erreur d'entrer; lancer à nouveau");

