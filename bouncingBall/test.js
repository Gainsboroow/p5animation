let x;
let y;

let g = 10;
let vy = 0;
let dt = 0.2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,0,0);

  if (mouseIsPressed) {
    x = mouseX;
    y = mouseY;
    vy = 0;
  } 

  if (y > height) {
    vy = -vy;
    y = height;
  }

  vy += g * dt;
  vy *= 0.995;
  y += vy * dt;
  circle(x, y, 50);
}

function mousePressed(){
    console.log("mouse pressed");
    background(255,0,0);
}