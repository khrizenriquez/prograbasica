/*		Khriz Enríquez @khrizenriquez*/
function Pokemon () {
	this.nombre = nombre;
	this.vida = vida;
	this.ataque = ataque;
	this.defensa = defensa;
	this.imagen = imagen;
}

document.addEventListener("DOMContentLoaded", function () {
	var busqueda, objPokemon;
	var urlImg = "http://assets2.pokemon.com/assets/cms2/img/pokedex/detail/#.png";
	var msj = document.getElementById("mensajes");
	var noPokemon = document.getElementById("numeroPokemon");
	var numPokemon = document.getElementById("noPokemon");
	var nombrePokemon = document.getElementById("nombrePokemon");
	var tipoPokemon = document.getElementById("tipoPokemon");
	var imgPokemon = document.querySelector("#imgPokemon figure img");
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
				busqueda = parseInt(noPokemon.value);
				if (datosPokemon["" + busqueda] !== undefined) {
					objPokemon = datosPokemon["" + busqueda];
					//		Lleno mis elementos HTML con lo obtenido
					numPokemon.children[1].textContent = busqueda;
					nombrePokemon.children[0].textContent = objPokemon.nombre;
					tipoPokemon.children[0].textContent = objPokemon.tipo;
					imgPokemon.setAttribute("src", urlImg.replace("#", agregaCeros("" + busqueda)));
				} else 
					msj.textContent = "No tenemos registrado un pokémon con ese número por ahora :(, pero puedes ingresarlo modificando el código desde github :D ";
			}
		} else {
			//		En el div que tengo para mensajes coloco algo para decirle que ingrese valores
			msj.textContent = "Ingresa un número válido :(";
		}
	});
});

/*		Para el número de pokémon de las imagenes los necesito como 001, esta función agrega ceros 
si es necesario al número que obtengo y lo retorno para hacer el llamado al enlace y obtener la imagen*/
function agregaCeros (noPOke) {
	if (noPOke.length === 1) 
		noPOke = "00" + noPOke;
	else
	if (noPOke.length === 2) 
		noPOke = "0" + noPOke;

	return noPOke;
}