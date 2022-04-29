let bird1;
let bird2;
let birds = []; /// array for the objects on screen

function setup() {
  createCanvas(700, 500);
 
 
  bird1= new Bird(320,230);
  bird2 = new Bird(round(random(width)), round(random(height)));
 
  for (let i =0; i<20; i++){
    birds[i] = new Bird(35*i, 2*height/3);
  }
 
}

function draw() {
  background('#18ECFF');
 
  bird1.move();
  bird1.show();
  bird2.move();
  bird2.show();
 
  for (let i =0; i< birds.length; i++){
  birds[i].move();
  birds[i].show();  
  }
 
 
  rectMode(CENTER)
 
  push();
  noStroke();
  fill('#01FA42')
  rect(width/2,500,700,250)
  pop();
 
 
  push();
  ///BIRD   creates a bird with two lines which originate from width/2 height/2
  strokeWeight(3);
    line(width/2, height/2, 320,230)
    line(width/2, height/2, 380,230)
  pop();
}





class Bird{ // ClASS for birds
 
  constructor(x, y){
   let birdX, birdY, offsetX, offsetY;
   
    this.birdX = x;
    this.birdY = y;
    this.offsetX = 30;
    this.offsetY= -20;
       
  }
 
  move(){
    this.birdX += round(random(-5, 5)); /// Gives the birds random movement
    this.birdY += round(random(-5,5));
 
  }
 
  show(){
    strokeWeight(4);
    line(this.birdX, this.birdY, this.birdX+this.offsetX,  this.birdY+this.offsetY); 
    line(this.birdX, this.birdY, this.birdX-this.offsetX, this.birdY+this.offsetY) // Displays the Bird class on screen
   
  }
 
 
 
}