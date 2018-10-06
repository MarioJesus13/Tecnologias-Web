var recuadro = document.querySelector("#recuadro");


function cambiarColor(){
	recuadro.style.background = "red";
}

function estadoOriginal(){
	recuadro.style.width = "300px";
	recuadro.style.background = "green";
}


var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja)

function moverCaja(){

	recuadro.style.width = "1500px";
	recuadro.style.transition = "1s width ease";
}
var boton1 = document.querySelector("#boton1");

boton1.addEventListener("click",original)

function original(){
	recuadro.style.width = "500px";
	recuadro.style.background = "green";
}







