// Canoe
// Quinn Lu
// XXX XX, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let canoe;
let x;
let y;
let dx = 1;

function preload(){
  canoe = loadImage("assets/canoe.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  console.log(dx, x, mouseX);
  background(220);
  // image(canoe, mouseX - 50, mouseY - 100, 100, 200);
  image(canoe, x-50, y-100, 100, 200);
  
  x += dx;

  if (mouseX > x){
    dx = 5;
  }

  else if (mouseX < x){
    dx = -5;
  }

}
