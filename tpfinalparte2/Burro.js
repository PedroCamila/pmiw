class Burro {
  constructor() {
    
    //propiedades:
    this.x = width/2;
    this.y = height-50;
    this.vel = 5;
    this.ancho = 50;
    this.alto = 20;
  }
  actualizar() {
    this.mover();
    this.dibujar();
  }

  //metodos:
  dibujar() {
    push();
    noStroke();
    translate(this.x, this.y);
    rectMode(CENTER);
    fill(0, 0, 200,0);
    rect(0, 0, this.ancho, this.alto);
    imageMode(CENTER);
    image(fotoBurro,0,0,100,100);
    pop();
  }
  mover() {
    if ( keyIsPressed ) {
      if ( keyCode===LEFT_ARROW ) {
        this.x-=this.vel;
      } else if ( keyCode===RIGHT_ARROW ) {
        this.x+=this.vel;
      }
      //evaluar no salirme de los limites:
      this.x = constrain(this.x, 0, width);
    }
  }
}
