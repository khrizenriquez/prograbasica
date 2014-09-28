/*var menu = ["Productos", "Ventas", "Contacto"];

//Mostrará el tercer elemento
document.write(menu[2]);
//Mostrará el primer elemento
document.write(menu[0]);*/

//		Matriz foda - dofa
//var dofa = [["Fortalezas", "Oportunidad"], ["Debilidades", "Amenazas"]];
//document.write(dofa[0][1]);

//		Juego matrices
function explosion () {
	alert("Boom");
	document.write("<h1>Boom!, ELegiste un área minada :(</h1>");
}
function ganaste () {
	document.write("Eres un ganador");
}

//1 = Bomba 	0 = no hay bomba
var campo = [
	[1, 0, 0],
	[0, 1, 0],
	[1, 1, 1],
];

var x, y;
var textos = ["Cesped", "Bomba"];
alert("Estas en un campo minado\n" + 
	  ", elige entre 0 y 2 para X y Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

if (x <= 2 && y <= 2) {
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion]);
	if (posicion == 1) 
		explosion();
	else 
		ganaste();
} else {
	document.write("Te saliste del campo");
	explosion();
}

//document.write(textos[campo[x][y]]);
//document.write(textos[posicion]);
