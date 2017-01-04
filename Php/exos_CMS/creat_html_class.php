<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Création HTML avec CKE</title>
    <link rel="stylesheet" href="" />
    <script src="../../ckeditor/ckeditor.js"></script>
  </head>
  <body>
	   <header>
       <h2>Créer votre page HTML</h2>
     </header>
     <main>
       <form class="" action="save_class.php" method="post" name="question">
         <label for="nom">Nom du  fichier : </label><input name="nom" type="text" id="nom" required/><br />
         <label for="comment" style="vertical-align:top ;"> Commentaires : </label>
         <textarea name="commentaire" id="comment"rows="5" cols="20" placeholder="Entrer vos commentaires"></textarea>
         <script>
            CKEDITOR.replace( 'commentaire' );
         </script>
         <br />
         <input type="submit" value="Envoyer" />
       </form>
     </main>
   </body>
 </html>
