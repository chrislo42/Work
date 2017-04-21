<?php
/*
commande en ligne
curl --data "" "https://graph.facebook.com/v2.8/121761011683566/feed?message="recoucou"&access_token=EAACEdEose0cBAG7Yjr8YXFzwL1TLSBBfCJYZAfyaMt2ZB63RaJehwb4IEd9ImoADiZBPZB41YAVrabRlVoR7iRPeFuA9ZCtnLWrDgjhYWREYvlYvMZB5e9xVKLbbGip4zjenUMZADZCcOUuhJCDCtmS0nQigYHKEQqCN9pHEBCecZCa90R9tfLxQhpRN7nk8dDRlAZABH9dXa3HDHp8mNJiRtnBVFRoB8Ir4ZB78LqwAqXXMgZDZD"
*/

if (isset($_POST['envoie'])){
    $message = htmlspecialchars($_POST['message']);
    $token = "EAACEdEose0cBAG7Yjr8YXFzwL1TLSBBfCJYZAfyaMt2ZB63RaJehwb4IEd9ImoADiZBPZB41YAVrabRlVoR7iRPeFuA9ZCtnLWrDgjhYWREYvlYvMZB5e9xVKLbbGip4zjenUMZADZCcOUuhJCDCtmS0nQigYHKEQqCN9pHEBCecZCa90R9tfLxQhpRN7nk8dDRlAZABH9dXa3HDHp8mNJiRtnBVFRoB8Ir4ZB78LqwAqXXMgZDZD";
    $url = "https://graph.facebook.com/v2.8/121761011683566/feed";
    $data = array('message' => $message, 'access_token' => $token);

    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
}


?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mon message</title>
    <link rel="stylesheet" href="FB.css" />
  </head>
  <body>
    <header>
      <h1>Message à envoyer</h1>
    </header>
    <main>
      <section>
        <form method="post" action="FB_api.php" name="mon formulaire">
          <label for="comment" style="vertical-align:top ;"> Message : </label><br />
          <textarea name="message" id="comment"rows="5" cols="20" placeholder="Entrer votre message"></textarea><br />
          <br />
          <input name="envoie" type="submit" value="Envoyer" />
        </form>
      </section>
    </main>
  </body>
