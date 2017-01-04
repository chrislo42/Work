function arrayToObject(list){
    var result = {mail:'Inconnu',nom:'Inconnu',prenom:'Inconnu'};
	(list[0] != "" && list[0] != null)? result.mail = list[0]: null;
	(list[1] != "" && list[1] != null)? result.nom = list[1]: null;
	(list[2] != "" && list[2] != null)? result.prenom = list[2]: null;
	return result;
}

// return {mail:(list[0] === null || list[0] === "")?"Inconnu":list[0],
//			nom:(list[1] === null || list[1] === "")?"Inconnu":list[1],
//			prenom:(list[2] === null || list[2] === "")?"Inconnu":list[2]};
