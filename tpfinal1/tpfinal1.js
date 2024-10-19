/* 
Comision 3 David Beloian
TPFinal Parte 1 Aventura Gráfica Interactiva Web

Camila Pedro 93538/1
https://youtu.be/bu0hAec3Dcg


Ezequiel Andrés Casale 118989/5
https://we.tl/t-vYQJ83yYTG

*/


let estado;
let textos = [];
let botonA = [];
let botonB = [];


//cargo imagenes:

let imagenes = [];
let sonido;


function preload() {
  for (let i = 0; i < 13; i++) {
    // Carga la imagen con el nombre "imagen_XX.png", donde XX es el número actual del bucle formateado con dos dígitos (ej. 01, 02, etc.):

    sonido = loadSound("data/sonido/musica.mp3");
    imagenes[i] = loadImage("data/imagenes/"+nf(i, 2)+".png");   //CARPETA DE IMAGENES Y EL NUMERO
  }
}

function setup() {
  createCanvas(640, 480);
  inicializar();
}


function draw() {


if (estado === 0) {
  pantallaInicio();
} else if ( estado === 12) {
  pantallaCreditos();

  //pregunto por todas las pantallas con 2 botones:
} else if ( estado===1 || estado===3 || estado===5|| estado===7|| estado===9 ) {
  pantallaHistoriaDosBotones(imagenes[estado], textos[estado], botonA[estado], botonB[estado] );

  //pregunto por todas las pantallas con 1 boton:
} else if ( estado===2 || estado===4 || estado===6 || estado===8 || estado===10|| estado===11 || estado===12) {
  pantallaHistoriaUnBoton(imagenes[estado], textos[estado], botonA[estado]);
}
}

function mousePressed() {
  //pantalla inicio

  if (estado === 0) {

    

    if ( colisionBoton(width/2, height*0.75, 200, 40) ) { //EMPEZAR
      //flujo de estado:
      estado=1;
      sonido.play();
    } else if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
      //flujo de estado:
      estado=12;
    }

    //pantalla creditos
  } else if ( estado === 12 ) {

    
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
      //flujo de estado:
      estado=0;
    }



    //pantalla 1
  } else if ( estado===1 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=3;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=2;
    }
    
    
    //pantalla 2 si decide el no
  } else if ( estado===2 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }



    //pantalla 3
  } else if ( estado===3 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=5;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=4;
    }
    
    
    //pantalla 4 si decide el no
  } else if ( estado===4 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }



    //pantalla 5
  } else if ( estado===5 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=7;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=6;
    }
    
    
    //pantalla 6 si decide el no
  } else if ( estado===6 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }

    //pantalla 7
  } else if ( estado===7 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=9;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=8;
    }
    
    //pantalla 8 si decide el no
  } else if ( estado===8 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }

    //pantalla 9
  } else if ( estado===9 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=11;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=10;
    }
    
    
    //pantalla 10 si decide el no
  } else if ( estado===10 ) {

    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }


    //pantalla 11
  } else if (estado===11) {

    if  ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      estado=12;
    } 
    }

  console.log("estado: "+estado);
}
