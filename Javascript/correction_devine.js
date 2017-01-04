var nb_choisi = prompt("Nombre choisi ?");
var min = 0;
var max = 100;
function alea(a,b){
	return (Math.round(Math.random()*(b-a)+a));
}
while (rep != nb_choisi){
	var rep = alea (min,max);
	console.log(rep);
	if (rep == nb_choisi){
		alert("Bravo !!");
	}else{
		if (rep > nb_choisi){
			console.log("Plus petit !");
			max = rep;
		}else{
			console.log("Plus grand !");
			min = rep;
		}
	}
}
