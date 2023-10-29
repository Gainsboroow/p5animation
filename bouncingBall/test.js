let x;
let y;

let g = 10;
let vy = 0;
let dt = 0.2;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(255,0,0);

  if (mouseIsPressed) {
    x = mouseX;
    y = mouseY;
    vy = 0;
  } 

  vy += g * dt;
  vy *= 0.995;
  y += vy * dt;

  if (y > height) {
    if (abs(vy) < 5) {
      vy = 0;
    }
    else{
      vy = -vy;
      fill(random(255), random(255), random(255));
    }
    y = height;
  }
  circle(x, y, 50);
}

function mousePressed(){
    console.log("mouse pressed");
    background(255,0,0);
}
