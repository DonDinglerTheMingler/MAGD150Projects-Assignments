let img;
let img2;
let Myfont;
let font2;
let wordcolor;
let list =[];
let index;

function preload(){
font2=('Monofett-Regular.ttf') /// tried many different fonts I am unsure if it is changing 
Myfont=loadFont('Goldman-Regular.ttf'); 
img2=loadImage('supertunnel.jpg');
  img=loadImage('maxresdefault.jpg');   
list = loadStrings("text.txt");
  
}

function setup() {
  createCanvas(400, 400);
  img2.filter(GRAY); /// gives background a gray filter
  wordcolor = color(25,33,255); ///initial value for wordcolor deep blue
  index =0;
}



function draw() {
  background(10);
  
  
imageMode(CENTER);
image(img2,325,300);
 
  push();
  tint(255,126);
  image(img,width/2,355);
  pop();
  
  
   text('COMING 4/1/27',mouseX,mouseY) /// Text that follows mouse position shares the mouseIsPressed condition
  
  textAlign(CENTER);
 
  
  
  /// wordcolor is the color of text on screen
  ///mouse press function that will change wordcolor variable to a different or random color
  if (mouseIsPressed){
    wordcolor=color(255,33,25); /// second value for text which is red
  } else {
    wordcolor=color(25, 33, 255); ///Else the text reverts back to the base blue value
  }
 
  /// Array from text.txt which pulls the words "SUPER" "TUNNEL" and "MAN". Entries 0 and 2 share the same font.
  fill(wordcolor);
  textFont(Myfont); 
  text(list[0], 25, 100); 
  text(list[2], 25, 300);

 textFont(font2);
  text(list[1], 28, 200);
 
 
}