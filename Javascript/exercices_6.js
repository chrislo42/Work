function lettre_unique(mot){
  for (var i=0; i<mot.length; i++){
    if (mot.indexOf(mot[i],i+1) != -1){
     return false;
    }
  }
  return true;
}

function palindrome(mot){
//  var strReverse = mot.split('').reverse().join('');
  var strReverse = "";
  for (var i=0; i<mot.length; i++){
    strReverse = mot[i]+strReverse;
//	if (mot[i] != mot[mot.length-(i+1)] return false;
//	}
//	return true;
  }
  if (mot === strReverse) return true;
  return false;
}

function anagramme(mot1, mot2){
  if (mot1.length == mot2.length){
    for (var i=0; i<mot1.length; i++){
      if (mot2.indexOf(mot1[i]) != -1){
        mot2 = mot2.replace(mot1[i],"");
      }else{
        return false
      }
    }
  }else{
    return false;
  }
  return true;
}

function minus(lettre) {
  var maj = lettre.toUpperCase();
  if (lettre == maj){
    return false;
  }
  return true;
}

function chaine_minus(mot){
  if (/[0-9:]./.test(mot) === true) return false;
  for (var i=0; i<mot.length; i++){
    if (!minus(mot[i])){
      return false;
    }
  }
  return true;
  // return /^[a-z]+$/g.test(mot);
}

function crypt_cesar(mot, cle){
  var code = "";
  var alph = "abcdefghijklmnopqrstuvwxyz";
  for (var i=0; i<mot.length; i++){
    var a = alph.indexOf(mot[i]);
    a = a+cle;
    if (a > 25) a -= 26;
    code += alph[a];
    // code += String.fromCharCode(code>122?code-26:code);
  }
  return code;
}

function decrypt_cesar(code, cle){
  var mot = "";
  var alph = "abcdefghijklmnopqrstuvwxyz";
  for (var i=0; i<code.length; i++){
    var a = alph.indexOf(code[i]);
    if ((a-cle) < 0) a += 26;
    a = a-cle;
    mot += alph[a];
  }
  return mot;
}

function compare(s1, s2){
  for (var i=0; i<s1.length; i++){
    if (i < s2.length){
      if (s1[i] > s2[i]){
        return +1;
      }else if (s1[i] < s2[i]){
        return -1;
      }
    }else{
          return +1;
    }
  }
  if(i < s2.length)
    return -1;
  else
    return 0;
}

console.log ('lettre unique paris : '+ lettre_unique('paris'));
console.log ('lettre unique parias : '+ lettre_unique('parias'));
console.log ('palindrome alla : '+palindrome('alla'));
console.log ('palindrome alli : '+palindrome('alli'));
console.log ('anagramme manoir et romain : '+anagramme('manoir', 'romain'));
console.log ('anagramme couille et luciole : '+anagramme('couille', 'luciole'));
console.log ('anagramme manoir et minore : '+anagramme('manoir', 'minore'));
console.log ('anagramme chien et niche : '+anagramme('chien', 'niche'));
console.log ('minuscule n : '+minus('n'));
console.log ('minuscule N : '+minus('N'));
console.log ('chaine minuscule vraie : '+chaine_minus('minuscule'));
console.log ('chaine minuscule fausse : '+chaine_minus('minusculE'));
console.log ('chaine minuscule fausse : '+chaine_minus('minus5cule'));
console.log ('codage bonjour : '+crypt_cesar('bonjour',4));
console.log ('decodage bonjour : '+decrypt_cesar('fsrnsyv',4));
console.log ('codage zorro : '+crypt_cesar('zorro',4));
console.log ('decodage zorro : '+decrypt_cesar('dsvvs',4));
console.log('compare1 : '+compare('rient', 'rien'));
