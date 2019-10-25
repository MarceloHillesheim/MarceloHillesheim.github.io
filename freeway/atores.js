function mostraVaca(){

  image(imgVaca, xVaca, yVaca, 28, 28);
}

function mostraGalinha(){

  image(imgGalinha, xGalinha, yGalinha, 28, 28);
}

function movimentaVaca(){
  
  if(keyIsDown(UP_ARROW)){
    //yVaca  = yVaca -5;
    if(yVaca > 5)//Teto
      yVaca -= 5;
    
    if(yVaca < 15)
      yVaca = 368;
    
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yVaca < 365)
      yVaca += 5;
    
  }
}
  
  function movimentaGalinha(){
  
  if(keyIsDown(87)){
    //yVaca  = yVaca -5;
    if(yGalinha > 5)//Teto
      yGalinha -= 5;
    
     if(yGalinha < 15)
      yGalinha = 368;
    
  }
  if(keyIsDown(83)){
    if(yGalinha < 365)
      yGalinha += 5;
    
    
  }

}