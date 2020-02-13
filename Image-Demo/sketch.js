// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Pic;
let scalar = 0.5;

function preload(){
  Pic = loadImage("assets/mark.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // fill("red")
  // rect(mouseX,mouseY,100,100)
  image(Pic, mouseX, mouseY, scalar*Pic.width, scalar*Pic.height);
}

function mouseWheel(event){
  if (event.delta > 0){
    scalar *= 1.1;
  }
  else{
    scalar *=0.9;
  }
  print(event.delta);
}



