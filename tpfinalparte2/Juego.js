class Juego {
  constructor() {
    
   
    this.estado = "inicio";
         
             //el personaje:
    this.p = new Burro();

    this.puntos = 0;

    //botones:
    this.botonInicio = new Boton("INICIAR", width/2, height*0.75, 100, 40);
    this.botonReintentar = new Boton("Reintentar", width/2, height*0.75, 100, 40);  //ACAAAAA
    this.botonMenu = new Boton("Menu", width/2, height*0.75, 100, 40);
    this.pociones = []; //arreglo para el objeto de la clase Basura
    this.cant = 12;
    this.vida = 3;
    
  

    for ( let i=0; i<this.cant; i++) {
      //creamos una instancia (objeto) de la clase Basura:
      this.pociones[i] = new Pociones();
    }
  }

  actualizar() {
    if ( this.estado==="inicio") {
      this.pantallaInicio();
    } else if ( this.estado=="jugando") {
      image(fotoLugar,0,0,640,480);
      
      //corazones
      if(this.vida===3){
     image(Corazones1, 0, 5, 200,100);
    }else if(this.vida===2){
     image(Corazones2, 0,5, 200,100);
    }else if(this.vida===1){
     image(Corazones3,0,5, 200,100); 
    }



      //metodos del objeto:
      for ( let i=0; i<this.pociones.length; i++) {
        //actualizamos cada instancia de cada casillero
        this.pociones[i].actualizar();
      }

      //el personaje:
      this.p.actualizar();


      //monitoreo distancia:
     


      //muestro los puntos:
      fill(255);
      textSize(40);
      text(this.puntos, 550, 58);
      
      //PANTALAGANSTE
      
      
      

      //evaluo la posible colision con todas las instancias:
      for ( let i=0; i<this.pociones.length; i++) {
        if ( this.pociones[i].evaluaColision( this.p.x, this.p.y) ) {
          if ( this.pociones[i].tipo == 0 ) {
            //this.puntos++;
            this.puntos++;
          } else {
            this.vida--;
          }
        }
      }
    
  if (this.vida===0){      ///ACAAAA
       
      this.estado = "Perdiste";   
        ///ACAA
    }else if(this.puntos===10){
      this.estado="ganaste";
    }
    


} else if (this.estado === "Perdiste"){
  this.pantallaPerdiste();
}else if(this.estado==="ganaste"){
  this.pantallaGanaste();
}
  }
  
pantallaPerdiste(){
    push();
    background(255, 0, 0);
    image(fotoReintentar, 0,0,640,480);
    textSize(40);
    textAlign(CENTER);
    fill(255);
    text("PERDISTE", 320, 200);
    textSize(14);
   text("Hecho por \n Casale Ezequiel & Pedro Camila", 320, 440);

    
    this.botonReintentar.actualizar();
    pop(); 
}

 pantallaInicio() {
    push();
    background(255, 0, 0);
    image(fotoInicio,0,0,640,480);
    
    
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Bienvenido al juego de Shrek 2", 320, 100);
    textSize(26);
    text("Trata de esquivar las Pociones \n ROJAS y agarra 10 de las pociones \nVERDES para ganar", 320, 180);

    this.botonInicio.actualizar();
    pop();
  }
  pantallaGanaste(){
    push();
    background(255, 0, 0);
    image(fotoGanaste, 0,0,640,480);
    textSize(50);
    textAlign(CENTER);
    fill(255);
    text("GANASTE", 320, 200);
    textSize(14);
    text("Hecho por \n Casale Ezequiel & Pedro Camila", 320, 440);

    this.botonMenu.actualizar();
    pop(); 
}


  mousePressed() {
    //metodo del clik del mouse dentro de la clase Juego
    if ( this.estado==="inicio") {
      if (this.botonInicio.colisionMouse() ) {
        //flujo de estado de panta de inicio a empezar a jugar
        //PONER EN CERO TODOS LOS VALORES INICIALES DEL JUEGO
        //vidas en 3... tiempo en 100... enemigos fuera de la pantalla... etc
        sonido.play();
        this.estado = "jugando";
        
      }
    }else if(this.estado==="Perdiste"){   ///FIJATE EL BOTON
      if (this.botonReintentar.colisionMouse()){
        
        this.estado = "jugando";
        
        this.vida =3;
        this.puntos=0;
        
      }
      
    }else if(this.estado==="ganaste"){
     if(this.botonMenu.colisionMouse()){
       
      this.estado="inicio";
      
      this.vida =3;
        this.puntos=0;
        
     }
    }
  }
}
