function fizzbuzz(n){
	var retour = "";
	if (n%3 == 0) retour += "fizz";
	if (n%5 == 0) retour += "buzz";
	if (retour == "") retour += n.toString();
	return retour;
}
function boucle_fizzbuzz(n){
	var bou = 0;
	while (bou <= n){
		console.log(fizzbuzz(bou));
		bou++;
	}
}
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(16));
console.log("\nBoucle fizzbuzz\n")

boucle_fizzbuzz(20);

 
