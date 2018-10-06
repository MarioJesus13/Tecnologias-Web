<?php

	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];

	if(empty($nombre) || empty($apellido)){
		echo "Ingrese su nombre y apellido";
	} else{
		echo " Muchas Gracias ". $nombre . " " . $apellido . "!";
	}

?>