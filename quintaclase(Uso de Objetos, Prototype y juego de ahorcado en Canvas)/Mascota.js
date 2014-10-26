/*		Ejemplo de clases con prototipos*/

var Mascota = function (n, v) {
	this.nombre = n;
	this.voz = v;
};

Mascota.prototype.hablar = function () {
	alert(this.nombre + " dice: " + this.voz);
}

var perro = new Mascota("Lencho", "uuuuuuh!");
var gato = new Mascota("Misifus", "lsdjflaskjflasj");