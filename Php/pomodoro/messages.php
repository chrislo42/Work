<?php
$pseudo = $_SESSION['pseudo'];
$age = $_SESSION['age'];
$ville = $_SESSION['ville'];
$id = $_SESSION['id'];

if (isset($_POST['message'])){
	$message = htmlspecialchars($_POST['message']);
	$req = $bdd->prepare('INSERT INTO messages (id_user, contenu) VALUES (?,?)');
	$req->execute(array($id, $_POST['message']));
	$req->closeCursor(); // Termine le traitement de la requête
}
else{
	$message = "";
}

?>
<div class="row">
	<div class="col-xs-1">
		<h4> Messages:</h4>
	</div>
	<div class="col-xs-8">
		<?php 
			$req = $bdd->query('SELECT * FROM messages ORDER BY date DESC');
			while ($donnees = $req->fetch()){
				$req1 = $bdd->prepare('SELECT pseudo,age,ville FROM users WHERE id = ?');
				$req1->execute(array($donnees['id_user'],));
				$retour = $req1->fetch();
				echo ("<p><span title=\"".$retour['age']." ans, ".$retour['ville']."\">".$retour['pseudo']."</span>, le ".$donnees['date']."<br />");
				echo ($donnees['contenu']."</p><hr/>");
			}
		?>
	</div>
	<div class="col-xs-2">
		<p> Pseudo : <?php echo ($_SESSION['pseudo']);?></p>
		<p> Age : <?php echo ($_SESSION['age']);?></p>
		<p> Ville : <?php echo ($_SESSION['ville']);?></p>
		<br />
		<a href="main.php?page=logout.php"><button class=\"btn btn-primary btn-xs\">Deconnexion</button></a>
		<br />
		<br />
		<hr />
		<br />
		<p>
			Utilisateurs connectés :
		</p>
		<?php
			$req = $bdd->query('SELECT * FROM users WHERE TIMEDIFF(NOW(),connexion) < "00:05:00"');
			while ($donnees = $req->fetch()){
				echo ("<span title=\"".$donnees['age']." ans, ".$donnees['ville']."\">".$donnees['pseudo']."</span><br />");
			}
		?>
	</div>
</div>
<div class="row">
    <form method="post" action="main.php" name="login">
        <div class="col-xs-6 col-xs-offset-1">
            <label for="val1"> Message : </label>
            <input class="entree" name="message" id="val1" size="50" type="text" value="<?php echo $message;?>" required/>
        </div>
        <div class="col-xs-2 col-xs-offset-1">
            <input type="submit" value="Envoyer" />
    	</div>
	</form>
</div>
