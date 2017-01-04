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
          if ($nom == ""){
            echo "<br />champ obligatoire";
          }else{
            $nom_fichier = "article/".$nom.".edi";
            echo $nom_fichier."<br />";
            $contenu = $_POST['commentaire'];
            $interdit = array("script","link");
            $contenu = str_replace($interdit,"p",$contenu);
            $monfichier = fopen($nom_fichier, 'w+');
            fputs($monfichier,$contenu);
            fclose($monfichier);

            header("Location: index.php?page=$nom_fichier");
          }
        ?>
     </main>
   </body>
 </html>
