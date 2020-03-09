// Canoe
// Quinn Lu
// Mar XX, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg;
let canoe;
let rock;

let x;
let y;
let dx = 5;
let dy = 10;

let rockX;
let rockY;
let dRock;

let hit = false;

function preload(){
  canoe = loadImage("assets/canoe.png");
  bg = loadImage("assets/blue.png");
  rock = loadImage("assets/rock.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;

  rockX = random(500,1100);
  rockY = 0;
}

function draw() {
  console.log(dx, x, mouseX,mouseY,hit);
  
  background(220);
  
  image(bg,400,0,800,800);
  image(canoe, x-50, y-100, 100, 200);
  
  createRock();
  detect();
  
  x += dx;

  if (mouseX > x){
    dx = 5;
  }
  if (mouseX < x){
    dx = -5;
  }
  else if (mouseX - x < dx){
    dx = 0;
  }
  if (x > 1200){
    dx = 0;
    x = 1200;
  }
  if (x < 400){
    dx = 0;
    x = 400;
  }
  
  hit = collideRectRect(x-50,y-100,100,200,rockX,rockY,100,100);
}

function createRock(){
  image(rock,rockX,rockY,100,100);
  rockY += dy;
 
  if (rockY > windowHeight){
    rockY = -10;
    rockX = random(500,1100);
  }
}

function detect(){
  if (hit){
    text("bruh",windowWidth/2, windowHeight/2);
  }
}

