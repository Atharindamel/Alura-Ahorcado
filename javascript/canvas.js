let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");


function dibujarHorca(){
    //Triángulo
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(100,800);
    pincel.lineTo(150,750);
    pincel.lineTo(200,800);
    pincel.fill();
    
    //palo principal
    pincel.fillStyle = "black";
    pincel.lineWidth = 10;
    pincel.moveTo(150,750);
    pincel.lineTo(150,350);
    pincel.stroke();
    
    //palo secundario
    pincel.fillStyle = "black";
    pincel.lineWidth = 10;
    pincel.moveTo(145,350);
    pincel.lineTo(350,350);
    pincel.stroke();
    
    //Soga
    pincel.fillStyle = "black";
    pincel.lineWidth = 3;
    pincel.moveTo(340,350);
    pincel.lineTo(340,400);
    pincel.stroke();
}

function dibujarCabeza() {
    //Cabeza
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(340,450,50,0,Math.PI*2,true);
    pincel.moveTo(375,450);
    pincel.arc(340,450,35,0,Math.PI,false);
    pincel.moveTo(330,440);
    pincel.arc(325,440,5,0,Math.PI*2,true);
    pincel.moveTo(360,440);
    pincel.arc(355,440,5,0,Math.PI*2,true);
    pincel.stroke();
}
function dibujarCuerpo(){
    //cuerpo
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,500);
    pincel.lineTo(340,650);
    pincel.stroke();
}

function dibujarBrazo(x) {
    //brazos
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,550);
    pincel.lineTo(x,475);
    pincel.stroke();
}

function dibujarPierna(x){
    //piernas
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,650);
    pincel.lineTo(x,725);
    pincel.stroke();

}

for (var i= 0; i < numeroLetras; i++){
    var separacionLinea = 450 + (i*60);
    
    dibujarLinea(separacionLinea);
}

function dibujarLinea(separacionLinea){
        pincel.fillStyle = "black";
        pincel.lineWidth = 6;
        pincel.moveTo(separacionLinea, 700);
        pincel.lineTo((separacionLinea + 30), 700);
        pincel.stroke();
    }

function dibujarLetrasEquivocadas(texto,x){
    pincel.font = "italic 60px Arial";
    pincel.strokeText(texto,450 + 45 * x,400);
}

function dibujarLetraCorrecta (texto,j){
    pincel.font = "italic 30px Arial";
    pincel.strokeText(texto, 435 + j * 45, 690);
}
