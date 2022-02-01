var botonJugar = document.getElementById("iniciar-juego");
var poolPalabras = ["XILOFON", "ORNITORRINCO", "PARALELEPIPEDO", "CENTURION", "ROMANI", "ARAUCARIA", "MURCIELAGO", "DANTESCO", "ARTILLERIA"];

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    window.scroll(0,800);
    var palabraSorteada = Math.floor(Math.random()*(poolPalabras.length-0));
    
});