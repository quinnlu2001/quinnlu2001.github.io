// Canoe Dodging
// Quinn Lu
// XXX XX, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let canoe;

function preload(){
  canoe = loadImage("assets/canoe.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(canoe, mouseX - 50, mouseY - 100, 100, 200);
}
