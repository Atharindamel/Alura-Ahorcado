var botonJugar = document.getElementById("iniciar-juego");
var poolPalabras = ["XILOFON", "ORNITORRINCO", "PARALELEPIPEDO", "CENTURION", "ROMANI", "ARAUCARIA", "MURCIELAGO", "DANTESCO", "ARTILLERIA"];
var poolLetrasEquivocadas = [];
var letraActual = "";
var palabraDeletreada = [];
var intentos = 6;
var numeroLetras = "";

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    window.scroll(0,800);
    var numeroOrden = Math.floor(Math.random()*(poolPalabras.length-0));
    var palabraSorteada = poolPalabras[numeroOrden];
    console.log(palabraSorteada);
    palabraDeletreada = palabraSorteada.split('');
    numeroLetras = palabraDeletreada.length;
    
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
    if (intentos > 0) {
        letraActual = event.key.toUpperCase(); 
        console.log(letraActual);
        var posiciones = [];
        posiciones = estaEn();
    //    console.log(posiciones);
        if (posiciones.length == 0){
            agregarLetraEquivocada();
            intentos --;
            if (intentos == 5){
                dibujarCabeza();
            }
            if (intentos == 4){
                dibujarCuerpo();
            }
            if (intentos == 3){
                dibujarBrazo(265);
            }
            if (intentos ==2){
                dibujarBrazo(415);
            }
            if (intentos ==1){
                dibujarPierna(265);
            }
            if (intentos ==0){
                dibujarPierna(415);
            }
        }
    } else {
        for (var i = 0; i < palabraDeletreada; i++){
            if (posiciones == letraActual){
                dibujarLetras(letraActual);
            } else {
                dibujarGuiones()
            }
            alert("perdiste");
        }
    }
});

function estaEn (){
    var posiciones = [];
    for (var i = 0; i < palabraDeletreada.length; i++){
        if (letraActual == palabraDeletreada[i]) {
            posiciones.push(i);
//            console.log(posiciones)
        }
    }
    
    return posiciones;
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
