function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  rotateX(60);
  noFill();
  stroke(255);
  
for (let i = 0; i < 30; i++){
  let r = map(sin(frameCount /2), -1,1,0,200);
  let g = map(i,0,50,100,200);
  let b = map(cos(frameCount),-1,1,200,100);
  stroke(r,g,b);
  
  beginShape()
  for (let j =0; j < 360; j+=10){
    let rad = i*8;
    let x = rad * cos(j);
    let y = rad * sin(j);
    let z = sin(frameCount * 2 + i * 10)* 50
    vertex(x,y,z);
  }
  endShape(CLOSE);
}
}

