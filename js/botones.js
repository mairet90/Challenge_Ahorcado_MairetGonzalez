//DECLARACIOND DE VARIABLES 
const $inicio = document.getElementById('contendorPrincipal');
const $juego = document.getElementById('contenedorIniciarJuego');
const $palabras = document.getElementById('agregarPalabra');
var botonIniciar = document.getElementById('btnIniciarJuego');
var volverInicio = document.getElementById('btnRetirar');
var agregarPalabras = document.getElementById('registrarPalabra');
var irInicio = document.getElementById('btnInicio');
var btnAgregarPalabras = document.getElementById('btnRegistrar');


//APAGANDO LAS VISTAS 
$palabras.style.display="none";
$juego.classList.add('cambio');


//AGREGANDO LOS EVENTOS A LOS BOTONES PARA APAGAR Y ENCENDER LAS VISTAS 

botonIniciar.addEventListener("click", function(event){

   //console.log("estoy en la funcion de iniciar juego");
    $inicio.classList.add('cambio');
    $juego.classList.remove('cambio');
    //$palabras.classList.add('cambio');
    document.getElementById('letras').focus();
    convierteLetrasenGuion();
    horca();

});

volverInicio.addEventListener("click", function(event){

   // console.log("estoy en la funcion de volver al inicio");
    $inicio.classList.remove('cambio');
    $juego.classList.add('cambio');
    $palabras.classList.add('cambio');

    recargar();

});


agregarPalabras.addEventListener("click", function(event){

    $inicio.classList.add('cambio');
    $juego.classList.add('cambio');
    $palabras.style.display="flex";

    

});


irInicio.addEventListener("click", function(event){


    //sessionStorage.setItem("array", JSON.stringify(palabras));
    location.reload();


});


btnAgregarPalabras.addEventListener("click", function(event){

    
   // $inicio.classList.remove('cambio');
    //$juego.classList.add('cambio');
    //$palabras.style.display="none";

    agregarPalabra();
   
});

/*

btnJugarNuevo.addEventListener("click", function(event){

    location.reload();
    
 });*/