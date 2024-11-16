class Pociones {
  //constructor:
  constructor() {
    //pensemos en una propiedad para su tipo
    this.tipo = int(random(0, 2));
    //tipo puede valer 0 o 1

    //valores de ubicacion::
    this.reiniciarUbicacion();

    this.despX = 0;
    this.despY = 5;
    this.lado = 60;
    //cargo la imagen segun su tipo:
    this.img = loadImage("data/pocion_"+this.tipo+".png");

    this.vivo = true;
  }

  //metodos:
  actualizar() {
    if (this.vivo ) {
      this.mover();
      this.dibujar();
    }
  }
  mover() {
    this.x+= this.despX;
    this.y+= this.despY;
    if ( this.y>height+150 ) {
      this.reiniciarUbicacion();
    }
  }

  dibujar() {
    push();
    translate(this.x, this.y); //pusimos en 0,0 en las coordenads x,y
    rotate(this.dir);
    imageMode(CENTER);
    image( this.img, 0, 0, this.lado, this.lado ) ;
    pop();
  }

  reiniciarUbicacion() {
    this.x = random(0, width);
    this.y =  -150-random(100, 400);
  }

  //metodo que evalura la colsion con este objeto:
  evaluaColision( x_, y_ ) {
    if ( this.vivo ) {
      if ( dist( this.x, this.y, x_, y_ ) < this.lado/2 ) {
        //hay colision
        this.reiniciarUbicacion();
        this.vivo = true;
        return true;
      } else {
        return false;
      }
    }
  }
}
