//Usando a função MAP com radianos.
//Usando a função map para mapiar o angulo de rotação em radianos
//Imprementando a velocidade e a aceleração angular.
//função map usa cinco parâmentro 
//valor inicial(posição atual do mouse) e um inteervalo inicial(posiçãõ 0 e width da tela )e um intervalo final(medido em radianos)

let angulo = 0;
let anguloV = 0;
let anguloA = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function draw() {
  anguloA = map(mouseX,0,width,-0.01,0.01);
  
  background(146,83,161);
  noStroke();
  fill(240,99,164);
  rectMode(CENTER);
  translate(200,200);
  rotate(angulo);
  rect(0,0,256,32);
  
  angulo += anguloV;
  anguloV += anguloA;
}