var loop = 0;
var result = false;
var devine = Math.floor(Math.random()*100);
devine = devine.toString();
console.log(devine);
alert("Vous devez trouver un chifffre entre 1 et 100"+"\n"+"Vous avez 5 essais");
while( loop <= 4){
	loop = loop + 1;
	console.log(" Essai numéro : "+ loop);
	var propal = prompt("Entrer votre proposition : ");
	console.log("Votre proposition : "+ propal);
	if (propal != devine){
		console.log("Mauvaise réponse");
		if (propal < devine){
			console.log("La proposition est trop basse");
		}else console.log("La proposition est trop haute");
	}else {
		console.log("Bonne réponse");
		result = true;
		loop = 6;
	}
}
if (result === true){
	console.log("Félicitation");
}else{
	console.log("Game Over");
}
