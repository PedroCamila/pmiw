/* 
Comision 3 David Beloian
TPFinal Parte 2 

Camila Pedro 93538/1
https://youtu.be/3ySHbf4QZb8

Ezequiel Andrés Casale 118989/5
https://youtu.be/BqfK64EHxRc?si=h8h85_EZK2CAgfxl


*/



let juego;

function preload() {
  sonido = loadSound("/data/sonido/musica.mp3");
  fotoInicio= loadImage("/data/inicio.png");
  fotoReintentar= loadImage("/data/reintentar.gif");
  fotoBurro= loadImage("/data/burro.png");
  fotoLugar=loadImage("/data/juego.png");
  Corazones1= loadImage("/data/Corazones/00.png");
  Corazones2= loadImage("/data/Corazones/01.png");
  Corazones3= loadImage("/data/Corazones/02.png");
  fotoGanaste= loadImage("/data/ganaste.png");

}

function setup() {
  createCanvas(640,480);
  juego = new Juego();
  
}


function draw() {

  background(255);
  juego.actualizar();
 
}

function mousePressed() {
  juego.mousePressed();
  //sonido.play();
}
