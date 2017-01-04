<?php
    require('Fichier.class.php');
  require('FichierCSV.class.php');
  require('FichierHTML.class.php');

  $file = new FichierCSV ("test.csv",";");
  echo "création objet CSV.<br />";
  echo ("fichier avant : ".$file->lire()."<br />");
  $file->changeChar(":");
  echo ("fichier après : ".$file->lire()."<br />");
  $file->changeChar(";");
  echo ("fichier remis : ".$file->lire()."<br />");
  echo ("fin<br />");

  $file1 = new FichierHTML ('test.html');
  echo "création objet HTML.<br />";
  echo ("fichier avant : ".$file1->lire()."<br />");
  $file1->changeBalise("b","em");
  $file1->changeBalise("i","b");
  echo ("fichier après : ".$file1->lire()."<br />");
  $file1->changeBalise("b","i");
  $file1->changeBalise("em","b");
  echo ("fichier retour : ".$file1->lire()."<br />");
  echo ("fin");

?>
