flames = []
smoke = []
let dieout = 1
let burnlength = 0 //burning the match
let movedown = 0 //fire going down match
let counter = 0 //timer
let noiseMax = 200 //noise
let zoffset = 0; //offset
let size = 0; //scale of glow

function setup() {
  createCanvas(600, 600);
  setInterval(myCounter, 1000);
}

function draw() {
  if (counter >= 0){
    background(50);
    text(counter, 20, 20); //to be deleted later, just for me to time things
    noStroke();
    matchBox();
    if (counter >= 3){
      if (size < 1 && counter < 12){
        size += 0.005
      }
      if (counter >= 12 && size > 0){
        size -= 0.005
      }
      push();
      translate(width/2, 220);
      scale(size);
      glow();
      pop();

    }

    if (counter >= 8 && counter <= 15){
      mySmoke();
    }

    if (counter >= 0 && counter <= 5){
      myMatch();
    }
    if (counter >= 6){
      if (burnlength <= 200){
        burnlength += 0.5
      }
      burntMatch(burnlength);
    }

    if (counter >= 3){
      if (counter >= 6 && counter <= 12){
        movedown += 0.5
      }
      if (counter >= 12){
        if (dieout > 0){
          dieout -= 0.1
        }
      }
      push();
      translate(0, movedown);
      scale(dieout);
      myFire();
      pop();
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

function matchBox(){
  fill(255);
  noStroke();
  quad(50, 350, 50, 390, 280, 440, 280, 400);
  quad(50, 350, 230, 350, 450, 400, 280, 400);
  quad(280, 400, 280, 440, 450, 440, 450, 400);
  fill(148, 42, 38);
  quad(55, 355, 55, 385, 275, 435, 275, 405);
  fill(125, 168, 111);
  quad(50, 350, 230, 350, 450, 400, 280, 400);
  stroke(200);
  strokeWeight(5)
  line(285, 402, 445, 402);
  line(280, 405, 280, 435);
  noStroke();
}

function burntMatch(length){
  fill(189, 174, 132);
  rect(width/2 -15/2, height/2 - 50, 15, 220);
  fill(232, 216, 172);
  rect(width/2 - 15/2, height/2 - 50, 10, 220);
  fill(46, 36, 35);
  ellipse(width/2, height/2 - 60, 35, 45);
  rect(width/2 - 15/2, height/2 - 45, 15, length)
  fill(79, 66, 65);
  ellipse(width/2-3, height/2 - 60, 30, 45);
  rect(width/2 - 15/2, height/2 - 45, 10, length)
  fill(153, 140, 139);
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
  fill(255, 253, 222);
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

function myFire(){
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

function mySmoke(){
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
