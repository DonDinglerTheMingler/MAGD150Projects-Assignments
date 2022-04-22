var city;
let angle = 1;
let flag;
let river;
let map;
let font;
let street;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function preload() {
  flag = loadImage("flag.jpg");
  river = loadImage("river.jpg");
  map = loadImage("map.jpg");
  street = loadImage("street.webp");
  city = loadJSON("city.json");
  font = loadFont("AveriaSerifLibre-Regular.ttf");
}

function draw() {
  background(20);
  ambientLight(100);
  directionalLight(color(75, 75, 300), 200, 0, 0);
  pointLight(300, 75, 75, mouseX, mouseY, 50);
  pointLight(245, 245, 245, 0, 0, 100);

  ///camera functions, main camera is controlled with mouse X  while the orientation of the objects in the sketch are controlled with mouseY while mouse is pressed
  camera(0, 0, mouseX);

  if (mouseIsPressed) {
    translate(0, 0, mouseY);
  }

  ///sphere street
  push();
  noStroke();
  texture(street);
  translate(10, 20, -10);
  rotate(angle);
  rotateX(angle);
  rotateY(angle);
  sphere(15);
  pop();

  angle += 0.02;

  //taurus river
  push();
  translate(-10, -20, -30);
  noStroke();
  texture(river);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);

  torus(25, 10);
  pop();

  ///plane flag
  push();
  translate(0, 0, 20);
  noStroke();
  texture(flag);
  plane(50, 10);
  pop();

  ///cube map
  push();
  rotateY(angle);
  texture(map);
  translate(0, 10, -175);
  box(175, 175, 175);
  pop();

  push();
  textFont(font);
  fill(city.r, city.g, city.b);
  text(city.name, -10, -50, 0);
  text(city.state,-10,-40,0);
  pop();
}
