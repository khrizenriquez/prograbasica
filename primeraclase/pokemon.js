/*
		Algoritmo para poder hacer una pequeña pelea de pokémones :D
*/
var turno = 1;


var pikachu = {
   vida : 100,
   ataque : 55,
   win : function(){
       console.log('¡pikachu ha ganado!')
   }
}


var jigglypuff = {
   vida : 100,
   ataque : 45,
   win : function(){
       console.log('jigglypuff ha ganado!')
   }
}


while(pikachu.vida > 0 && jigglypuff.vida > 0){
   if(turno == 1){
       jigglypuff.vida = jigglypuff.vida - pikachu.ataque;
       turno = 2;
       console.log('jigglypuff ahora tiene '+jigglypuff.vida+' puntos de vida');
   }else{
       pikachu.vida = pikachu.vida - jigglypuff.ataque;
       turno = 1;
       console.log('pikachu ahora tiene '+pikachu.vida+' puntos de vida');
   }
}
if(pikachu.vida >= 0){
   pikachu.win();
}else{
   jigglypuff.win();
}