<?php
/*require ("Fichier.class.php");*/

class FichierHTML extends Fichier{

   public function __construct($file){
     parent::__construct($file);
   }
   public function changeBalise($oldBalise,$newBalise){
     $contenu = $this->lire();
     $contenu = str_replace("<".$oldBalise.">","<".$newBalise.">",$contenu);
     $contenu = str_replace("</".$oldBalise.">","</".$newBalise.">",$contenu);
     $this->ecrire($contenu);
   }
}
?>
