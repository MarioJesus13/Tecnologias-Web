

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("prueba");
x.innerHTML = "Ancho de la ventana interior del navegador: " + w + ", altura: " + h + ".";

document.getElementById("prueba2").innerHTML = "El ancho de la pantalla es " + screen.width;

document.getElementById("prueba3").innerHTML = "El alto de la pantalla es " + screen.height;


document.getElementById("prueba4").innerHTML =
"Ancho de pantalla disponible: " + screen.availWidth;

document.getElementById("prueba5").innerHTML =
"Alto de pantalla disponible: " + screen.availHeight;

document.getElementById("prueba6").innerHTML = 
"Profundidad de color de la pantalla: " + screen.colorDepth;

document.getElementById("prueba7").innerHTML =
"Profundidad del píxel de la pantalla: " + screen.pixelDepth;


document.getElementById("prueba8").innerHTML =
"Page path is " + window.location.pathname;

















