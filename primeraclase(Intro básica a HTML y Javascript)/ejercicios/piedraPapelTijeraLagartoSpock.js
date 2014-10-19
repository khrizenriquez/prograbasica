"use strict";
//		Asigno los valores a mis variables
var piedra 	= 0;
var papel 	= 1;
var tijera 	= 2;
var lagarto = 3;
var spock 	= 4;

var valMinimo = 0;
var valMaximo = 4

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var eleccionUsuario, eleccionMaquina;
//		Le pregunto al usuario que deseará hacer
eleccionUsuario = prompt("Jugarás piedra, papel tijera, lagarto, Spock entonces que eliges?\n\n" 
	+ "Piedra: 0\n" 
	+ "Papel: 1\n"
	+ "Tijera: 2\n"
	+ "Lagarto: 3\n"
	+ "Spock: 4\n");

//		Convierto a tipo entero mi valor
eleccionUsuario = parseInt(eleccionUsuario);

eleccionMaquina = Math.floor(Math.random() * (valMaximo - valMinimo + 1) + valMinimo);

//		Condiciones para saber quien gano
/*		Si escogío 2 de las 5 posiblidades gano, si escogío la misma que la máquina eso es un
empate, de lo contrario perdio*/
if (eleccionUsuario === piedra) {
	if (eleccionMaquina === lagarto || eleccionMaquina === tijera) {
		//		GANO
		console.log("Has ganado :D, \nJS escogío " + opciones[eleccionMaquina] 
			+ " y tu " + opciones[eleccionUsuario]);
	} else 
	if (eleccionUsuario === eleccionMaquina) {
		//		EMPATO
		console.log("Han empatado, sigue intentándolo, ambos escogieron " + opciones[eleccionUsuario]);
	} else {
		//		PERDÍO
		console.log("Buuuuu has perdido, \ntu escogiste " + opciones[eleccionUsuario] 
			+ " y JS " + opciones[eleccionMaquina] + ". Sigue intentado :)");
	}
} else 
if (eleccionUsuario === papel) {
	if (eleccionMaquina === piedra || eleccionMaquina === spock) {
		//		GANO
		console.log("Has ganado :D, \nJS escogío " + opciones[eleccionMaquina] 
			+ " y tu " + opciones[eleccionUsuario]);
	} else 
	if (eleccionUsuario === eleccionMaquina) {
		//		EMPATO
		console.log("Han empatado, sigue intentándolo, ambos escogieron " + opciones[eleccionUsuario]);
	} else {
		//		PERDÍO
		console.log("Buuuuu has perdido, \ntu escogiste " + opciones[eleccionUsuario] 
			+ " y JS " + opciones[eleccionMaquina] + ". Sigue intentado :)");
	}
} else
if (eleccionUsuario === tijera) {
	if (eleccionMaquina === papel || eleccionMaquina === lagarto) {
		//		GANO
		console.log("Has ganado :D, \nJS escogío " + opciones[eleccionMaquina] 
			+ " y tu " + opciones[eleccionUsuario]);
	} else 
	if (eleccionUsuario === eleccionMaquina) {
		//		EMPATO
		console.log("Han empatado, sigue intentándolo, ambos escogieron " + opciones[eleccionUsuario]);
	} else {
		//		PERDÍO
		console.log("Buuuuu has perdido, \ntu escogiste " + opciones[eleccionUsuario] 
			+ " y JS " + opciones[eleccionMaquina] + ". Sigue intentado :)");
	}
} else
if (eleccionUsuario === lagarto) {
	if (eleccionMaquina === spock || eleccionMaquina === papel) {
		//		GANO
		console.log("Has ganado :D, \nJS escogío " + opciones[eleccionMaquina] 
			+ " y tu " + opciones[eleccionUsuario]);
	} else 
	if (eleccionUsuario === eleccionMaquina) {
		//		EMPATO
		console.log("Han empatado, sigue intentándolo, ambos escogieron " + opciones[eleccionUsuario]);
	} else {
		//		PERDÍO
		console.log("Buuuuu has perdido, \ntu escogiste " + opciones[eleccionUsuario] 
			+ " y JS " + opciones[eleccionMaquina] + ". Sigue intentado :)");
	}
} else
if (eleccionUsuario === spock) {
	if (eleccionMaquina === tijera || eleccionMaquina === piedra) {
		//		GANO
		console.log("Has ganado :D, \nJS escogío " + opciones[eleccionMaquina] 
			+ " y tu " + opciones[eleccionUsuario]);
	} else 
	if (eleccionUsuario === eleccionMaquina) {
		//		EMPATO
		console.log("Han empatado, sigue intentándolo, ambos escogieron " + opciones[eleccionUsuario]);
	} else {
		//		PERDÍO
		console.log("Buuuuu has perdido, \ntu escogiste " + opciones[eleccionUsuario] 
			+ " y JS " + opciones[eleccionMaquina] + ". Sigue intentado :)");
	}
} else {
	console.log("Recarga la página para jugar :)");
}