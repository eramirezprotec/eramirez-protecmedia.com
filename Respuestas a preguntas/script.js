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