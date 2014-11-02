//		Variables globales
var palabra = "Amoxicilina";
var hombre, l, espacio;

//		Declaración de la clase ahorcado
var Ahorcado = function (contexto) {
	this.contexto = contexto;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
};
Ahorcado.prototype.dibujar = function () {
	var dibujo = this.contexto;

	//		Iniciando el dibujo del poste
	dibujo.beginPath();

	dibujo.moveTo(150, 100);
	dibujo.lineTo(150, 50);
	dibujo.lineTo(400, 50);
	dibujo.lineTo(400, 350);
	dibujo.lineWidth = 10;
	
	//		Colocando el color de los trazos
	dibujo.strokeStyle = "#000";
	//		Dibujando los trazos
	dibujo.stroke();

	//		Finalizando el dibujo del poste
	dibujo.closePath();

	if (this.intentos > 0) {
		//		Intentos = 1 --> rostro
		dibujo.beginPath();

		dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "#f00";
		dibujo.lineWidth = 5;
		dibujo.stroke();

		dibujo.closePath();

		if (this.intentos > 1) {
			//		Intentos = 2 --> torzo
			dibujo.beginPath();

			dibujo.moveTo(150, 180);
			dibujo.lineTo(150, 250);
			dibujo.strokeStyle = "#f00";
			dibujo.lineWidth = 5;
			dibujo.stroke();

			dibujo.closePath();

			if (this.intentos > 2) {
				//		Intentos = 3 --> brazos
				dibujo.beginPath();

				dibujo.moveTo(120, 220);
				dibujo.lineTo(150, 180);
				dibujo.lineTo(180, 220);

				dibujo.strokeStyle = "#f00";
				dibujo.lineWidth = 5;
				dibujo.stroke();

				dibujo.closePath();

				if (this.intentos > 3) {
					//		Intentos = 4--> piernas
					dibujo.beginPath();

					dibujo.moveTo(120, 290);
					dibujo.lineTo(150, 250);
					dibujo.lineTo(180, 290);

					dibujo.strokeStyle = "#f00";
					dibujo.lineWidth = 5;
					dibujo.stroke();

					dibujo.closePath();

					if (this.intentos > 4) {
						//		Intentos > 5 --> ojos
						dibujo.beginPath();

						//		Ojo izquierdo
						dibujo.moveTo(125, 120);
						dibujo.lineTo(145, 145);
						dibujo.moveTo(145, 120);
						dibujo.lineTo(125, 145);
						//		Ojo derecho
						dibujo.moveTo(155, 120);
						dibujo.lineTo(175, 145);
						dibujo.moveTo(175, 120);
						dibujo.lineTo(155, 145);

						dibujo.strokeStyle = "blue";
						dibujo.lineWidth = 3;
						dibujo.stroke();
						dibujo.closePath();
					}
				}
			}
		}
	}
};

Ahorcado.prototype.trazar = function () {
	this.intentos++;
	if (this.intentos >= this.maximo) 
		this.vivo = false;

	this.dibujar();
}

document.addEventListener("DOMContentLoaded", iniciar);

function iniciar () {
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	var contexto = canvas.getContext("2d");
	canvas.width = 500;
	canvas.height = 400;
	hombre = new Ahorcado(contexto);

	//		Pasando a mayúscula un texto
	palabra = palabra.toUpperCase();

	//		Agregamos el evento al botón
	b.addEventListener("click", agregarLetra);

	//
	espacio = new Array(palabra.length);
	mostrarPista(espacio);
}

function mostrarPista (e) {
	var pista = document.getElementById("pista");
	var texto = "";
	var i = 0;
	var largo = espacio.length;

	for (i = 0; i < largo; i++) 
		if (espacio[i] != undefined) 
			texto = texto + espacio[i] + " ";
		else
			texto += "_ ";

	pista.innerText = texto;
}

function agregarLetra () {
	var letra = l.value;

	mostrarPalabra(palabra, hombre, letra);
}

function mostrarPalabra (p, h, l) {
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();

	for (p in palabra) {
		if (letra == palabra[p]) {
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);

	//		Si no lo encontre
	if (!encontrado) 
		ahorcado.trazar();

	if (!ahorcado.vivo) 
		//		Mostrar la palabra entera
}