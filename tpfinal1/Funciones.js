function inicializar() {
  estado = 0;

  //cargo los textos:
  textos[1] = "Shrek es invitado a ver a sus suegros \n Deberia ir?";
  botonA[1] = "SI";
  botonB[1] = "NO";

  //cargo los textos DE CUANDO VAS AL NO:
  textos[2] = "Se queda dormido en su casa toda la semana";
  botonA[2] = "INICIO";

  //cargo los textos:
  textos[3] = "Después de encontarse con sus suegros Shrek se siente \ninseguro de si mismo. Deberia volver a él y a Fiona \nen humanos para satisfacerlos? ";
  botonA[3] = "SI";
  botonB[3] = "NO";

  //cargo los textos DE CUANDO VAS AL NO:
  textos[4] = "Shrek es exiliado de muy muy lejano, y \n el Principe Encantador se queda con Fiona \n haciendose pasar por Shrek";
  botonA[4] = "INICIO";
 

  //cargo los textos:
  textos[5] = "Shrek y su amigo Burro van en camino \na la fabrica del Hada Madrina, pero se encuentran\n con El Gato con Botas. Después de ser derrotado, \nse les quiere unir.\n Shrek deberia dejar que se les una?";
  botonA[5] = "SI";
  botonB[5] = "NO";

  //cargo los textos DE CUANDO VAS AL NO:
  textos[6] = "Cuando Burro y Shrek les dan la espalda, \nel Gato los ataca por detrás y los derrota, \nentregandolos con El Principe Encantador \ny este metiendolos presos.";
  botonA[6] = "INICIO";
 

  //cargo los textos:
  textos[7] = "Roban una posion de la fabrica y ambos \ndeciden tomarla, pero terminan presos. \nSu detención es visto por sus amigos \nen su casa. Deberian viajar ayudarlos?";
  botonA[7] = "SI";
  botonB[7] = "NO";

  //cargo los textos DE CUANDO VAS AL NO:
  textos[8] = "Los amigos de Shrek deciden hacer una maratón\n de peliculas de Disney mientras Shrek y \nBurro permanecen cautivos de por vida.";
  botonA[8] = "INICIO";
  


  //cargo los textos:
  textos[9] = "Sus amigos sacan a Shrek y Burro de la prisión\n e interrumpen el baile de Fiona y El Principe.\n El Hada Madrina los ataca. El padre de Fiona\n puede accionar, Qué deberia hacer?";
  botonA[9] = "Salvar a Shrek";
  botonB[9] = "No salvar a Shrek";

  //cargo los textos DE CUANDO VAS AL NO:
  textos[10] = "Shrek desaparece, por un buen tiempo Fiona \nqueda destrozada, pero vuelve a recuperarse y decide \ncumplir los deseos de su padre de casarse con El Principe.\n El Rey queda con eternamente con culpa.";
  botonA[10] = "INICIO";

  //cargo los textos del final:
  textos[11] = "El Rey sacrifica su apariencia humana por\n ellos, haciendo que el rayo rebote hacia \nEl Hada Madrina y desaparezca. Todos aceptan \nal Rey por como es, mientras que Shrek y Fiona \nvuelven a estar juntos.";
  botonA[11] = "CREDITOS";
 
}

function dibujaBoton(txt, x, y, w, h ) {
  //dibuja un boton centrado:
  push();
  rectMode(CENTER);
  //evaluo para crear efecto rolover:
  if ( colisionBoton( x, y, w, h ) ) {
    fill(20, 200, 0);
  } else {
    fill(100);
  }
  rect(x, y, w, h);
  //texto:
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}
function colisionBoton( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function pantallaInicio() {
  push();
  background(140);
  image(imagenes[0], 0, 0, width, height);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Shrek 2 La pelicula Interactiva pero hecho \n con 2 pesos y un chicle bubaloo del 2007", width/2, height/2);
  pop();

  //botones:
  dibujaBoton("EMPEZAR", width/2, height*0.75, 200, 40);
  dibujaBoton("CRÉDITOS", width/2, height*0.75+60, 200, 40);

  
}


function pantallaCreditos() {
  push();
  background(255, 0, 0);
  image(imagenes[12], 0, 0, width, height);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("\n \nGanaste! Lograste pasar toda la historia muy muy lejana", width/2, height/2);

  //botones:
  dibujaBoton("INICIO", width/2, height*0.75+60, 200, 40);

  pop();
}


function pantallaHistoriaDosBotones( imgFondo, txt_pantalla, txt_btn_A, txt_btn_B ) {
  push();
  background(255, 0, 0);
  image(imgFondo, 0, 0, width, height);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width/2, height/2+30);
  //text("Camino a la motaña me encuentro con el lobo.\nMe ofrece ir por el camino corto\nque cruza por el bosque.", width/2, height/2);

  //botones:
  //A:
  dibujaBoton(txt_btn_A, width/2-200, height*0.75+60, 200, 40);
  //B:
  dibujaBoton(txt_btn_B, width/2+200, height*0.75+60, 200, 40);

  pop();
}



function pantallaHistoriaUnBoton(imgFondo, txt_pantalla, txt_btn_A ) {
  push();
  background(255, 0, 0);
  image(imgFondo, 0, 0, width, height);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width/2, height/2+30);

  //boton:
  //A:
  dibujaBoton(txt_btn_A, width/2-200, height*0.75+60, 200, 40);


  pop();
}
