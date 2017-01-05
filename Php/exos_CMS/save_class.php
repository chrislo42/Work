<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Création HTML php</title>
    <link rel="stylesheet" href="creat_html.css" />
  </head>
  <body>
	   <header>
     </header>
     <main>
       <?php
 //	   CORRECTION
 //	   $nom = str_replace(" ", "", htmlspecialchars($_POST['nom']));
       $nom = str_replace(" ","",$_POST['nom']); // suppression des espaces
       echo "<h2>Nom du fichier : ".$nom."</h2>";
       ?>
       <section>
         <?php
            echo "texte en forme :<br />".$_POST['commentaire'];
            $texte = strip_tags($_POST['commentaire']);
            $texte = htmlspecialchars($_POST['commentaire']);
            echo "texte complet :<br />".$texte;
        ?>
      </section>
        <?php
          if ($nom == ""){ // if (empty($nom))
            echo "<br />champ obligatoire";
          }else{
            require('Fichier.php');
            $nom_fichier = "article/".$nom.".edi";
            $fichier = new Fichier("article/",$nom,".edi");
            $contenu = $_POST['commentaire'];
            $interdit = array("script","link");
            $contenu = str_replace($interdit,"p",$contenu);
            $fichier->ecrire($contenu);
            echo($fichier->lire());

            header("Location: index.php?page=$nom_fichier");
          }
        ?>
     </main>
   </body>
 </html>
