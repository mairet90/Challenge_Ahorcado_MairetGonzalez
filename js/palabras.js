
    var palabras = [
        "PROGRAMA",
        "JUEGO",
        "AHORCADO",
        "CABEZA",
        "CUERPO",
        "LETRAS",
        "PALABRAS",
        "ADIVINA",
        "OCULTO",
        "JUGAR",
        "ABURRIDO",
        "LENGUAJE",
        "TECLADO",
        "SORTEO",
        "SECRETO",
        "DIBUJAR",
        "AGREGAR",
        "ELIMINAR"

    ];

 

function agregarPalabra() {

    var palabraCapturada = document.getElementById('ingresarPalabra').value;
    var nuevaPalabra = palabraCapturada.toUpperCase();

    if(nuevaPalabra == ""){
        alert("DISCULPE, ESTA VACÍO POR FAVOR INTRODUZCA UNA PALABRA");
        document.getElementById("ingresarPalabra").focus();
    }else{
        if(!palabras.includes(nuevaPalabra)){
            palabras.push(nuevaPalabra);
            alert("TU PALABRA REGISTRADA ES: " +nuevaPalabra);
        }else{
            alert("LA PALABRA QUE INTENTA AGREGAR ESTA REPETIDA, INTENTE CON OTRA");
            document.getElementById("ingresarPalabra").focus();        
        }
    }   
    
    document.getElementById('ingresarPalabra').value = "";
}

