var loop = true;
var result = 0;
function calculatrice ( x1 , x2 , op){
	switch (op){
		case "+" :
			result = x1+x2;
			break;
		case "-" :
			result = x1-x2;
			break;
		case "*" :
			result = x1*x2;
			break;
		case "/" :
			result = x1/x2;
			break;
		default :
			result = 0;
	}
}

alert("PETITE CALCULETTE")

	var chiffre1 = prompt("Entrer le premier chiffre : ");
	chiffre1 *=1;
	var chiffre2 = prompt("Entrer le second chiffre : ");
	chiffre2 *=1;
	var operation = prompt("Entrer l'opération à réaliser : ");
	console.log("l'opération suivante : "+ chiffre1 + operation + chiffre2);
	calculatrice (chiffre1,chiffre2,operation);
	console.log(" le résultat est : "+ result);
/*	var cont = prompt("Voulez vous continuer ? Y/N");
	if (cont != "Y"){
		console.log("Au revoir");
		loop = false;
	}*/
