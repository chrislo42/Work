<?php 

function __autoload($class_name) {
	include $class_name . '.class.php';
}
?>

<!DOCTYPE html>
<html>
  <head>
  	<meta charset="utf-8">
    <title>Mon QCM</title>
  </head>

  <body>
  	<h1> *** Mon QCM ***</h1>
	<form method="post" action="index.php" name="qcm">
<?php
$qcm = new Qcm();
$question1 = new Question('Et paf, ça fait ...');
$question1->ajouterReponse(new Reponse('Des mielpops'));
$question1->ajouterReponse(new Reponse('Des chocapics', 1));
$question1->ajouterReponse(new Reponse('Des actimels'));
$question1->setExplications('Et oui, la célèbre citation est « Et paf, ça fait des chocapics ! »');
$qcm->ajouterQuestion($question1);
$question2 = new Question('POO signifie');
$question2->ajouterReponse(new Reponse('Php Orienté Objet'));
$question2->ajouterReponse(new Reponse('ProgrammatiOn Orientée'));
$question2->ajouterReponse(new Reponse('Programmation Orientée Objet', 1));
$question2->setExplications('Sans commentaires si vous avez eu faux :-°');
$qcm->ajouterQuestion($question2);
if (isset($_POST['question_0']) && $_POST['question_0'] != ""){
	$qcm->afficher();
}
else{
	$qcm->generer();
}
?>
		<br />
		<input type="submit" value="Réponse">
	</form>
  </body>
</html>
