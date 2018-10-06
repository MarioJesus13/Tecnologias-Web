function ejemploAJAX() {
  	
 
  	var ajaxRequest;

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	} else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
  

  	ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
     document.getElementById("text").innerHTML = ajaxRequest.responseText;
    }
  };
  ajaxRequest.open("GET", "documento.txt", true);
  ajaxRequest.send();
}

function leerJSON(){

	var ajaxRequest;

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	} else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var datos = document.getElementById("json");

	ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
    	var datosJSON = JSON.parse(ajaxRequest.responseText);
    	console.log(datos);
    	if(datos.innerHTML === ""){
    		for (var i in datosJSON){
    			datos.innerHTML += i + ": " + datosJSON[i] + "<br />";
    		}
    	}
    	
    }
  };
  ajaxRequest.open("GET", "datos.json", true);
  ajaxRequest.send();
}