
function saludo(){
	console.log("hola");
}

saludo();

function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	console.log("resultado: ", resultado);
}

operacion(54, 71);
operacion(10, 5);

function retorno1(){
	var numero = 5;
	return numero;
}

console.log(retorno1());

function retorno2(numero){
	return numero;
}

console.log(retorno2(78));