
/**************************  DECLARAR VARIABLES  **************************** */
var palabraOculta = "";
var letrasAdivinadas = "";
var vida = 7;
document.getElementById("letras").focus();
var letraCapturadaInput = document.getElementById("letras");
palabraOculta = palabraOculta.toUpperCase();
var letraComprobada = "";
var arregloLetrasIngresadas = [];
var arregloPalabraBuenas = [];
var arregloPalabrasErradas = [];
var msjErrores = document.getElementById("errores");
var msjRepetido = document.getElementById("repetida");


/**************************  FUNCION PALABRA AL AZAR Y CONVIERTE LETRAS EN GUIONES  **************************** */
function convierteLetrasenGuion() {
    //ASIGNO UNA PALABRA ALEATORIA Y LA GUARDO EN PALABRA OCULTA 
    palabraOculta = palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();
    console.log(palabraOculta);
    //TRANSFORMO LA PALABRA EN GUIONES 
    for (let i = 0; i < palabraOculta.length; i++) {
        letrasAdivinadas = letrasAdivinadas + "_ ";
        //console.log(letrasAdivinadas); 
    }
    //MUESTRO EN EL HTML LOS GUINES SEGUN LA CANTIDAD DE LETRAS QUE TIENE LA PALABRA 
    document.getElementById("letrasEscondidas").innerHTML = letrasAdivinadas;
}


/**************************  FUNCION COMPROBAR   **************************** */
document.addEventListener('keyup', function(event){
    //ASIGNO EL EVENTO DE PRESIONAR UNA TECLA 
     var letra = event.key.toUpperCase();
     var codigo = letra.charCodeAt();
     var letraComprobada= ""; 

     //SOLO PERMITO LETRAS DE A MAYUSCULA A LA Z MAYUSCULA
     if(codigo>64 && codigo<91){
         //COLOCO EL FOCUS Y EL INPUT EN BLANCO 
         document.getElementById('letras').focus();
         document.getElementById('letras').value = "";

        //HAGO LA BUSQUEDA PARA COMPROBAR QUE LA LETRA ESTA EN LA PALABRA OCULTA 
        for(let i =0; i< palabraOculta.length; i++){
            //SI LA LETRA ESTA EN LA PALABRA OCULTA 
            if(letra == palabraOculta[i]){
                //MUESTRO LA LETRA CON UN ESPACIO 
                letraComprobada = letraComprobada + letra + " ";
                //SNO 
            }else{
                //SIGO MOSTRARNDO LOS GUIONES 
                letraComprobada = letraComprobada + letrasAdivinadas[i*2] + " "; 
            }
           
        }
     
        //COMPARA SI LA LETRA NO ESTA EN LA PALABRA OCULTA 
        if(!palabraOculta.includes(letra)){
           
            //restandoVidas();
            //COMPARA SI LA LETRA NO ESTA EN EL ARREGLO DE PALABRAS ERRONEAS 
            if(!arregloPalabrasErradas.includes(letra)){
                vida = vida - 1;
                document.getElementById("vidas").innerHTML = "Las Oportunidades restantes son: " + vida;    
                restandoVidas();
                //VOY ACUMULANDO LAS LETRAS ERRONEAS EN UN ARRGELO CON (,) Y ESPACIO
                arregloPalabrasErradas = arregloPalabrasErradas + letra + ", ";
                //MUESTRO LAS LETRAS ERRONEAS EN LA PANTALLA 
                msjErrores.innerHTML=arregloPalabrasErradas;
            }else{
                //SI LA LETRA SE REPITE MUESTRO UN MENSAJE QUE LA LETRA ESTA REPETIDA 
                advertencia("LETRA REPETIDA","red");  
            }
        }
        //AQUI ASIGNO A LETRAS ADIVINADAS LO QUE TIENE LETRAS COMPROBADA 
        letrasAdivinadas = letraComprobada;   
        //MUESTRO LAS LETRAS QUE EL USUARIO VA ADIVINANDO 
        document.getElementById("letrasEscondidas").innerHTML=letrasAdivinadas;
    }else{
        //SI EL USUARIO COLOCA UNA LETRA EQUIVOCADA LE DIGO QUE DEBE COLOCAR UNA LETRA DE LA A A LA Z
        advertencia("INTRODUZCA UNA LETRA ENTRE A - Z","green");
    }

    console.log(letrasAdivinadas);
     //LLAMANDO A LAS FUNCIONES DE GANADOR O PERDEDOR 
     ganador();
     perdedor();
});

/**************************  FUNCION PARA ADVERTIR AL USUARIO DE EQUIVOCACIONES EN EL JUEGO   **************************** */
function advertencia(frase, colorbg) {
    //ASIGNO AL ESPACIO EN DIV DE HTML LA FRASE QUE DESEO 
    msjRepetido.textContent = frase;
    //ASIGNO UN COLOR MEDIANTE LA FUNCION 
    msjRepetido.style.backgroundColor = colorbg;
    //LE DOY UNA OPACIDAD 
    msjRepetido.style.opacity= "1";
    //LE DOY UN TIEMPO PARA QUE SE DESAPAREZCA DE LA PANTALLA 
    setTimeout(() => {
        msjRepetido.style.opacity = "0"; 
    }, 2000);

}


/**************************  FUNCION VIDAS   **************************** */
function restandoVidas(){
    //if(letraComprobada==letrasAdivinadas){
        //SI LA LETRA COMPROBADA ES IGUAL A LA LETRA ADIVINADA SE RESTAN LAS VIDAS
       // vida--;
        //MUESTRO EN PANTALLA LAS VIDAS RESTANTES QUE LE QUEDAN EN EL JUEGO 
        //document.getElementById('vidas').innerHTML = "Las Oportunidades restantes son: " + vida;  

        //COMPARO LA CANTIDAD DE VIDA PARA QUE VAYAN DIBUJANDO LAS PARTES 
        switch (vida) {
            case 6:
                cabeza();
                break;
            case 5:
                cuerpo();
                break;
            case 4:
                brazosDerecho();
                break;
            case 3:
                brazosIzquierdo();
                break;
            case 2:
                pieDerecho();
                break;
            case 1:
                pieIzquierdo();
                break;
            default:
                break;
        }

   
}


/**************************  FUNCION PERDEDOR DEL JUEGO   **************************** */

function perdedor(){
    if(vida == 1){
        document.getElementById("estado").innerHTML="¡PERDISTE! :(";
        document.getElementById("estado").className="estadoPerdedor";
        document.getElementById("revelacion").innerHTML="La palabra oculta era: " + palabraOculta;
    
    }
}

/**************************  FUNCION GANADOR DEL JUEGO   **************************** */

function ganador(){
    if (letrasAdivinadas.search("_") ==-1) {
        console.log("funcion del ganador" + letrasAdivinadas);
        document.getElementById("estado").innerHTML="¡GANASTE! :)";
        document.getElementById("estado").className="estadoGanador";
        letraCapturadaInput.classList.add("cambio");
        letraCapturadaInput.disabled = true;

    }
}

function recargar() {
    window.location.reload();
  
}

  
/**********
  removeEventListener(document, "keyup", function(event){
    console.log("keyup");
});
****************/


/*
const reset = () => {

    palabraOculta = '';
    letrasAdivinadas = '';
    console.log("reset");
    console.log(palabraOculta);
    console.log(letrasAdivinadas);
    vida = 7;
    letrasEscondidas.innerHTML = "";
    msjErrores.innerHTML="";
    estado.innerHTML = "";
    document.getElementById("vidas").innerHTML = "Las Oportunidades restantes son: " + vida;  
    document.getElementById("revelacion").innerHTML="";

}
*/