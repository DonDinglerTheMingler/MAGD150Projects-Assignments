let video;
var button;
var cracking , reverb;
let playing = false;


function preload(){
 
  cracking=loadSound('cracking.wav') //declares that 'cracking' is the sound of the glass cracking
}

function setup() {
  createCanvas(400, 400);
 
  reverb = new p5.Reverb(); ///adds reverb to cracking.wav
  reverb.process(cracking, 3, 4);
 
 
  button=createButton('Play')
  button.mousePressed(playAudio) /// playAudio is the function in which the cracking sound can be paused and resumed by the html button
 
  video= createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(220);
  imageMode(CENTER);
filter(GRAY)
 
 image(video, width/2, height/2 , width, width );
  filter(GRAY)
 

}

function playAudio(){

  if (playing){ ///If/ then statement for the html button which checks if cracking sound is already playing or not
    cracking.stop();
    button.html('Play')
    } else{
   cracking.play();
   button.html('Pause')
   
 }
 playing= !playing;

}