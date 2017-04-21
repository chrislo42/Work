function prix_TTC(prix, tva){
	return prix * (1 + tva/100);
}

function signe_produit(x, y){
	if (x*y > 0){
		return "positif";
	}
	if (x*y < 0){
		return "négatif";
	}
	return "null";
}

function classement(age){
	if (6 <= age <= 7)	return "poussin";
	if (8 <= age <= 9)	return "pupille";
	if (10 <= age <= 11)	return "minime";
	if (12 <= age <= 13)	return "cadet";
	return "hors classement";
}

function carres(tableau){
	for (var i in tableau){
		tableau[i] *= tableau[i];
	}
	return tableau;
}

function notes(n){
	var table = [];
	for (var i=0; i < n; i++){
		table[i] = parseInt(prompt("Entrer une note"));
	}
	var min = Math.min(...table);
	var max = Math.max(...table);
	var moyen = 0;
	for (var i in table) moyen += table[i];
	moyen = moyen/table.length;
	moyen = moyen.toFixed(2);
	return [min, max, moyen];
}
//function notes(n) {
//	var tab = new Array();
//	var sum = 0;
//  for (var i=0; i<n; i++) {
//  	tab.push(Number(prompt("Note suivante ?")));
//    	sum += tab[i];
//    }
//    return [Math.min(...tab), Math.max(...tab), sum/n];
//  }
//}

function tri(tableau){
	var table = [];
	for (var j=0; j < tableau.length; j++){
	  
	  // recherche de la première valeur définie
	  for (var z=0; z < tableau.length; z++){
	    if (tableau[z] != undefined){
	      table[j] = tableau[z];
	      var index = z
	      break;
	    }
	  }
	  // recherche de la valeur mini
		for (var i in tableau){
			if (tableau[i] < table[j]){
				table[j] = tableau[i];
				index = i;
			}
		}
		delete tableau[index];
	}
	return table;
}

// correction
function tri_2(tab){
	var tab_trie = new Array();
	var n = tab.length;
	for (var i=0;i<n; i++){
		tab_trie.push(Math.min(...tab));
		tab.splice(tab.indexOf(tab_trie[i]),1);
	}
	return tab_trie;
}

function multiples_3(n){
	var table = [];
	var index = 0;
	for (var i=3; i <= n; i+=3){
		table[index] = i;
		index++;
	}
	return table;
}

function premiere_lettre(tableau, lettre){
	var nombre = 0;
	for (i in tableau){
		if (lettre == tableau[i].charAt(0)){
		nombre++;
		}
	}
	return nombre;
}

console.log ("prix TTC de 15€ ht : "+prix_TTC(15, 19.6));
console.log ("signe du produit -1*-3 : "+signe_produit(-1, -3));
console.log ("signe du produit 1*-3 : "+signe_produit(1, -3));
console.log ("signe du produit -1*3 : "+signe_produit(-1, 3));
console.log ("signe du produit -1*0 : "+signe_produit(-1, 0));
console.log ("classement à 7ans : "+classement(7));
console.log ("carrés de la liste : "+carres([2,5]));
//console.log ("tableau min max moy des notes : "+notes(3));
console.log ("tableau ordonné : "+tri([5,4,6,8,1,16,3,1,16]));
console.log ("tableau ordonné : "+tri_2([5,4,6,8,1,16,3,1,16]));
console.log ("tableau de multiples de 3 : "+multiples_3(50));
var liste = ["les lettres","la chienne","moulin à vent","place vendome"];
console.log ("nombre de chaine commencant par l : "+premiere_lettre(liste,"l"));
