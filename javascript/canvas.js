let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

var letrasDibujadas

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

function dibujarCuerpo() {
    //cuerpo
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,500);
    pincel.lineTo(340,650);
    pincel.stroke();
}

function dibujarBrazoIzquierdo() {
    //brazo izquierdo
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,550);
    pincel.lineTo(265,475);
    pincel.stroke();
}

function dibujarBrazoDerecho() {
    //brazo derecho
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,550);
    pincel.lineTo(415,475);
    pincel.stroke();
}

function dibujarPiernaDerecha(){
    //pierna derecha
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,650);
    pincel.lineTo(415,725);
    pincel.stroke();
}

function dibujarPiernaIzquierda(){
    //pierna izquierda
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(340,650);
    pincel.lineTo(265,725);
    pincel.stroke();
}

function dibujarLinea(separacionLinea){
        pincel.fillStyle = "black";
        pincel.lineWidth = 6;
        pincel.moveTo(separacionLinea, 700);
        pincel.lineTo((separacionLinea + 30), 700);
        pincel.stroke();
    }

function dibujarLetra(letraActual,x,y){
    pincel.font = "20pt Arial";
    pincel.strokeText = (letraActual,x,y)
}