<?php
class Joueur{
  private $_pseudo;
  private $_sante;
  private $_force;
  private $_bouclier;
  // Constructeur de la classe Joueur, initialisation des attributs
  public function __construct($pseudo){
  	$this->_pseudo = $pseudo;
  	$this->_force = 10;
  	$this->_bouclier = false;
  	$this->_sante = 100;
  }
  // Fonction qui renvoie le pseudo du joueur
  public function getPseudo(){
  	return $this->_pseudo;
  }
  // Fonction qui renvoie la santé du joueur
  public function getSante(){
  	return $this->_sante;
  }
  // Fonction qui permet d'attaquer un monstre
  public function attaqueMonstre($de){
  	return ($this->_force * $de);
  }
  // Fonction qui retire le nombre de points de vie correspondants
  public function subitDegats($degats){
  	if ($this->_bouclier){
  		$this->_sante -= $degats/10;
  	}else {
  		$this->_sante -= $degats;
  	}
    if ($this->_sante < 0){
      $this->_sante = 0;
    }
  }
  // Fonction qui permet d'activer le bouclier
  public function activeBouclier($de){
  	if ($de == 1 || $de == 2 || $de == 4){
  		$this->_bouclier = true;
  	}else {
  		$this->_bouclier = false;
  	}
  }
  // Fonction qui indique si le joueur est toujours vivant
  public function estVivant(){
  	return ($this->_sante > 0)?true:false;
  }
}
?>
