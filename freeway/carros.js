function mostraCarros(){

  for(let i = 0; i < imgCarro.length; i++)
    image(imgCarro[i], xCarro[i], yCarro[i], 50, 30);

}

function movimentaCarros(){
  
  for(let i = 0; i < imgCarro.length; i++){
    if(i < 3){
    //Carros indo para a esquerda
       xCarro[i] -= velocidadeCarro[i];
      
      //Carro chegou no fim do percurso
      if(xCarro[i] < -55){
    xCarro[i] = 605;
    velocidadeCarro[i] = ceil(random(3,5));
  }
      
    }else{
    //Carros indo para a direita
    xCarro[i] += velocidadeCarro[i];
      
      if(xCarro[i] > 605){
        xCarro[i] = -65;
        velocidadeCarro[i] = ceil(random(3,5));
      }
    }
  }
}
