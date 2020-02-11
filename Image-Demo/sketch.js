// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dice;

function preload(){
  dice = loadImage("assests/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("red")
  // rect(mouseX,mouseY,100,100)
  image(dice, mouseX, mouseY)
}
