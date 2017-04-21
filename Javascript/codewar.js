transpose = function(array) {
  var mat = arguments[0];
  if (mat.length == 1) {
    return mat[0];
  }
  var liste = [];
  var trans = [];
  while (mat.length > 1){
    for (var i=0; i<mat[0].length; i++){
      liste.push(mat[0][i]);
    }
    mat.splice(0,1);
    trans = init(mat);
    mat = turn(mat, trans);
  }
  for (var i=0; i<trans[0].length; i++){
    liste.push(trans[0][i]);
  }
  return liste;
}

function init(mat){
    var trans = [];
    for (var i=0; i<mat[0].length; i++) {
      for (var j=0; j<mat.length; j++) {
        if (!trans[i]) trans[i] = [];
        trans[i][j] = 0;
      }
    }
    return trans;
  }

  function turn(mat, trans){
    for (var i=0; i<mat.length; i++){
      for (var j=0; j<mat[i].length; j++){
          trans[mat[i].length-(j+1)][i] = mat[i][j];
      }
    }
    return trans;
  }




function nextGreater(n){
  var numb = n.toString();
  var tab = numb.split("");
  var max = tab.length-1;
  for (i=max; i >=0; i--){
    if (tab[i] > tab[i-1]){
        bras = tab.splice(i,max);
        rest = tab.splice(0,i-1);
        pivot = numb[i-1];
        console.log('brassage : '+bras+" pivot ; "+pivot+" rest : "+rest);
        break;
    }
    if (i == 0) return -1;
  }
  var valmin = "9";
  for (j=0; j< bras.length; j++){
    if (bras[j] > pivot){
      if (bras[j] < valmin) valmin = bras[j];
    }
  }
  var index = bras.indexOf(valmin);
  console.log('index : '+index+' valmax : '+valmin);
  bras.splice(index,1);
  bras.splice(0,0,pivot)
  console.log('bras : '+bras);
  orde = bras.sort();
  orde.splice(0,0,valmin);
  var resultat = rest.join("")+orde.join("");
  return parseInt(resultat);
}


function nextSmaller(n) {
  var numb = n.toString();
  var tab = numb.split("");
  var max = tab.length-1;
  for (i=max; i >=0; i--){
    if (tab[i] < tab[i-1]){
        bras = tab.splice(i,max);
        rest = tab.splice(0,i-1);
        pivot = numb[i-1];
        console.log('brassage : '+bras+" pivot ; "+pivot+" rest : "+rest);
        break;
    }
    if (i == 0) return -1;
  }
  var valmax = "0";
  for (j=0; j< bras.length; j++){
    if (bras[j] < pivot){
      if (bras[j] > valmax){
      valmax = bras[j];
      }
    }
  }
  var index = bras.indexOf(valmax);
  console.log('index : '+index+' valmax : '+valmax);
  bras.splice(index,1);
  bras.splice(0,0,pivot)
  console.log('bras : '+bras);
  orde = bras.reverse(bras.sort());
  //rest.push(valmax);
  orde.splice(0,0,valmax);
  var order = orde.join("");
  var reste = rest.join("");
  var resultat = reste+order;
if (resultat[0] == "0"){
    return -1;
  }
  return parseInt(resultat);
}

findWrongWayCow = function(field) {
  var dir = [0,0,0,0];
  coord = [];
  for (i=0; i<field.length; i++){
    for (j=0; j<field[i].length; j++){
      if (field[i][j].indexOf("c") != -1){
        field[i][j] = ".";
        if (field[i][(j+1 >= field[i].length)?j:j+1] == "o"){
          field[i][j+1] = ".";
          dir[0] += 1;
          if (dir[0] == 1) coord[0]=[j,i];
        }
        if (field[i][(j-1 < 0)?0:j-1] == "o"){
          field[i][j-1] = ".";
          dir[1] += 1;
          if (dir[1] == 1) coord[1]=[j,i];
        }
        if (field[(i+1 >= field.length)?i:i+1][j] == "o"){
          field[i+1][j] = ".";
          dir[2] += 1;
          if (dir[2] == 1) coord[2]=[j,i];
        }
        if (field[(i-1 < 0)?0:i-1][j] == "o"){
          field[i-1][j] = ".";
          dir[3] += 1;
          if (dir[3] == 1) coord[3]=[j,i];
        }
      }
    }
  }
  console.log('retour : '+coord[dir.indexOf(1)]);
  return (coord[dir.indexOf(1)]);
}

function show(field) {
  for (var i=0; i<field.length; i++) {
    console.log(field[i].join(''))
  }
  return field
}

 var field = [
      "cow.cow.cow.cow.cow".split(''),
      "cow.cow.cow.cow.cow".split(''),
      "cow.woc.cow.cow.cow".split(''),
      "cow.cow.cow.cow.cow".split('')
    ]

function bestMatch(ALAHLYGoals, zamalekGoals) {
  var dif = 100;
  var goals = 0;
  var match = 0;
  for (i=0; i<ALAHLYGoals.length; i++){
    if (ALAHLYGoals[i] - zamalekGoals[i] < dif){
      dif = ALAHLYGoals[i] - zamalekGoals[i];
      goals = zamalekGoals[i];
      match = i
    }else if (ALAHLYGoals[i] - zamalekGoals[i] == dif){
      if (zamalekGoals[i] >= goals){
        goals = zamalekGoals[i];
        match = i
      }
    }
  }
  return (match);
}

console.log('match 1 ****** '+bestMatch([6, 4],[1, 2]));
console.log('match 1 ****** '+bestMatch([4, 3, 4],[1, 1, 1]));
console.log('match 5 ****** '+bestMatch( [11,8,10,11,12,8,10,18],[9,4,2,9,4,7,6,10]));
console.log('match 5 ****** '+bestMatch( [4,11,12,4,13,7,7,7,14,6,11,2,6,9,4,11,11],[2,7,9,0,8,6,0,0,10,5,5,0,1,6,1,7,1]));
console.log(' coord 6,2 : '+findWrongWayCow(show(field)));
console.log('nextsmaller 54213 : '+nextSmaller(54213));
console.log('*****************');
console.log('nextsmaller 1072356 : '+nextSmaller(1072356));
console.log('*****************');
console.log('nextsmaller 1072316 : '+nextSmaller(1072316));
console.log('transpose 1 : '+transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log('transpose 2 : '+transpose([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));
