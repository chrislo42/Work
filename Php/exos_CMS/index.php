<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>affichage .edi</title>
    <link rel="stylesheet" href="index.css" />
    <script src="js/jquery.js" type="text/javascript"></script><!-- Insertion de la bibliotheque jQuery -->
	  <script type="text/javascript" src="js/localscroll/jquery.localscroll.js"></script>
	  <script type="text/javascript" src="js/localscroll/jquery.scrollTo.js"></script>
	  <script type="text/javascript" src="js/lancement.js"></script><!-- permet le lancement de la fonction de scroll -->
  </head>
  <body>
    <div id="header">
        <div><img src="images/logo-DTA.png"></div>
          <?php
            $name = substr(strrchr($_GET['page'],"/"),1);
            $name = substr($name,0,strpos($name,"."));
            echo "<p><h1>Visualisation des articles : $name </h1></p>";
          ?>
    </div>
    <div class="right">
      <?php
//       $monfichier = fopen($_GET['page'], 'r');
//       $contenu = "";
//       while($buffer = fgets($monfichier)){;
//         $contenu = $contenu.$buffer;
//       }
//       fclose($monfichier);
//       echo "<h2>fichier : </h2>"."\n".$contenu."\n";
//       echo "<h2>fichier : </h2>"."\n".include($_GET['page'])."\n";
      include($_GET['page']);
      ?>

    </div>
    <div class="left">
      <?php
        $dir = 'article';
        $files = scandir($dir);
        array_shift($files);
        array_shift($files);
        foreach ($files as $value) {
          $value = substr($value,0,strpos($value,"."));
//        echo "<p><a href=\"$dir/$value.edi\">".$value."</a></p>";
          echo "<p><a href=\"index.php?page=$dir/$value.edi\">".$value."</a></p>";
        }
//        print_r($files);
      ?>
    </div>
     <main>
      <!--
        <?php
        echo "texte en forme :<br />".$_POST['commentaire'];
        $texte = strip_tags($_POST['commentaire']);
        $texte = htmlspecialchars($_POST['commentaire']);
        echo "texte simple :<br />".$texte;
      ?>-->
     </main>
   </body>
 </html>
