function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  textSize(26)
  fill(255,255,0);

  text("12",200,25)
  text("6",200,385)
  text("3",375,200)
  text("9",25,200)

  translate(200,200);
  rotate(-90);

let sc = second();
let hr = hour();
let mn = minute();

strokeWeight(7)
stroke(255,0,0)
noFill();

let secondAngle = map(sc,0,60,0,360);
arc(0,0,300,300,0,secondAngle)

 
stroke(0,128,0)
let minuteAngle = map(mn,0,60,0,360);
arc(0,0,280,280,0,minuteAngle)

stroke(0,0,255)
let hourAngle = map(hr%12,0,12,0,360);
arc(0,0,260,260,0,hourAngle)

push();
rotate(secondAngle)
stroke(255,0,0)
line(0,0,100,0)
pop();

push();
rotate(minuteAngle)
stroke(0,128,0)
line(0,0,80,0)
pop();

push();
rotate(hourAngle)
stroke(0,0,255)
line(0,0,60,0)
pop();

}