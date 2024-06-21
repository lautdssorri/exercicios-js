//Exemplo da função para criar um cronômetro.

let objeto;
let jogador;
let raio = 30;
let timer = 5;
let pontos = 0;

function setup() {
  createCanvas(400, 400);
  objeto = createVector(random(width), random(height));
}

function draw() {
  background(220);
  jogador = createVector(mouseX,mouseY)
  timer -=1/60;
  if(timer <= 0){
    text("GAME OVER",160,200);
    noLoop();
  }
  ellipse(objeto.x,objeto.y,raio)
  
  let comprimento = map(timer,0,5,0,200);
  rect(20,20,10,comprimento);
  textSize(25);
  text(pontos,180,40);
}

function mousePressed(){
  let dis = p5.Vector.dist(jogador,objeto);
  if(dis < raio){
    objeto = createVector(random(width),random(height));
    timer +=0.5;
    pontos +=1;
  }
}

//Criando um objeto
//Criando jogador
//Mover objeto com click
//Criar time e quando o tempo acabar encerrar o loop
//pontos












