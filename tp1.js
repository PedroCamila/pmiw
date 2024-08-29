/* Video explicativo: https://youtu.be/1iNfuYrygm0 
Camila Pedro 93538/1
Comision 3 David Beloian
TP1 p5js
video del TP3 JAVA https://youtu.be/_mdRPj8_FSM?si=tCthegjwiO9RP9o-
*/

let cantX= 10;
let cantY= 40;

function preload(){
  ilusionCuadrado = loadImage ('assets/ilusionCuadrado.png');
}

function setup() {
 createCanvas(800, 400);
}


function draw() {
 background(255);
 
 let modX = 400/cantX;
 let modY = 400/cantY;
  for ( let j=0; j<cantY; j++) {
    for ( let i=0; i<cantX; i++) {
       
let r= randomColor();
let g = randomColor();
let b = randomColor();

      if ( (i+j)%2==0 ){
        if(key=='c'){
        fill(r,g,b);
      } else  {
       fill(0,0,0); 
      }
      let despX = 0;
      if ( j%2==0 ){
       despX= mouseX*.1;
      }

      rect(400+i*modX+despX, j*modY, modX, modY);
      
      fill(255);
      noStroke();
      
rect(500, 100, 200,200);
      
otraGrilla();

      }
    }
  }
  image(ilusionCuadrado,0,0,400,400);
}
