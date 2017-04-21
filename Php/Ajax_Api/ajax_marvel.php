<?php
  $url1 = "https://gateway.marvel.com:443/v1/public/comics";
  $t = time();
  $key = "9af64e83b608c91164d5c35e76fa3b59";
  $private = "99d9da012170863d8a9a5d641903e54d6cd42bfb";
  $md5 = md5($t.$private.$key);
  $url2 = "?ts=".$t."&apikey=".$key."&hash=".$md5;
  //echo ($url);
  // https://gateway.marvel.com:443/v1/public/characters?ts=1490264745&apikey=9af64e83b608c91164d5c35e76fa3b59&hash=363226d1d98f404b52c87064a20d381d
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Marvel by DTA</title>
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="ajax_style.css">
		<script src="https://code.jquery.com/jquery-1.11.2.min.js"> </script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"> </script>
	</head>
	<body>
    <div class="page-header">
      <h1>requête AJAX sur Api Marvel</h1>
    </div>
    <div class="main">
      <div class="container-fluid">
        <div class="col-sm-8 affich">
        </div>
        <div class="col-sm-2 col-md-offset-1 ctrl">
          <label for="limit"> Nombre d'entrées : </label><input id="limit" name="limit" type="number" min="20" max="100" value="50"/>
          <label for="offset"> offset de départ : </label><input id="offset" name="offset" type="number" min="0" value="0"/>
          <br /><br />
          <button id="reload" class="button">Reload</button>
        </div>
      </div>
    </div>
    <script>
      $(document).ready(function(){
        // transfert des variables php
        var url1 = "<?php echo ($url1);?>";
        var url2 = "<?php echo ($url2);?>";
        // récupération des valeurs des inputs
        var limit = $('#limit').val();
        var offset = $('#offset').val();
        // construction de l'url
        var url = url1 + url2 + "&limit=" + limit + "&offset=" + offset;
        $.getJSON(url,function(data) {
          if (data['code'] == '200') {
            var total = $("<p><strong>Total des entrées : </strong>" + data['data']['total'] + "</p>");
            $('.ctrl').prepend(total);
            var liste = data['data']['results'];
            var icon = "<a href='#'><span class='glyphicon glyphicon-comment'></span></a> ";
            // construction des lignes d'affichage
            for (var comic in liste){
              var image = "<img src=" + liste[comic]['thumbnail']['path'] + ".jpg width='20' height='20'>";
              var newElem = $(image +"<li id=" + liste[comic]['id'] + ">" + icon + liste[comic]['id'] + " : " + liste[comic]['title'] + "</li><hr />");
              // récupération de la description du comics avec la nouvelle url
			  // A METTRE AVANT L'AJOUT A LA PAGE
              $(newElem).click(function(){
                var id = $(this).attr('id');
                var surl = url1 + "/" + id + url2;
                $.getJSON(surl,function(data) {
                  if (data['code'] == '200') {
                    var description = data['data']['results'][0]['description'];
                    alert ('description : '+description);
                  }else{
                    alert ('API server not responding, code : '+data['code']);
                  }
                });
              });
              // affichage de la ligne
              $('.affich').append(newElem);
            }
/*            var items = [];
              $.each( data['data']['results'], function( key, val ) {
              $.each( val, function( key, val ) {
              if (key == 'title'){
                items.push( "<li id=" + key + "> <span class='glyphicon glyphicon-comment'></span> " + key + " : " + val + "</li>" );
              }
              });
            });
            $('.titre').click(function(){ alert ('click'); });
            $( "<ul/>", {"class": "my-new-list", html: items.join( "" ) }).appendTo( ".affich" );*/
          }
          else {
            alert ('API server not responding, code : '+data['code']);
          }
        });
        $('#reload').click(function(){
          location.reload();
        });
      });
     </script>
  </body>
</html>
