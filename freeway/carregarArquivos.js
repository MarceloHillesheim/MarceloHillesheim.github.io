//Variaveis para as imagens
let imgEstrada;
let imgVaca;
let imgGalinha;
let imgCarro = [];

//Váriaveis do Placar
let meuPlacar = 0;
let placarOponente = 0;

//Variaveis da Tela

let alturaTela = 400;
let larguraTela = 600;

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgGalinha = loadImage('imagens/ator-2.png');
  
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  somPontos = loadSound('sons/pontos.wav');
  somTrilha = loadSound('sons/trilha.mp3');
  somColidiu = loadSound('sons/colidiu.mp3');
  
}

//Variaveis de movimento

//             Direita      /   Esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 325];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];

//Variáveis de movimento
let yVaca = 368;
let xVaca = 480;
let yGalinha = 368;
let xGalinha = 100;