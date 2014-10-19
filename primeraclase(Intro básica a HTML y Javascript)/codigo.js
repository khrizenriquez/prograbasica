// alert("Ya se programar :D");
// var nombre = "Khriz";
// var nickname = "afroK";
// var edad = 21;

// //alert(nombre + " " + nickname + " \n" + edad + " años");
// console.log(5 + 8 + "2");
// console.log("2" + 5 + 8);
// console.log("2" + 5 * 8);

var peso;
var pesoEnMarte;

alert("¿Quieres saber cual es tu peso en marte?");
peso = prompt("¿Cual es tu peso?", "70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert(pesoEnMarte);