var botonJugar = document.getElementById("iniciar-juego");
var poolPalabras = ["XILOFON", "ORNITORRINCO", "PARALELEPIPEDO", "CENTURION", "ROMANI", "ARAUCARIA", "MURCIELAGO", "DANTESCO", "ARTILLERIA"];
var poolLetrasEquivocadas = [];
var letraActual = "";
var palabraDeletreada = [];
var intentos = 6;
var palabraSorteada = "";
let validador = new RegExp('A-Z');

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    window.scroll(0,800);
    
    var numeroOrden = Math.floor(Math.random()*(poolPalabras.length-0));
    palabraSorteada = poolPalabras[numeroOrden];
    console.log(palabraSorteada);
    palabraDeletreada = palabraSorteada.split('');
    var numeroLetras = palabraDeletreada.length;
    
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

    if(validador.test(letraActual)){
        if (intentos > 0) {
            //      console.log(letraActual);
                var posiciones = [];
                posiciones = estaEn();
            //      console.log(posiciones);
                if (posiciones.length == 0){
                    agregarLetraEquivocada();
                    intentos --;
                    var x = 400 + (intentos - 5 * 45);
                    var y = 700;
                    dibujarLetra(letraActual,x,y);
                    if (intentos == 5){
                        dibujarCabeza();
                    }
                    if (intentos == 4){
                        dibujarCuerpo();
                    }
                    if (intentos == 3){
                        dibujarBrazoDerecho();
                    }
                    if (intentos ==2){
                        dibujarBrazoIzquierdo();
                    }
                    if (intentos ==1){
                        dibujarPiernaDerecha();
                    }
                    if (intentos ==0){
                        dibujarPiernaIzquierda();
                        alert("perdiste");
                    }
                } else {
                    for (var i = 0; i < palabraDeletreada.length; i++){
                    if (i == letraActual){
                        dibujarLetras(letraActual);
                    } else {
                        dibujarGuiones()
                    }
                }
            }

        }
    } else {
        console.log("Comando no válido");
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

function validarLetra (){
    
    for (var i = 0; i < palabraDeletreada.length; i++){
        if (palabraDeletreada[i] == letraActual){
            replace
        }
    }

    if (validador.test(palabraSorteada)){

}
}