//		Document objetc model (DOM)
/*
		Objetos
			Variables, funciones

		Objetos principales de JS
			navigator, window, document
*/

// document.write("Hola mamá");
// var pi = 3.141592654;
// pi = Math.floor(pi);
// pi = Math.ceil(pi);
// document.write(pi);

/*var maxima;
maxima = Math.max(5, 23, 4, 2, 1, 5, 100);
document.write(maxima);

//		Localizacion gps desde el navegador
var lat, lng;

function mostrar (pos) {
	document.write(pos.coords.latitude + ", " + pos.coords.longitude);
}

navigator.geolocation.getCurrentPosition(mostrar);*/


//		POKEMON
//		var Pokemon = { nombre: "Pikachu", tipo: "Eléctrico" };
/*var Pokemon = {
	nombre: "Pikachu",
	tipo: "Eléctrico",
	vida 100,
	ataque: 55
};

var pikachu = Pokemon;
var bulbasaur = Pokemon;
bulbasaur.nombre = "Bulbasaur";
bulbasaur.tipo = "Planta";
bulbasaur.vida = 90;
bulbasaur.ataque = 50;


function Pokemon(){}*/

function Pokemon (nombre, vida, ataque) {
	this.nombre = nombre;
	this.vida = vida;
	this.ataque = ataque;
	this.grito = "pika";
	this.gritar = function () {
		alert(this.grito);
	};

}
document.addEventListener("DOMContentLoaded", function () {
	var rattata = new Pokemon("Rattata", 40, 2);
	rattata.grito = "Rattttttta";
	//rattata.gritar();

	nombrePokemon.innerText = rattata.nombre;
});

// var pikachu = new Pokemon("Pikachu", 100, 55);
// pikachu.gritar();
// var bulbasaur = new Pokemon("Pikachu", 100, 55);