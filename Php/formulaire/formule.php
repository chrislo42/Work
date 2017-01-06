<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vos réponse</title>
    <link rel="stylesheet" href="formule.css" />
  </head>
  <body>
	<header>
      <nav>
        <a href="#"><img src="images/daedalus.jpg"></a>
        <ul>
          <li><a class="lien" href="#compagnie">Compagnie</a></li>
          <li><a class="lien" href="#safety">Sécurité</a></li>
          <li><a href="#douane"><div id="join">Douane</div></a></li>
          <li><a href="#login"><div id="login">Embarquement</div></a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div id="background_opacity">
<?php
echo "<h3>Bonjour Monsieur ".$_POST['nom_terre']."</h3><br />";

echo "<p>Vous etes de type : ".$_POST['humain']."</p><br />";

echo "<p>Vous venez de la planete ".$_POST['planete']."</p><br /><p>votre numéro universel est : ".$_POST['id']."</p><br />";
if (isset($_POST['nom_orig']) && $_POST['nom_orig'] !="") echo " et votre nom courant est : ".$_POST['nom_orig'].".<br />";

echo "<p>Vous voulez ".$_POST['combien']." place(s) pour un vol à destination de : ".$_POST['list']."</p><br />";
if (isset($_POST['bagages'])) echo "<p>Vous avez signalé des bagages !</p><br />";
if (isset($_POST['premium'])) echo "<p>Vous avez signalé posséder la carte Premium !</p><br />";
if (isset($_POST['assurance'])) echo "<p>Vous avez signalé vouloir prendre une assurance !</p><br />";

if (isset($_POST['photo']) && $_POST['photo'] !="") echo "<p>Vous avez sélectionné cette photo : ".$_POST['photo']."</p><br />";
else echo "<p>Vous n'avez pas sélectionné de photo</p><br />";

if (isset($_POST['commentaire']) && $_POST['commentaire'] !="") echo"<p>Vous avez fait le commentaire suivant : ".$_POST['commentaire']."</p><br />";
else echo "<p>Vous n'avez pas fait de commentaires</p><br />";

$ligne = $_POST['nom_terre'].";".$_POST['humain'].";".$_POST['planete'].";".$_POST['id'].";".$_POST['list'];
$monfichier = fopen('table.fly', 'a+');
fputs($monfichier,$ligne);
fputs($monfichier,"\n");
fclose($monfichier);
?>
        <div id="bouton">
          <a href="#valid">
            <div id="valid">
              Valider
            </div>
          </a>
        </div>
      </div>
	 </main>
  </body>
</html>
