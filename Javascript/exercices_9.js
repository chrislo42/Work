// correction
function verifParentheses_correction(s){
  var nb = 0;
  for (var i=0; i<s.length; i++) {
    if (s[i] == "(") nb++;
    else
      if (s[i] == ")")
        if (nb > 0) nb--;
        else return false;
      else return false;
  }
  if (nb == 0) return true;
  else return false;
}


function verifParentheses(s) {
  while (s.indexOf(")") != -1){
    var target1 = s.indexOf(")");
    var target2 = s.substring(0,target1).lastIndexOf("(");
    if ( target2 == -1) return false;
    if (target1 > target2){
      s = s.substring(0,target2)+s.substring(target2+1,target1)+s.substring(target1+1,s.lenght);
    }else return false;
  }
  if ( s.lastIndexOf("(") != -1) return false;
  return true;
}

function json(keys, values){
  var tab = {};
  for (var i=0; i<keys.length; i++) {
    tab[keys[i]] = values[i];
  }
  return tab;
}

function genhash(s){
  var tab = s.split(" ");
  for (var i=0; i<tab.length; i++) {
    tab[i] = tab[i].replace(tab[i][0], tab[i][0].toUpperCase());
  }
return "#"+tab.toString().replace(/,/g, "");
}


function diff_max(tab) {
  if (tab.length == 0) return undefined;
  var min = tab[0];
  var max = 0;
  for (var i=0; i<tab.length; i++) {
    if (tab[i] < min) min = tab[i];
    if (tab[i] > max) max = tab[i];
    if (tab[i] < 0) return undefined;
  }
  return max-min;
}

function motsEnDouble(str) {
  var retour = "";
  var tab = str.replace(/[\.\?,;:!']/g,"").split(" ");
  for (var i=0; i<tab.length; i++) {
    if (tab.lastIndexOf(tab[i]) != i) {
      retour += tab[i] + " ";
    }
  }
  return retour;
}

console.log("diff vide : "+diff_max([]));
console.log("diff seul : "+diff_max([10]));
console.log("diff undefined : "+diff_max([5,6,-2]));
console.log("diff 4 : "+diff_max([5,6,2]));

console.log("Double : "+motsEnDouble("Ceci est un test. test est rigolo."));


console.log ('cas (()() : '+verifParentheses("(()()"));
console.log ('cas (())() : '+verifParentheses("(())()"));
console.log ('cas (())()( : '+verifParentheses("(())()("));
json(["zero","un","deux"],[0,1,2]);
console.log ('genhash 1 : '+genhash("le javascript c'est super"));
