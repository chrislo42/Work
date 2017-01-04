ar a = (Math.floor(Math.random()*10+1));
var b = (Math.floor(Math.random()*10+1));
var op = ["+","-","*","/"];
var c = (Math.floor(Math.random()*4));
console.log("l'opération proposée est : " + a + op[c] + b);
var x = prompt("entrer le résultat de l'opération :" +a+op[c]+b+"\n"+"Pour les divisions, entrer un chiffre après la virgule");
console.log("La solution proposée est : "+x);
switch (op[c]){
	case "+":
		var r = a+b;
		break;
	case "-":
		var r = a-b;
		break;
	case "*":
		var r = a*b;
		break;
	case "/":
		var r = a/b;
		r = Math.floor(r*10)/10;
		break;
}
console.log("La solution calculée est :"+ r);
if (r == x) console.log("c'est juste !!!!!");
else console.log("c'est faux !!!!!");
