var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function horca(){
    pincel.fillStyle = "#000000"
    pincel.beginPath();
    pincel.fillRect(20,80,10,400);//palo derecho
    pincel.fillRect(20,80,200,10);//palo de arriba
    pincel.fillRect(210,80,10,50);//palo chikito
    pincel.moveTo(220,480);
    pincel.lineTo(5,480);//linea de abajo
    pincel.lineWidth=5;
    pincel.stroke();
}

function cabeza(){
    pincel.fillStyle = "#000000"
    pincel.beginPath();
    pincel.arc(215,160,30,0,Math.PI*2);
 
    pincel.stroke();
}

function cuerpo(){
    pincel.fillStyle = "#000000"
    pincel.beginPath();
    pincel.moveTo(220,190);
    pincel.lineTo(220,280);
    pincel.stroke();
}


function brazosDerecho(){
    pincel.fillStyle = "#000000"
    pincel.beginPath();
    pincel.moveTo(220,200);
    pincel.lineTo(250,280);
    pincel.stroke();
}


function brazosIzquierdo(){
    pincel.fillStyle = "#000000"
    pincel.beginPath();
    pincel.moveTo(220,200);
    pincel.lineTo(190,280);
    pincel.stroke();
}


function pieDerecho(){
    pincel.fillStyle = "#000000"
    pincel.beginPath();
    pincel.moveTo(220,280);
    pincel.lineTo(180,350);
    pincel.stroke();
}

function pieIzquierdo(){
    pincel.fillStyle = "#000000"
    pincel.beginPath();
    pincel.moveTo(220,280);
    pincel.lineTo(260,350);
    pincel.stroke();
}
