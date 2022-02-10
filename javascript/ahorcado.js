var botonJugar = document.getElementById("iniciar-juego");
var poolPalabras = ["XILOFON", "ORNITORRINCO", "PARALELEPIPEDO", "CENTURION", "ROMANI", "ARAUCARIA", "MURCIELAGO", "DANTESCO", "ARTILLERIA"];
var LetrasEquivocadas = [];
var letraActual = "";
var palabraDeletreada = [];
var fallos = 0;
var numeroLetras = "";
var letrasCorrectas = [];

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    window.scroll(0,800);
    var numeroOrden = Math.floor(Math.random()*(poolPalabras.length-0));
    var palabraSorteada = poolPalabras[numeroOrden];
    console.log(palabraSorteada);
    palabraDeletreada = palabraSorteada.split('');
    var numeroLetras = palabraDeletreada.length;
    for(var i = 0; i < numeroLetras; i++){
        letrasCorrectas[i] = '';
        console.log(letrasCorrectas);
    }
    
    dibujarGuiones (numeroLetras);
    dibujarHorca();

});

function dibujarGuiones (numeroLetras) {

    for (var i = 0; i < numeroLetras; i++) {
        var offset = 430 + (45 * i);
        dibujarLinea(offset);
    }
}

document.addEventListener('keydown',(event) => {
    letraActual = event.key.toUpperCase(); 
    console.log(letraActual);
    var validador = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//    var posiciones = [];
//    posiciones = estaEn();
    for (var i = 0; i < validador.length; i++){
        if (letraActual == validador[i]){
            for (var j = 0; j < palabraDeletreada.length; j++){
                if (letraActual == palabraDeletreada[j]){
                    letrasCorrectas.splice(j,1,letraActual)
                    console.log(letrasCorrectas);
                }else{
                    fallos ++;
        
                    if (fallos == 1){
                        dibujarCabeza();
                    }
                    if (fallos == 2){
                        dibujarCuerpo();
                    }
                    if (fallos == 3){
                        dibujarBrazo(265);
                    }
                    if (fallos ==4){
                        dibujarBrazo(415);
                    }
                    if (fallos ==5){
                        dibujarPierna(265);
                    }
                    if (fallos ==6){
                        dibujarPierna(415);
                    }
                }
            }
        } else {
            console.log("Tecla indicada no es correcta");
        }
    }
    if (palabraDeletreada === letrasCorrectas) {
        console.log("Ganaste!")
    }
});

function estaEn (){
    for (var i = 0; i < palabraDeletreada.length; i++){
        if (letraActual == palabraDeletreada[i]){
            letrasCorrectas.push(i);
//            console.log(letrasCorrectas);
        }
    }
    return letrasCorrectas;
}

function agregarLetraEquivocada () {
    var letraRepetida = false;
    if (poolLetrasEquivocadas.length == 0){
        poolLetrasEquivocadas.push(letraActual);
    }else{
        poolLetrasEquivocadas.forEach((value) =>{
            console.log(value);
            if (letraActual == value){
                letraRepetida = true;
            }
        });
        if(letraRepetida){
            console.log("Error");
        } else {
            poolLetrasEquivocadas.push(letraActual);
        }
    }
    console.log(poolLetrasEquivocadas);
}
