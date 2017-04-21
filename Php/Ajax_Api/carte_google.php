<?php
//(1) On inclut la classe de Google Maps pour générer ensuite la carte.
require('GoogleMapAPI.class.php');

//(2) On crée une nouvelle carte; Ici, notre carte sera $map.
$map = new GoogleMapAPI('map');

//(3) On ajoute la clef de Google Maps.
$map->setAPIKey('AIzaSyB-3xjM9pm1VWA9SuDFyDN91fk3lUYDvnQ');
    
//(4) On ajoute les caractéristiques que l'on désire à notre carte.
$map->setWidth("800px");
$map->setHeight("500px");
$map->setCenterCoords ('2', '48');
$map->setZoomLevel (10);
$map->addMarkerByCoords( 4.7, 45.4901, "Détail", "<em>Mon adresse</em> Ma ville", "ma maison");
$map->setInfoWindowTrigger('mouseover');
$map->setMapType('satellite');

//(5) On applique la base XHTML avec les fonctions à appliquer ainsi que le onload du body.
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
	
	<head>
		<title>Ma première carte Google Maps</title>
		<?php $map->printHeaderJS(); ?>
		<?php $map->printMapJS(); ?>
	</head>
	
	<body onload="onLoad();">
		<?php $map->printMap(); ?>
	</body>
	
</html>

