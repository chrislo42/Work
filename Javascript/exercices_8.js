function decode_vigen(code, cle){
  var mot = "";
  if (/[^a-z]/.test(cle) === false){
    for (i=0; i<code.length; i++){
      var idx = i%cle.length;
      var decal = cle.charCodeAt(idx)-97;
      mot += upset(code[i], decal);
    }
  }
  return mot;
}

function upset(lettre, nombre){
  if (lettre.charCodeAt() > 96 && lettre.charCodeAt() < 123){
    (lettre.charCodeAt()-nombre < 97)?nombre -=26:nombre;
    return String.fromCharCode(lettre.charCodeAt()-nombre);
  }
  if (lettre.charCodeAt() > 64 && lettre.charCodeAt() < 91){
  (lettre.charCodeAt()-nombre < 65)?nombre -=26:nombre;
  return String.fromCharCode(lettre.charCodeAt()-nombre);
  }
  return lettre;
}

function code_vigen(mot, cle){
  var code = "";
  if (/[^a-z]/.test(cle) === false){
    for (i=0; i<mot.length; i++){
      var idx = i%cle.length;
      var decal = cle.charCodeAt(idx)-97;
      code += offset(mot[i], decal);
    }
  }
  return code;
}

function offset(lettre, nombre){
  if (lettre.charCodeAt() > 96 && lettre.charCodeAt() < 123){
    (lettre.charCodeAt()+nombre > 122)?nombre -=26:nombre;
    return String.fromCharCode(lettre.charCodeAt()+nombre);
  }
  if (lettre.charCodeAt() > 64 && lettre.charCodeAt() < 91){
    (lettre.charCodeAt()+nombre > 90)?nombre -=26:nombre;
    return String.fromCharCode(lettre.charCodeAt()+nombre);
  }
  return lettre;
}

console.log('code message cle : '+code_vigen('message', 'cle'));
console.log('decode opwulkg cle : '+decode_vigen('opwulkg', 'cle'));
console.log('code message zorro : '+code_vigen('message', 'zorro'));
console.log('decode lsjjofs zorro : '+decode_vigen('lsjjofs', 'zorro'));
console.log('code message message : '+code_vigen('message', 'message'));
console.log('decode yikkami message : '+decode_vigen('yikkami', 'message'));
console.log('code phrase codage : '+code_vigen('C\'est un essai', 'codage'));
console.log('decode phrase codage : '+decode_vigen('E\'hsz wb eywcw', 'codage'));

