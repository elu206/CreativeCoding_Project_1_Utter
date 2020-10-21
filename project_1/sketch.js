flames = []
smoke = []
let counter = 0
let noiseMax = 200
let zoffset = 0;
let size = 0;

function setup() {
  createCanvas(600, 600);
  setInterval(myCounter, 1000);
}

function draw() {
  if (counter >= 0){
    background(50);
    text(counter, 20, 20); //to be deleted later, just for me to time things
    noStroke();
    myMatch();
  }

  if (counter >= 5){
    push();
    translate(width/2, 220);
    if (size < 1){
      size += 0.005
    }
    scale(size);
    glow();
    pop();
    myMatch();
  }

  if (counter >= 10){
    for (let i = 0; i < 10; i++) {
      let s = new Smoke();
      smoke.push(s);
    }
    for (let i = smoke.length - 1; i >= 0; i--) {
      smoke[i].update();
      smoke[i].show();
      if (smoke[i].finished()) {
        smoke.splice(i, 1);
      }
    }
  }

  if (counter >= 5){
    for (let i = 0; i < 5; i++) {
      let f = new Flame();
      flames.push(f);
    }
    for (let i = flames.length - 1; i >= 0; i--) {
      flames[i].update();
      flames[i].show();
      if (flames[i].finished()) {
        flames.splice(i, 1);
      }
    }
  }
}

function myCounter(){
  counter += 1;
}

function myMatch(){
//match
    fill(189, 174, 132);
    rect(width/2 -15/2, height/2 - 50, 15, 220);
    fill(232, 216, 172);
    rect(width/2 - 15/2, height/2 - 50, 10, 220);
    fill(148, 42, 38);
    ellipse(width/2, height/2 - 60, 35, 45);
    rect(width/2 - 15/2, height/2 - 45, 15, 15)
    fill(186, 67, 63);
    ellipse(width/2-3, height/2 - 60, 30, 45);
    rect(width/2 - 15/2, height/2 - 45, 10, 15)
    fill(237, 172, 166);
    ellipse(width/2 - 19/2, height/2 - 70, 5, 10);
    ellipse(width/2 - 23/2, height/2 - 60, 5, 5)

}

function glow(){
  stroke(255, 0, 0);
  strokeWeight(5);
  fill(255, 187, 148);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1){
    let xoffset = map(cos(angle), -1, 1, 0, noiseMax);
    let yoffset = map(sin(angle), -1, 1, 0, noiseMax);
    let r = map(noise(xoffset, yoffset, zoffset), 0, 1, 50, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x,y)
  }
  endShape(CLOSE);

  stroke(255, 94, 0);
  strokeWeight(3);
  fill(255, 238, 140);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1){
    let xoffset = map(cos(angle), -1, 1, 0, noiseMax);
    let yoffset = map(sin(angle), -1, 1, 0, noiseMax);
    let r = map(noise(xoffset, yoffset, zoffset), 0, 1, 10, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x,y)
  }
  endShape(CLOSE);
  zoffset += 0.05
}
