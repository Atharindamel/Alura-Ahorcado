var botonAgregarPalabra = document.getElementById("nueva-palabra");

botonAgregarPalabra.addEventListener("click", function(event){
    event.preventDefault();
    console.log ("funciona")
    var palabraNueva = document.getElementById("input-nueva-palabra");
    palabraNueva.toUpperCase();
    palabraNueva.select();
    console.log(palabraNueva)

    ("input-nueva-palabra").value = "";
    return palabraNueva
});