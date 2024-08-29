function otraGrilla() {

  
  let minicantX= 22;
  let minicantY=6;

  let minimodX= 220/minicantX;
  let minimodY=240/minicantY;


  for (let f= 0; f< minicantY; f++) {

      for (let h= 0; h< minicantX; h++) {
        if(mouseX>500 && mouseX<500+200 && mouseY>100 && mouseY<100+200){
        if ( (f+h)%2==0 ) {
      let r = random(255);
      let v = random (0);
      let a =random (255);
      fill(r,v,a);
          
        } else {
          fill(0, 0, 0);
        }

        }else {
          if ( (f+h)%2==0 ) {
          
          fill(255);
        } else {
          fill(0, 0, 0);
        }
        }
        rect(500+ h* minimodX, f*minimodY + 100, minimodX, minimodY);
      }
    
    }
  }
