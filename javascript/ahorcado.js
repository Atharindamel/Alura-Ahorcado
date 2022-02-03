var botonJugar = document.getElementById("iniciar-juego");
var poolPalabras = ["XILOFON", "ORNITORRINCO", "PARALELEPIPEDO", "CENTURION", "ROMANI", "ARAUCARIA", "MURCIELAGO", "DANTESCO", "ARTILLERIA"];

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    window.scroll(0,800);
    var numeroOrden = Math.floor(Math.random()*(poolPalabras.length-0));
    var palabraSorteada = poolPalabras[numeroOrden];
    var palabraDeletreada = palabraSorteada.split('');
    var numeroLetras = palabraDeletreada.length;
    
    return numeroLetras;
});

/*
function jugar(palabraDeletreada){
    
    var letraPropuesta =
    var letrasIndicadas = [];
    
    for

} */