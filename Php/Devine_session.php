<?php
  session_start();
//  echo "1_solution : ".$_SESSION['solution']." essais : ".$_SESSION['essais']." masque : ".$_SESSION['masquer']."<br />";
  if (!isset($_SESSION['solution'])){
    $_SESSION['solution'] = floor(rand(0,99));
    $_SESSION['essais'] = 0;
    $_SESSION['masquer'] = "hidden";
//    echo "2_solution : ".$_SESSION['solution']." essais : ".$_SESSION['essais']." masque : ".$_SESSION['masquer']."<br />";
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Devine</title>
    <link rel="stylesheet" href="Devine.css" />
  </head>
  <body>
	   <header>
       <h2>DEVINE UN NOMBRE ENTRE 0 ET 99</h2>
     </header>
     <main>
       <section>
         <form method="post" action="Devine_session.php" name="Devine">
           <p> Saisissez votre nombre !</p>
           <input name="nombre" type="text" id="nombre" required/>
           <input type="submit" value="Envoyer" />
          </form>
      </section>
      <section>
        <?php
        if ($_POST['nombre'] ==""){
//          fputs($monfichier,"test d'écriture");
//          echo "la solution : ".$_SESSION['solution'];
        }
        if (isset($_POST['nombre']) && $_POST['nombre'] !=""){
          $solution = $_SESSION['solution'];
          echo "<h3>Bonjour Vous avez choisi : ".$_POST['nombre']."</h3><br />";
//          echo "la solution est "."$solution";
          if ($_POST['nombre'] != $solution){
            if ($_POST['nombre'] > $solution){
              echo "<h3>Le nombre est trop grand</h3>";
            }else echo "<h3>Le nombre est trop petit</h3>";
            $_SESSION['essais'] += 1;
              if ($_SESSION['essais'] == 5){
                echo "<h3>Vous avez atteint le nombre max d'essais. Vous avez perdu !!</h3>";
                $_SESSION['masquer'] = "submit";
                session_destroy();
                $_POST['nombre'] = "";
              }
              else{
                echo "<h3>Il vous reste ".(5-$_SESSION['essais'])." essais</h3>";
              }
          }else{
            echo "<h3><br />BRAVO !! Vous avez trouvé !!</h3>";
            $_SESSION['masquer'] = "submit";
            session_destroy();
            $_POST['nombre'] = "";
          }
        }
        ?>
        <form method="post" action="Devine_session.php" name="Devine1">
          <br />
          <p><input type="<?php echo $_SESSION['masquer'];?>" value="Recommencer" /></p>
         </form>
      </section>
     </main>
   </body>
 </html>
