<?php
require('MonstreFacile.class.php');
// Classe MonstreDifficile, hérite de MonstreFacile
class MonstreDifficile extends MonstreFacile{
  // Constructeur de la classe MonstreDifficile, initialisation des attributs
  private $_bouclier;
  public function __construct($nom){
  	parent::__construct($nom);
  	$this->_bouclier = false;
  }
  // Fonction qui permet au monstre d'attaquer le joueur
  public function attaqueJoueur($de){
  	return (($this->_force * 2) * $de );
  }
  // Fonction qui active un bouclier pour le monstre
  public function activeBouclier(){
  	if ($de == 1 || $de == 2 || $de == 4){
  		$this->_bouclier = true;
  	}else{
  		$this->_bouclier = false;
  	}
  }
}
?>
