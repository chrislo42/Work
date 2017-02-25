<?php
$pseudo = "";
$age = "";
$ville = "";

if (isset($_POST['pseudo'])) {
	$pseudo = htmlspecialchars($_POST['pseudo']);
	$req = $bdd->prepare('SELECT id, age, ville FROM users WHERE pseudo = ?');
	$req->execute(array($pseudo,));
	if ($donnees = $req->fetch()) {
		// utilisateur enregistré
		$_SESSION['pseudo'] = $pseudo;
		$_SESSION['age'] = $donnees['age'];
		$_SESSION['ville'] = $donnees['ville'];
		$_SESSION['id'] = $donnees['id'];
		$query = "UPDATE users SET connexion=NOW() WHERE Id=".$donnees['id'];
		$bdd->query($query);
		$req->closeCursor(); // Termine le traitement de la requête
		header("Location: main.php?page=messages.php");
	}
	else {
		// utilisateur inconnu
		if (isset($_POST['age']) AND $_POST['age']!="" AND isset($_POST['ville']) AND $_POST['ville']!= "") {
			// si le formulaire est complet
			$age = htmlspecialchars($_POST['age']);
			$ville = htmlspecialchars($_POST['ville']);
			$req = $bdd->prepare('INSERT INTO users (pseudo, age, ville, connexion) VALUES (?,?,?,NOW())');
			$req->execute(array($pseudo, $age, $ville));
		}
		else {
			if (isset($_POST['age']) AND $_POST['age'] != "") {
				$age = $_POST['age'];
			}
			if (isset($_POST['ville']) AND $_POST['ville'] != "") {
				$ville = $_POST['ville'];
			}
		}
	}
}
?>
<div class="row">
    <div class="col-xs-2 col-xs-offset-1">
        <form method="post" action="main.php" name="login">
            <p>
                <label for="val1"> Pseudo : </label><input class="entree" name="pseudo" id="val1" type="text" value="<?php echo $pseudo;?>" required/><br />
                <br />
                <label for="val2"> Age : </label><input class="entree" name="age" id="val2" type="text" value="<?php echo $age;?>"/><br />
                <br />
                <label for="val3"> Ville : </label><input class="entree" name="ville" id="val3" type="text" value="<?php echo $ville;?>"/><br />
            </p>
            <br />
            <p>
                <input type="submit" value="Entrer" />
            </p>
        </form>
    </div>
        <div class="col-xs-4 col-xs-offset-1">
        <?php
            if (isset($_POST['pseudo'])){
                if ($age != "" AND $ville != ""){
                    echo "Vous avez été enregistré avec succès,<br />continuer avec le bouton Entrer.";
                }else{
                    echo "Vous n'êtes pas enregistré : complèter le formulaire";
                }
            }
        ?>
    </div>
    
</div>