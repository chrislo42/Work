<?php
session_start ();

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=pomodoro;charset=utf8', 'pomodoro', 'pomo', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch (Exception $e)
{
	die('Erreur : ' . $e->getMessage());
}

if (isset ( $_GET ['page'] )) { $_SESSION ['page'] = $_GET ['page']; }
if (! isset ( $_SESSION ['page'] )) { $_SESSION ['page'] = "login.php"; }

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Pomodoro by DTA</title>
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="style.css">
		<script src="https://code.jquery.com/jquery-1.11.2.min.js"> </script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"> </script>
	</head>
	<body>
		<div class="page-header">
			<h1>Session pomodoro by DTA</h1>
		</div>
		<div class="main">
            <div class="container-fluid">
                <?php
                include ($_SESSION['page']);
                ?>
            </div>
        </div>
	</body>
</html>