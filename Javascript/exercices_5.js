function a_doublons(tab){
  for (var i=0; i<tab.length; i++){
    for (var j=i+1; j<tab.length; j++){
      if (tab[i] == tab[j]) return true;
    }
  }
  return false;
}

function doublons(tab){
  var doublons = [];
  for (var i=0; i<tab.length; i++){
    for (var j=i+1; j<tab.length; j++){
      if (tab[i] == tab[j])
        if (doublons.indexOf(tab[i]) == -1) doublons.push(tab[i]);
    }
  }
  return doublons;
}

function double(tab){
  var double = []
  var x;
  var length = tab.length;
  for (var i=0; i<length; i++){
    x = tab.shift();
    if (tab.indexOf(x) != -1)
      if (double.indexOf(x) == -1) double.push(x);
  }
  return double;
}

function n_fois(tab, n){
  var res = []
  var x;
  var j;
  var compt;
  while(tab[0] !== undefined){
    x = tab.shift();
    compt = 1;
    while ((j=tab.indexOf(x)) != -1){
    compt++;
    tab.splice(j, 1);
    }
  if (compt >= n) res.push(x);
  }
  return res;
}

function base10(n, b) {
  n = n.toLocaleUpperCase();
  var nombre = 0;
  var trans = 0;
  var extra = {A:10, B:11, C:12, D:13, E:14, F:15};
  for (var i=0; i<n.length; i++) {
    if (n[i] in extra){
      trans = extra[n[i]];
    }else{
      trans = n[i];
    }
    nombre += trans * Math.pow(b, n.length-(i+1));
  }
  return nombre.toString();
}

function base_n(n, b){
  var nombre = 0;
  var modulo = 0;
  var indice = 0;
  while (n){
    nombre += n%b * Math.pow(10, indice);
    modulo = Math.floor(n / b);
    n = modulo;
    indice++
//    console.log("n :"+n+" modulo :"+modulo+" nombre :"+nombre);
  }
  return nombre;
}
function base10ToN(n, b){
  var result = "";
  var extra = {"10":"A", "11":"B", "12":"C", "13":"D", "14":"E", "15":"F"};
  while (n){
    nombre = n%b;
    if (nombre in extra){
      result = extra[nombre] + result;
    }else{
      result = nombre + result;
    }
    n = Math.floor(n / b);
  }
  return result;
}

console.log("base 10 : "+base10("ff",16));
console.log("base 10 : "+base10("100",16));
console.log("base n : "+base_n("22",2));
console.log("base n : "+base_n("22",4));
console.log("base n : "+base_n("255",8));
console.log("base n : "+base_n("22",9));
console.log("base x : "+base10ToN("22",2));
console.log("base x : "+base10ToN("22",16));
console.log("base x : "+base10ToN("255",16));
console.log('a_doublons : ',a_doublons([0,1,2,3,4,5]));
console.log('a_doublons : ',a_doublons([0,1,2,3,1,5]));
console.log('doublons : ',doublons([0,1,2,3,1,5]));
console.log('doublons : ',double([0,1,2,3,1,5,6,3,1,3,3]));
console.log('retrouve : ',n_fois([0,1,2,3,1,5,6,3,3,1,3], 3));
