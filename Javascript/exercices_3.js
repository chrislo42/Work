function bissextile(annee){

  if (annee%4 == 0){
    if (annee%100 == 0) return false;
    return true;
  }
  if (annee%400 == 0) return true;
  return false;
}

function is_element(element,tableau){
  var occur = 0;
  for (var i in tableau){
    if (tableau[i] === element){ occur++;}
  }
  return (occur);
}


function numberToRoman(roman){
  var result = "";
  if (Math.floor(roman/1000)){result += "M"}
  var reste = roman%1000;
  if (reste >= 900){
    result += "CM";
    reste -= 900;
  }else{
    if (reste >= 500){
     result += "D";
     reste -= 500;
    }
  }
  if (reste >= 400){
    result += "CD";
    reste -= 400;
  }else{
    if (reste > 100){
    for (var i=1; i<= Math.floor(reste/100); i++){
      result += "C";
     }
    reste -= 100*Math.floor(reste/100);
   }
  }
  if (reste >= 90){
    result += "XC";
    reste -= 90;
  }else{
    if (reste >= 50){
     result += "L";
     reste -= 50;
    }
  }
  if (reste >= 40){
    result += ">XL";
    reste -= 40;
  }else{
    if (reste > 10){
    for (var i=1; i<= Math.floor(reste/10); i++){
      result += "X";
     }
    reste -= 10*Math.floor(reste/10);
   }
  }
 if (reste >= 9){
    result += "IX";
    reste -= 9;
  }else{
    if (reste >= 5){
     result += "V";
     reste -= 5;
    }
  }
  if (reste >= 4){
    result += "IV";
    reste -= 4;
  }else{
    if (reste > 1){
    for (var i=1; i<= Math.floor(reste/1); i++){
      result += "I";
     }
   }
  }
  return (result);
}

function romanToNumber(roman){
  var numb = 0;
  var retrait = 0;
  var tab = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
  for (var i=0; i<roman.length-1; i++){
     if ( tab[roman[i]] >= tab[roman[i+1]]){
      numb += tab[roman[i]] - retrait;
      retrait = 0;
    }
    else {retrait += tab[roman[i]]}
   }
  numb += tab[roman[i]] - retrait;
  return (numb);
}

function sapin(n) {
  for (var i=0; i<n; i++) {
    var ligne = "";
    for (var j=0; j<n-i; j++) {
      ligne += " ";
    }
    for (var j=0; j<i+1; j++) {
      ligne += "* ";
    }
    console.log (ligne);
  }
}


console.log(bissextile(1900));
console.log(is_element(2016, [2000,2001,2011,2003,2015,2016]));
console.log(numberToRoman(1999));
console.log(romanToNumber("MCCLIV"));
sapin(15);
