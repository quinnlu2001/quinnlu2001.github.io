// Dodging Canoe 
// Quinn Lu
// Mar 09, 2020
// For this game, controll the canoe with your mouse to dodge the rocks. Press g to restart the game

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//This part just creates the values needed for the game.
let bg;
let canoe;
let rock;

let x;
let y;
let dx = 5;

let rockX;
let rockY;
let dy = 7; //rock speed

let hit = false;
let hitTime = 0;

//loading the images
function preload(){
  canoe = loadImage("assets/canoe.png");
  bg = loadImage("assets/blue.png");
  rock = loadImage("assets/rock.png");
}


//creates canvas, and sets the starting postition of the canoe and the rock
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width / 2;
  y = (height / 2) + 100;

  rockX = random(500,1100);
  rockY = 0;
}


//runs the major functions
function draw() {
  console.log(dx, x, mouseX,mouseY,hitTime);
  game();
  createRock();
  detect();
  keyTyped();
}


//use the mouse to control the canoe.
//the game calculates the total time you hit a rock.
function game(){
  background(220);
  textSize(20);
  text("You have damaged your canoe:", 50,100);
  text(hitTime+" times", 50, 120);
  text("Press g to restart",50, 140);
  
  image(bg,400,0,800,800);
  image(canoe, x-50, y-100, 100, 200);
  
  x += dx;

  if (mouseX > x){
    dx = 3; //canoe speed
  }
  if (mouseX < x){
    dx = -3; //canoe speed
  }
  else if (mouseX - x < dx){
    dx = 0; //canoe speed
  }
  if (x > 1200){ //stops canoe from going through the edge, so the rest
    dx = 0;
    x = 1200;
  }
  if (x < 400){
    dx = 0;
    x = 400;
  }
}


//generating rocks, making them go down the screen, and resets it if it wasn't hit
function createRock(){
  image(rock,rockX,rockY,100,100);
  rockY += dy;
 
  if (rockY > windowHeight){
    rockY = -10;
    rockX = random(500,1100);
  }
}


//if canoe collides with rock, it increases the total times you hit the rock
//also pushes the rock back for a bit
function detect(){
  hit = collideRectRect(x-50,y-100,100,200,rockX,rockY,100,100);
  if (hit){
    hitTime += 1; 
    rockY = -20;
  }
}


//press g to set hitTime to zero
//Problem : once reset to zero, the number won't change anymore
//If to press f12 to open console log, it goes back functioning normaly
//also can see from console log that hitTime is increasing the whole time
//the problem is happening when displaying the number
function keyTyped(){
  if (key === 'g'){
    hitTime = 0;
  }
}

