
let atropelaVaca = false;
let atropelaGalinha = false;

function atropelamento(){
  //Teste carro a carro
  for(let i = 0; i < imgCarro.length; i++){
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28,
xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaVaca){
      //Vaca atropelada
      yVaca = 368;
      if(meuPlacar >= 1)
      meuPlacar -= 1;
      somColidiu.play();
    }
    
    atropelaGalinha = collideRectRect(xGalinha, yGalinha, 28, 28,
xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaGalinha){
      //Galinha atropelada
      yGalinha = 368;
      if(placarOponente >= 1)
      placarOponente -= 1;
      somColidiu.play();
    }
  }//For
}//Atropelamento

