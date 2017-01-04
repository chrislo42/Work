console.clear;

function conv_fr_eu(){
	var bou = true;
	while (bou){
		var francs = prompt("Entrez la somme à convertir :");
		if (/[^0-9]/.test(francs) === false){
			euros = francs * 0.1524;
			alert("Le résultat est :"+euros+" euros");
			bou = false;
		}
		else{
			alert("Veuillez entrer uniquement des chiffres !");
		}
	}
}
function conv_hms_s(str){
	var bou = true;
	while (bou){
		var heure = prompt(str+ " (format hh:mm:ss) :");
		if (/[^0-9:]/.test(heure) === false && heure.split(":").length == 3){
			var elem = heure.split(":");
			console.log(elem[0]+" heures "+elem[1]+" minutes "+elem[2]+" secondes");
			console.log("\n");
			if (elem[0].length != 2 || elem[1].length != 2 || elem[2].length != 2){
					alert("Pas plus de deux digits !");
					continue;
			}
			for( var x in elem) elem[x] = elem[x]*1;
			if (elem[1] >= 60 || elem[2] >= 60){
				alert("minutes et secondes inférieures à 60");
				continue;
			}
			res = elem[0]*60*60 + elem[1]*60 + elem[2];
			console.log("conversion en secondes : "+res);
			if (/convertir/.test(str)) alert("La conversion en secondes donne :"+res);
			bou = false;
		}
		else{
			alert("Veuillez entrer l'heure dans le format indiqué !");
//			bou = false;
		}
	}
return res;
}
function delta_heure(){
	var bou = true;
	while (bou){
		str = "Entrez l'heure de départ";
		var res1 = conv_hms_s(str);
		str = "Entrez l'heure d'arrivée";
		var res2 = conv_hms_s(str);
		console.log("Le delta entre les deux horaires est de "+(res2-res1)+ "secondes"+"\n");
		console.log("ce qui fait : "+Math.floor((res2-res1)/3600)+" heures "+Math.floor(((res2-res1)%3600)/60)+" minutes "+(((res2-res1)%3600)%60)+" secondes");
		bou = false;
	}
}
function somme(){
	var bou = true;
	while (bou){
		chif1 = prompt("Entrez le premier chiffre :");
		chif2 = prompt("Entrez le deuxième chiffre :");
		if (/[^0-9]/.test(chif1) === false || /[^0-9]/.test(chif2) === false){
			chif1 = Math.floor(chif1*1);
			chif2 = Math.floor(chif2*1);
			if (chif2 <= chif1){
				alert("Le premier chiffre doit etre plus petit que le second !")
				continue;
			}
			var som = 0;
			for (var i=chif1; i<=chif2; i++) som += i;
			console.log("somme de ("+chif1+","+chif2+") est : "+som);
			alert("somme de ("+chif1+","+chif2+") est : "+som);
		}
		else{
			alert("Veuillez entrer uniquement des chiffres !");
		}
		bou = false;
	}
}
function facto(){
	var bou = true;
	while (bou){
		chif1 = prompt("Entrez le chiffre :");
		if (/[^0-9]/.test(chif1) === false){
			chif1 = Math.floor(chif1*1);
			var facto = 1;
			for (var i=1; i<=chif1; i++) facto *= i;
			console.log("factoriel de ("+chif1+") est : "+facto);
			alert("factoriel de ("+chif1+") est : "+facto);
		}
		else{
			alert("Veuillez entrer uniquement un chiffre !");
		}
		bou = false;
	}
}
function moyenne(tab){
	console.log("Moyenne du tableau suivant :"+tab);
	alert("Moyenne du tableau suivant :"+tab);
	var moyen = 0;
	for (var i in tab) moyen += tab[i];
	moyen = moyen/tab.length;
	moyen = moyen.toFixed(2);
	console.log("La moyenne du tableau donné est :"+moyen);
	alert("La moyenne du tableau donné est : "+moyen);
}
function long_moy(tab){
	console.log("Longueur moyenne des chaines du tableau suivant :"+tab);
	alert("Longueur moyenne des chaines du tableau suivant :"+tab);
	var moyen = 0;
	for (var i in tab) moyen += tab[i].length;
	moyen = moyen/tab.length;
	moyen = moyen.toFixed(2);
	console.log("La longueur moyenne des chaines du tableau donné est :"+moyen);
	alert("La longueur moyenne des chaines du tableau donné est : "+moyen);
}
function hasard(x,y){
	return (Math.round(Math.random()*(y-x)+x));
}
function devine(){
	var bou = true;
	while (bou){
		chif1 = prompt("Entrez le premier chiffre :");
		chif2 = prompt("Entrez le deuxième chiffre :");
		if (/[^0-9]/.test(chif1) === false || /[^0-9]/.test(chif2) === false){
			chif1 = Math.floor(chif1*1);
			chif2 = Math.floor(chif2*1);
			if (chif2 <= chif1){
				alert("Le premier chiffre doit etre plus petit que le second !");
				continue;
			}
			var chiffre = hasard(chif1,chif2);
//			console.log("le numéro est :"+chiffre);
			perdu = true;
			essai = 1;
			while (perdu){
				numero = prompt("Devinez le chiffre choisi :");
				if (/[^0-9]/.test(numero) === false){
					numero = Math.floor(numero*1);
					if (numero == chiffre){
						alert("Vous avez deviné en "+essai+" essais");
						perdu = false;
					}
					else {
						alert("Raté ! essayez encore !");
					}
				}
				else{
					alert("Veuillez entrer uniquement un chiffre !");
				}
				essai += 1;
				if (essai > 10){
					perdu = false;
					alert("Vous avez dépassé le nombre d'essais permis !");
				}
			}
		}
		else{
			alert("Veuillez entrer uniquement des chiffres !");
		}
		bou = false;
	}
}
function faire_devine(){
	var bou = 10;
	lim_max = 100;
	reche = lim_max/2;
	val_rech = lim_max/2;
	alert("Mémorisez un chiffre entre 1 et 100 à faire deviner au programme.");
	while (bou > 0){
		direc = prompt("Je propose "+val_rech+" : est-ce plus grand (+), plus petit (-) ou votre chiffre (=) ?");
		if (/[^+-=]/.test(direc) === false){
			reche =Math.ceil(reche/2);
			if (direc == "+") val_rech = val_rech + reche;
			else if (direc == "-") val_rech = val_rech - reche;
			else{
				alert("J'ai deviné !!");
				bou = 0;
			}
			if (reche == 1 && bou != 0){
				alert("Le chiffre à deviner est : "+val_rech);
				bou = 0;
			}
		}
		else{
			alert("Veuillez entrer uniquement le signe +, - ou = !");
		}
		bou -= 1;
	}
}

console.clear;
console.log("\
1 - conversion francs en euros","\n\
2 - conversion h/m/s en s","\n\
3 - delta horaire"+"\n\
4 - somme"+"\n\
5 - factoriel"+"\n\
6 - moyenne de tableau de nombre"+"\n\
7 - Longueur moyenne de tableau de chaine"+"\n\
8 - chiffre à deviner"+"\n\
9 - chiffre à faire deviner"+"\n\
"); 

var boucle = true;
var str = "";
var tab_nomb = [2,15,35,40,12,8];
var tab_str = ["a","aa","aaa","aaaa","aaaaa","aaaaaa"];
while (boucle){
	console.log("Choisissez une fonction (sortir=0) :");
	var choix = prompt("Choisissez une fonction (sortir=0) :");
	if (choix in ["0","1","2","3","4","5","6","7","8","9"]) 
		choix = choix*1;
	else choix = 99;
	switch (choix){
		case 1:
			conv_fr_eu();
			break;
		case 2:
			str = "Entrez l'heure à convertir";
			conv_hms_s(str);
			break;
		case 3:
			delta_heure();
			break;
		case 4:
			somme();
			break;
		case 5:
			facto();
			break;
		case 6:
			moyenne(tab_nomb);
			break;
		case 7:
			long_moy(tab_str);
			break;
		case 8:
			devine();
			break;
		case 9:
			faire_devine();
			break;
		case 0:
			boucle = false;
			break;
		default:
	}
}
console.clear;


