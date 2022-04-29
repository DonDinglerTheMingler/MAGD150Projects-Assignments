function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  
  push()
  strokeWeight(2)
  
  line(0,200,50,200)
  ///BEGINNING OF UPPER MOUNTAINS
  line(50,200,60,190)
  line(60,190,60,200)
  line(60,200,70,200)
  line(70,200,80,190)
  line(80,190,85,190)
  line(85,190,87,188)
  line(87,188,90,200)
  line(90,200,100,200)
  line(100,200,105,210)
  line(105,210,110,205)
  line(110,205,125,205)
  line(125,205,129,195)
  line(129,195,135,200)
  line(135,200,145,200)
  line(145,200,170,200)
  line(170,200,190,190)
  line(190,190,205,190)
  line(205,200,206,190)
  line(206,200,220,200)
  line(220,200,240,200)
  line(240,200,250,195)
  line(250,195,250,200)
  line(250,200,260,200)
  line(260,200,265,205)
  line(265,205,270,200)
  line(270,200,290,200)
  line(290,200,291,199)
  line(291,200,292,200)
  line(292,200,295,200)
  line(295,200,300,200)
  line(300,200,305,195)
  line(305,195,305,200)
  line(305,200,310,200)
  line(310,200,320,200)
  line(320,200,325,193)
  line(325,193,330,200)
  line(330,200,350,200)
  line(350,200,356,204)
  line(356,204,360,200)
  line(360,200,400,200)
  ///END OF UPPER MOUNTAINS
  ///BEGINNING OF LOWER MOUNTAINS
  line(0,275,30,275)
  line(30,275,35,280)
  line(35,280,40,275)
  line(40,275,50,275)
  line(50,275,60,260)
  line(60,260,62,275)
  line(62,275,85,275)
  line(85,275,90,280)
  line(90,280,100,275)
  line(100,275,130,275)
  line(130,275,133,290)
  line(133,290,136,275)
  line(136,275,155,275)
  line(155,275,160,260)
  line(160,260,170,275)
  line(170,275,200,275)
  line(200,275,210,280)
  line(210,280,220,275)
  line(220,275,275,275)
  line(275,275,300,265)
  line(300,265,315,275)
  line(315,275,330,275)
  line(330,275,400,275)
  pop()
  ///END OF LOWER MOUNTAINS
  ///BEGINNING OF BUILDING 
  push()
  fill(100)
  stroke(100)
  rect(170,235,50,75)
  rect(50,300,80,40)
  rect(110,250,120,90)
  rect(230,300,100,40)
  push()
  stroke(255)
  noFill()
  rect(235,305,90,30)
  pop()
  

  
  ///BEGINNING OF SMOKESTACKS
  point(120,80)
  point(120,77)
  point(125,79)
  point(125,75)
  point(130,80)
  point(130,75)
  point(130,69)
  point(129,67)
  point(134,80)
  point(140,90)
  strokeWeight(16)
  
  strokeCap(SQUARE)
  line(110,80,110,300)
  strokeCap(SQUARE)
  line(140,90,140,300)
  pop()
  
  ///WINDOWS
  push()
  fill(230)
  rect(110,260,60,15)
  pop()
  line(129,262,145,272)
  line(129,265,139,272)
  push()
  noFill()
  ellipse(165,265,2,5)
  pop()
  
 
  
  
  ///SMOKESTACK HOLES 
push()
  stroke(64)
  fill(0)
  rect(105,82,10,5)
  rect(135,92,10,5)  
  pop()
 
  ///BEGINNING OF SMOKE
  ///SMOKE MUST JOIN TOGETHER AT A RIGHT ANGLE 
  fill(0)
  push()
  stroke(255)
  ellipse(115,70,15,10)
  ellipse(120,65,14,9)
  ellipse(125,60,13,8)
  pop()
  ellipse(130,55,20,15)
  ellipse(145,40,30,25)
  ///smokestack 2 smoke (right smokestack)
  push()
  stroke(255)
  ellipse(140,80,14,10)
  ellipse(145,77,13,9)
  pop()
  
  
  
  ///FOREGROUND
  fill(64)
  rect(0,341,400,400)
  
  ///BUILDING DETAILS
  line(231,300,231,341)
  push()
  line()
  
  
  
  pop()
  
  

 
  
  
  
  

}