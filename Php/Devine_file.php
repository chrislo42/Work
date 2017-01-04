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
         <form method="post" action="Devine_file.php" name="Devine">
           <p> Saisissez votre nombre !</p>
           <input name="nombre" type="text" id="nombre" required/>
           <input type="submit" value="Envoyer" />
          </form>
      </section>
      <section>
        <?php
        $monfichier = fopen('Devine.txt', 'r+');
        if ($_POST['nombre'] ==""){
          $solution = floor(rand(0,99));
          fputs($monfichier,$solution);
//          fputs($monfichier,"test d'écriture");
//          echo "$solution";
        }
        if (isset($_POST['nombre']) && $_POST['nombre'] !=""){
          $solution = substr(fgets($monfichier),0,2); // la lecture renvoie 3 caracteres
          echo "<h3>Bonjour Vous avez choisi : ".$_POST['nombre']."</h3><br />";
//          echo "la solution est "."$solution"."longueur ".strlen($solution);
          if ($_POST['nombre'] != $solution){
            if ($_POST['nombre'] > $solution){
              echo "<h3>Le nombre est trop grand</h3>";
            }else echo "<h3>Le nombre est trop petit</h3>";
          }else echo "<h3><br />BRAVO !! Vous avez trouvé !!</h3>";
        }
        fclose($monfichier);
        ?>
      </section>
     </main>
   </body>
 </html>
