<?php
  /**
   *
   */
  class Fichier{
    private $_nomFichier;

    public function __construct($chemin,$nom,$extension){
      $this->_nomFichier = $chemin.$nom.$extension;
    }

    public function ecrire($contenu){
      $fichier = fopen($this->_nomFichier,"a");
      fputs($fichier, $contenu);
      fclose($fichier);
    }

    public function lire(){
      $fichier = fopen($this->_nomFichier,"r");
      $contenu = "";
      while($line = fgets($fichier)){
        $contenu = $contenu.$line;
      }
      fclose($fichier);
      return $contenu;
    }
  }

?>
