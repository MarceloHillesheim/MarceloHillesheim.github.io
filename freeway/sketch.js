function setup() {
  createCanvas(larguraTela, alturaTela);
  //somTrilha.setVolume(0.2);
  //somTrilha.loop();
}

function draw(){
 if(frameCount > 400){ // +/- 8s
   if(placarOponente <= 5 && meuPlacar <= 5)
     jogar();
   else
     verificaVencedor();
}else{
 telaInicial(); 
}
  
function verificaVencedor(){
  if(meuPlacar >= 5)
    vacaVencedora(); //Tela final
  else
    galinhaVencedora(); //Tela final
}
  
function telaInicial(){
  background("#00eaff");
  textStyle("italic");
  textAlign(CENTER);
  textSize(30);
  fill("#7b00ff");
  text("Jogo da Av. 1º de Maio", 300, 190);
  text("Desenvolvido por Marcelo Hillesheim", 300, 230);
}
  
function vacaVencedora(){
  background("#ed8600");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  fill("#5100ff");
  text("Vaca Venceu", 300, 190);
  image(imgVaca, 300, 200, 200, 200);
}

function galinhaVencedora(){
  background("#ed8600");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  fill("#ff00f7");
  text("Galinha Venceu", 300, 190);
  image(imgGalinha, 300, 200, 200, 200);
}

function jogar() {
 background(imgEstrada); 
  mostraVaca();
  mostraGalinha();
  movimentaVaca();
  movimentaGalinha();
  mostraCarros();
  movimentaCarros();
  mostraPlacar();
  pontuacao();
  atropelamento();
  }
}