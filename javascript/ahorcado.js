var botonJugar = document.getElementById("iniciar-juego");
var poolPalabras = ["XILOFON", "ORNITORRINCO", "PARALELEPIPEDO", "CENTURION", "ROMANI", "ARAUCARIA", "MURCIELAGO", "DANTESCO", "ARTILLERIA"];
var validador = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letrasEquivocadas = [];
var letraActual = "";
var palabraDeletreada = [];
var fallos = 0;
var numeroLetras = "";
var letrasCorrectas = [];
var terminaste = false;
var juegoActivo = false;

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    window.scroll(0,800);
    var numeroOrden = Math.floor(Math.random()*(poolPalabras.length-0));
    palabraSorteada = poolPalabras[numeroOrden];
    palabraDeletreada = palabraSorteada.split('');
    var numeroLetras = palabraDeletreada.length;
    juegoActivo = true;
    for(var i = 0; i < numeroLetras; i++){
        letrasCorrectas[i] = '';
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

if(juegoActivo) {
    document.addEventListener('keydown',(event) => {
        if(terminaste){
            return;
        }
        letraActual = event.key.toUpperCase();
        var esLetra = false;
        for(var i = 0; i < validador.length; i++){
            if(letraActual === validador [i])
            esLetra = true;
        }
        if (esLetra){
            var encontrada = false;
            var palabraCompleta = true;
            for (var j = 0; j < palabraDeletreada.length; j++){
                if (letraActual === palabraDeletreada[j]){
                    letrasCorrectas.splice(j,1,letraActual);
                    dibujarLetraCorrecta(letraActual,j)
                    encontrada = true;
                    }
                if (letrasCorrectas[j] == ''){
                    palabraCompleta = false;
                }
            }
            if (palabraCompleta){
                alert("Ganaste!");
                terminaste = true;
            }
            if (!encontrada && !revisarLetraEquivocada()){
                
                dibujarLetrasEquivocadas(letraActual,fallos);
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
                    alert("Perdiste");
                    terminaste = true;
                }
            }
        }else{
            alert("Tecla indicada no es correcta");
        }
    });
}

// Revisa que la letra equivocada no haya sido previamente seleccionada
function revisarLetraEquivocada(){
    var letraRepetida = false;
    if (letrasEquivocadas.length == 0){
        letrasEquivocadas.push(letraActual);
    }else{
        letrasEquivocadas.forEach((value) =>{
            if (letraActual == value){
                letraRepetida = true;
            }
        });
        if(letraRepetida){
            alert("Error");
        } else {
            letrasEquivocadas.push(letraActual);
        }
    }
    return letraRepetida;
}