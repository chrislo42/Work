var loop = 0;
var result = false
while( loop <= 2){
	loop = loop + 1;
	console.log(" Essai numéro : "+ loop);
	var nains = prompt("Combien y a-t-il de nains ?");
	console.log("Vous avez répondu :"+ nains + " avec Blanche neige");
	if (nains != 7){
		console.log("Mauvaise réponse");
	}else {
		console.log("Bonne réponse");
		result = true;
		loop = 4;
	}
}
if (result === true){
	console.log("Félicitation");
}else{
	console.log("Game Over");
}
