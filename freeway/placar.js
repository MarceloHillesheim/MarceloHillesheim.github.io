function pontuacao(){
  if(yVaca < 20)
    meuPlacar += 1;
  somPontos.play();
  
  if(yGalinha < 20)
    placarOponente += 1;{}
  somPontos.play();
}

function mostraPlacar(){
  textSize(30);
  
  fill(68, 0, 255);
  text(meuPlacar, 3/5 * larguraTela, 30);
  
  fill(255, 0, 251);
  text(placarOponente, larguraTela/3, 30);
  
  textFont('Italic');
}