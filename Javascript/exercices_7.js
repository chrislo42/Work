function fibonacci(n){
  var ligne = [];
  for (var i=0; i<n; i++){
    var temp = [];
    for (var j=0; j<=ligne.length; j++) {
      (j == 0)?temp[j] = 1:
              (j != ligne.length)?temp[j] = ligne[j] + ligne[j-1]:
                                  temp[j] = 1;
    }
    ligne = temp
    console.log (ligne);
  }
}

function conway(n){
  var ligne = [1];
  console.log (ligne);
  for (var i=0; i<n-1; i++){
    var temp = [];
    for (var j=0; j<ligne.length; j++){
      var compt = 1;
        while (ligne[j] == ligne[j+1]){
          j++;
          compt++;
        }
        temp.push(compt, ligne[j]);
    }
    ligne = temp
    console.log (ligne);
  }
}

function range(liste){
  var retour = [];
  var suite = "";
  for (i=0; i<liste.length; i++){
    if (parseInt(liste[i+1]) == parseInt(liste[i])+1){
      if (suite == "") suite = liste[i];
    }else {
  	  if (suite == ""){
  	  	retour.push(liste[i]);
  	  }else{
  	    if (suite + 1 == liste[i]){
  	      retour.push(suite,liste[i]);
  	    }else {
    	    suite += "-"+liste[i];
    	    retour.push(suite);
  	    }
  	    suite = "";
  	  }
  	}
  }
  return retour.join();
}

function tribonacci(dep, n){
  var ligne = dep;
  var j=0;
  while (ligne.length<=n-1){
    ligne.push(ligne[j]+ligne[j+1]+ligne[j+2]);
    j++;
  }
   return(ligne.slice(0, n));
}

function losange1(n) {
  for (var i=0; i<n; i++) {
    var ligne = "";
    for (var j=0; j<n-i; j++) {
      ligne += " ";
    }
    for (j=0; j<i+1; j++) {
      ligne += "* ";
    }
    console.log (ligne);
  }
  for ( i=0; i<n; i++) {
    ligne = "  ";
    for ( j=0; j<i; j++) {
      ligne += " ";
    }
    for (j=0; j<(n-1)-i; j++) {
      ligne += "* ";
    }
    console.log (ligne);
  }
}
function losange2(n) {
  for (var i=0; i<n; i++) {
    var ligne = "";
    for (var j=0; j<n-i; j++){
      ligne += " ";
    }
    for ( j=0; j<i+1; j++){
      (j==0)?ligne += "*":ligne += "**";
    }
    console.log(ligne);
  }
  for (i=0; i<n; i++) {
    ligne = "  ";
    for (j=0; j<i; j++){
      ligne += " ";
    }
    for (j=0; j<n-(i+1); j++){
      (j==0)?ligne += "*":ligne += "**";
    }
    console.log(ligne);
  }
}

function premieres_lettres(tab, lettre){
  var tab2 = [];
  for (var i=0; i<tab.length; i++){
    if (tab[i].charAt(0) == lettre)
      tab2.push(tab[i]);
  }
  return tab2;
}

losange1(5);
losange2(5);


fibonacci(4);
console.log ('***** fibonacci 4 ******');
fibonacci(7);
console.log ('***** fibonacci 7 ******');
conway(5);
console.log ('***** conway 5 ******');
conway(9);
console.log ('***** conway 9 ******');
console.log ('range : '+range([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
premieres_lettres(["ajax","jquery","json","bootstrap","angular","javascript"], "h");
premieres_lettres(["ajax","jquery","json","bootstrap","angular","javascript"], "j");


