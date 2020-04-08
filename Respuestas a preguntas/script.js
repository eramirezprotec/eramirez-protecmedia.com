/* Segunda pregunta */
(function () {
	{
		let prueba = 'Hola, soy el valor de la variable "prueba"';
	}
	if (typeof prueba !== "undefined") {
		document.querySelector('#segunda_pregunta > div').innerHTML = 'Sí, desde una función se puede acceder a una variable definida con la palabra clave "let" dentro de un bloque de la misma función.';
	} else {
		document.querySelector('#segunda_pregunta > div').innerHTML = 'NO, desde una función NO se puede acceder a una variable definida con la palabra clave "let" dentro de un bloque de la misma función.';
	}
})();
/* Finaliza la segunda pregunta */

/* Cuarta pregunta */
var a = 'Soy la variable "a" <b>GLOBAL</b>';
(function () {
	var a = 'Soy la variable "a" <b>LOCAL</b>';
	const mensaje = 'A continuación, se imprime el valor de la variable "a" desde la función:<br><br>';
	document.querySelector('#cuarta_pregunta > div').innerHTML = mensaje + a;
})();
/* Finaliza la cuarta pregunta */

/* Quinta pregunta */
var funcionContador = (function () {
	var contador = 0;
	return function () {
		function obtener() {
			return contador;
		}
		function incrementar() {
			contador += 1; 
			return contador;
		}
		funcionContador.obtener = obtener;
		funcionContador.incrementar = incrementar;
	}
})();
funcionContador();
var elementoQuintaPregunta = document.querySelector('#quinta_pregunta > div');
elementoQuintaPregunta.innerHTML = '<b>Incrementamos</b> el contador: ' + funcionContador.incrementar();
elementoQuintaPregunta.innerHTML += '<br><br><b>Consultamos</b> el valor del contador: ' + funcionContador.obtener();
elementoQuintaPregunta.innerHTML += '<br><br><b>Incrementamos</b> el contador: ' + funcionContador.incrementar();
elementoQuintaPregunta.innerHTML += '<br><br><b>Incrementamos</b> el contador: ' + funcionContador.incrementar();
elementoQuintaPregunta.innerHTML += '<br><br><b>Consultamos</b> el valor del contador: ' + funcionContador.obtener();
/* Finaliza quinta pregunta */

/* Sexta pregunta */
var formPromesa = document.getElementById('form-promesa');
formPromesa.addEventListener('submit', realizarPeticion);

function realizarPeticion(evento) {
	event.preventDefault();
	
	var tiempoMaximo = document.getElementById('tiempo').value;
	
	var tiempoTranscurrido = 0;
	
	var promesa = new Promise((exito, fracaso) => {
		if (tiempoTranscurrido >= tiempoMaximo) {
			fracaso('Se ha excedido el tiempo');
		}
		var intervalo = setInterval(() => {
			if (tiempoTranscurrido > tiempoMaximo) {
				fracaso('Se ha excedido el tiempo');
				clearInterval(intervalo);
			}
			tiempoTranscurrido += 1;
		}, 1);
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				clearInterval(intervalo);
				exito(this.responseText);
			} else {
				if (this.readyState == 4) {
					clearInterval(intervalo);
					fracaso(this.responseText);
				}
			}
		};
		xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
		xhttp.send();
	});
	
	promesa.then((data) => {
		document.getElementById('respuesta-promesa').innerHTML = data;
	}).catch((error) => {
		document.getElementById('respuesta-promesa').innerHTML = error;
	});
}
/* Finaliza sexta pregunta */