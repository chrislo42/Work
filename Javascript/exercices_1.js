
// Classe Test permettant de vérifier les résultats
class Test{
	static assertSimilar(a,b){
		if(a === b)
			console.log(a + " " + b + " : Test ok");
		else
			console.log(a + " " + b + " : Test raté");
	}
}

// Renvoie le max de deux éléments

function max_2(a,b){
  // A compléter
  if (a > b) return a;
  else if (b > a) return b;
  	else if ((typeof a === 'string') || (typeof b === 'string')) return undefined;
  		else return null;
}

// Batterie de tests

console.log("Tests max_2");

Test.assertSimilar(max_2(2,3),3);
Test.assertSimilar(max_2(-1,8),8);
Test.assertSimilar(max_2("abc",1),undefined);
Test.assertSimilar(max_2("abc","bcd"),"bcd");

console.log("\n");

// Renvoie le max de trois éléments

function max_3(a,b,c){
	// A compléter
/*	if (( a > b ) && (a > c))
		return a; 
	if ((b > a) && (b > c))
		return b;
	if (( c > a) && (c>b)) 
		return c; */
	return (max_2(max_2(a,b),c));
}

// Batterie de tests

console.log("Tests max_3");

Test.assertSimilar(max_3(2,3,4),4);
Test.assertSimilar(max_3(5,-1,8),8);
Test.assertSimilar(max_3("abc",1,"bcd"),undefined);
Test.assertSimilar(max_3("abc","bcd","def"),"def");

console.log("\n");

// Teste si un caractère est ou non une voyelle

function voyelle(c){
	// A compléter
	if (typeof c == 'string'){
		if ((c == "a")||(c == "e")||(c == "i")||(c == "o")||(c == "u")||(c == "y")) return true;
		else return false;
	}else return undefined;
}

// Batterie de tests

console.log("Tests voyelle");

Test.assertSimilar(voyelle("a"),true);
Test.assertSimilar(voyelle("b"),false);
Test.assertSimilar(voyelle("1"),false);
Test.assertSimilar(voyelle(1),undefined);

console.log("\n");

// Teste si une chaine contient ou non une voyelle

function contient_voyelle(str){
	// A compléter
	if (typeof str == 'string'){
		var i = 0;
		while (str.length >i){
		  	if (voyelle(str[i]))
			return true;
	   		i++;
		}
	    return false;
	}else return undefined;
}

// Batterie de tests

console.log("Tests contient_voyelle");

Test.assertSimilar(contient_voyelle("abba"),true);
Test.assertSimilar(contient_voyelle("1234"),false);
Test.assertSimilar(contient_voyelle(1234),undefined);

console.log("\n");

// "Traduit" une chaine en doublant chaque consonne et en insérant un o entre les deux

function translate(str){
	// A compléter
	var chaine = "";
	if (typeof str == 'string'){
		for (var i=0;i< str.length; i++){
			if (voyelle(str[i])=== false){
			chaine +=str[i] +'o' +str [i];
			} else chaine += str [i];
		}
		return (chaine);
	}
	else return undefined;
}

// Batterie de tests

console.log("Tests translate");

Test.assertSimilar(translate("test"),"totesostot");
Test.assertSimilar(translate("aey"),"aey");
Test.assertSimilar(translate("bfb"),"bobfofbob");
Test.assertSimilar(translate(1234,undefined));

console.log("\n");

// Inverse une chaine de caractères

function reverse(str){
	// A compléter
	var chaine = "";
	if (typeof str == 'string'){
		for (var i=0;i< str.length; i++){
			chaine = str[i] + chaine;
		}
		return (chaine);
	}
	else return undefined;
}

// Batterie de tests

console.log("Tests reverse");

Test.assertSimilar(reverse("kayak"),"kayak");
Test.assertSimilar(reverse("test"),"tset");
Test.assertSimilar(reverse("1234"),"4321");
Test.assertSimilar(reverse(12),undefined);

console.log("\n");

// Fait la somme de tous les éléments d'un tableau

function sum(tab){
	// A compléter
	somme = 0;
	var i = 0;
	while (tab[i]){
		if (typeof tab[i] == 'number'){
			somme += tab[i];
		}else return undefined;
	i++;
	}return somme;
}

// Batterie de tests

console.log("Tests sum");

Test.assertSimilar(sum([1,2,3]),6);
Test.assertSimilar(sum([4,5,6]),15);
Test.assertSimilar(sum(["a","b","c"]),undefined);

console.log("\n");

// Fait le produit de tous les éléments d'un tableau

function mult(tab){
	// A compléter
	produit = 1;
	var i = 0;
	while (tab[i]){
		if (typeof tab[i] == 'number'){
			produit *= tab[i];
		}else return undefined;
	i++;
	}return produit;
}

// Batterie de tests

console.log("Tests mult");

Test.assertSimilar(mult([1,2,3]),6);
Test.assertSimilar(mult([4,5,6]),120);
Test.assertSimilar(mult(["a","b","c"]),undefined);

console.log("\n");

// Renvoie la chaine de longueur maximale dans un tableau

function longueur_max(tab){
	// A compléter
	var lomax = 1;
	var indice = 0;
	var i = 0;
	while (tab[i]){
		if (typeof tab[i] == 'string'){
			if (tab[i].length > lomax){
				lomax = tab[i].length;
				indice = i;
			}
		}else return undefined;
	i++;
	}return tab[indice];
/* ou
var i = 0;
var chaine = tab[0];
while (tab[i]){
	if (chaine.length < tab[i].length) chaine = tab[i]
	i++;
}
return chaine; */
}

// Batterie de tests

console.log("Tests longueur_max");

Test.assertSimilar(longueur_max(["a","aa","aaa"]),"aaa");
Test.assertSimilar(longueur_max(["aaa","bb","c"]),"aaa");
Test.assertSimilar(longueur_max([1,2,3]),undefined);

console.log("\n");

// Renvoie le tableau contenant toutes les chaines de longueur au moins égale à i

function longueur_sup(tab,i){
	// A compléter
	var table = [];
	var k = 0;
	var j = 0;
	while (tab[j]){
		if (typeof tab[j] == 'string'){
			if (tab[j].length >= i){
//				table[k] = tab[j];
//				k++;
				table.push(tab[j]);
			}
		}else return undefined;
	j++;
	}return table;
}

// Batterie de tests

console.log("Tests longueur_sup");

Test.assertSimilar(longueur_sup(["test","a","bonjour","voila"],4),["test","bonjour","voila"]);
Test.assertSimilar(longueur_sup(["test","a","bonjour","voila"],6),["bonjour"]);
Test.assertSimilar(longueur_sup(["test","a","bonjour","voila"],8),[]);

console.log("\n");

// Renvoie une chaine contenant la première lettre de chacune des chaines du tableau

function premieres_lettres(tab){
	// A compléter
	var chaine = "";
	var j = 0;
	while (tab[j]){
		if (typeof tab[j] == 'string'){
			chaine += tab[j][0];
		}else return undefined;
	j++;
	}return chaine;
}

console.log("Tests premieres_lettres");

Test.assertSimilar(premieres_lettres(["test","a","bonjour","voila"]),"tabv");
Test.assertSimilar(premieres_lettres(["ceci","est","un","test"]),"ceut");
Test.assertSimilar(premieres_lettres([1,2,3,4]),undefined);



