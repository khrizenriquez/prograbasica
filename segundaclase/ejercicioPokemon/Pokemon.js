/*
		Khriz Enríquez @khrizenriquez
*/
function Pokemon () {
	this.nombre = nombre;
	this.vida = vida;
	this.ataque = ataque;
	this.defensa = defensa;
	this.imagen = imagen
}

document.addEventListener("DOMContentLoaded", function () {
	var msj = document.getElementById("mensajes");
	var noPokemon = document.getElementById("numeroPokemon");
	//		Escucho lo que el usuario ingresa por medio del botón ver
	document.getElementById("btnVer").addEventListener("click", function () {
		/*		Verifico lo que se ingreso en el texto, tiene que ser números,
		si ingreso valores como 001, lo convierto a número (1) que es lo que me sirve para obtener las imagenes y los datos del pokémon*/
		if (noPokemon.value.length > 0) {
			//		Válido que ingresen mas de algo
			if (isNaN(noPokemon.value)) {
				msj.textContent = "Asegurate de ingresar el número del pokémon que deseas buscar";
			} else {
				//		Convierto el valor ingresado por el usuario a número
				msj.textContent = "";
				noPokemon.value = parseInt(noPokemon.value);
				if (datosPokemon["" + noPokemon] !== undefined) {
					console.log(datosPokemon["" + noPokemon]);
				} else 
					msj.textContent = "No tenemos registrado un pokémon con ese número por ahora :(, pero puedes ingresarlo modificando el código desde github :D ";
			}
		} else {
			//		En el div que tengo para mensajes coloco algo para decirle que ingrese valores
			msj.textContent = "Ingresa un número válido :(";
		}
	});
	//		http://img.pokemondb.net/artwork/primeape.jpg
	//		http://assets2.pokemon.com/assets/cms2/img/pokedex/detail/057.png
});