flames = []
smoke = []
// explosions = []

let reappear = -600 // moving new match into the picture
let disappear = 0 //moving burnt match out of the picture
let burnlength = 0 //burning the match
let movedown = 0 //fire going down match
let counter = 0 //timer
let noiseMax = 200 //noise
let zoffset = 0; //perlin noise zoffset
let glowsize = 0; //scale of glow

//let boxdown = 0 // box moving down
//let explosionvar = 3
//let explosionangle = 0

function setup() {
  createCanvas(600, 600);
  setInterval(myCounter, 1000); //timer in seconds
}

function draw() {
  if (counter == 0){ //reset variables for beginning loop again
    reappear = -600
    disappear = 0
    burnlength = 0
    movedown = 0
    noiseMax = 200
    zoffset = 0;
    glowsize = 0;
  }

  if (counter >= 0){
    //stroke(255);
    //text(counter, 20, 20); //to be deleted later, just for me to time things
    background(50);
    noStroke();
    matchBox();
  }
  if (counter >= 0 && counter<= 29)
    if (counter >= 3){
      if (glowsize < 1 && counter < 8){
        glowsize += 0.005
      }
      if (counter >= 8 && glowsize > 0){
        glowsize -= 0.005
      }
      push();
      translate(width/2, 220);
      scale(glowsize);
      glow();
      pop();
    }

    if (counter >= 8 && counter <= 20){
      mySmoke();
    }
    if (counter >= 0 && counter <= 5){
      myMatch();
    }

    if (counter >= 6){ //match burns
      if (burnlength <= 200){
        burnlength += 0.5
      }
      if (counter >= 20){ // burnt match moves down screen
        if (disappear <= 400){
          disappear += 1
        }
      }
      push();
      translate(0, disappear)
      burntMatch(burnlength);
      pop();
    }

    if (counter >= 3 && counter <= 12){
      if (counter >= 6 && counter <= 12){
        movedown += 0.5
      }
      push();
      translate(0, movedown);
      myFire();
      pop();
    }

    if (counter>= 20){
      //stroke(255);
      //text(counter, 20, 20); //to be deleted later, just for me to time things
      //noStroke();
      if (reappear < 0){
        reappear += 1
      }
      push();
      translate(0, reappear)
      myMatch();
      pop();
    }

    if (counter == 31){
      counter = 0
    }

  /* //experiments!

  if (counter > 29 && counter <= 58){
    if (explosionangle <= 300){
        explosionangle += 0.1
    }
    if (explosionvar <= 300){
      explosionvar += 0.1
    }
    if(counter <= 33){
      background(50);
    }
    if (counter > 40){
      explosionvar *= -1
      background(50)
      if (explosionvar >0){
        explosionvar += 1
      }
      if (explosionangle > 0){
        explosionvar -= 1
      }
    }
    push();
    translate(cos(explosionangle) * explosionvar, sin(explosionangle) *explosionvar)
    explosion();
    pop();

  }*/

}

function myCounter(){ //timer
  counter += 1;
}

function myMatch(){ //unburnt match
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

function matchBox(){ //match box
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

function burntMatch(length){ //burning match
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
  beginShape(); // perlin noise loop
  for (let angle = 0; angle < TWO_PI; angle += PI/100){
    let xoffset = map(cos(angle), -1, 1, 0, noiseMax);
    let yoffset = map(sin(angle), -1, 1, 0, noiseMax);
    let r = map(noise(xoffset, yoffset, zoffset), 0, 1, 50, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x,y)
  }
  endShape(CLOSE);
  zoffset += 0.05
  stroke(255, 94, 0);
  strokeWeight(3);
  fill(255, 253, 222);
  beginShape(); // perlin nosie loop x2 for stronger effect
  for (let angle = 0; angle < TWO_PI; angle += PI/100){
    let xoffset = map(cos(angle), -1, 1, 0, noiseMax);
    let yoffset = map(sin(angle), -1, 1, 0, noiseMax);
    let r = map(noise(xoffset, yoffset, zoffset), 0, 1, 10, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x,y)
  }
  endShape(CLOSE);
}

function myFire(){ //flames
  for (let i = 0; i < 5; i++) {
    let f = new Flame();
    flames.push(f);
  }
  for (let i = flames.length - 1; i >= 0; i--) {
    flames[i].display(); //show
    flames[i].update(); //change
    if (flames[i].done()) { //finished
      flames.splice(i, 1); //remove
    }
  }

}

function mySmoke(){ //smoke
  for (let i = 0; i < 10; i++) {
        let s = new Smoke();
        smoke.push(s);
      }
      for (let i = smoke.length - 1; i >= 0; i--) {
        smoke[i].display(); //show
        smoke[i].update();
        if (smoke[i].done()) {
          smoke.splice(i, 1);
        }
      }
}


/* //experimented with some more stuff but it didn't fit well with the overall metaphor / felt disjointed so i cut it out
// or it didn't really work at all lol

function explosion(){
  for (let i = 0; i < 5; i++) {
    let f = new Explosion();
    explosions.push(f);
  }
  for (let i = explosions.length - 1; i >= 0; i-=5) {
    explosions[i].update();
    explosions[i].show();
    if (explosions[i].finished()) {
      explosions.splice(i, 1);
    }
  }
}

class Explosion {
  constructor(x, y) {
    this.pos = createVector(width/2, height/2);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.color = 255;
    this.size = 100;
  }
  finished() {
    return this.color < 0;
  }
  update() {
    this.pos.add(this.vel);
    this.color -= 4;
    if (this.size > 0){
      this.size -= 2
    }
  }
  show() {
    noStroke();
    fill(255, this.color, 0);
    ellipse(this.pos.x, this.pos.y, this.size)
  }
}

class Myglow {
  constructor(x, y) {
    this.pos = createVector(mouseX, mouseY);
    this.changex = 0
    this.changey = 0
    this.color = 255;
    this.size = 20
  }
  finished() {
    return this.color < 0;
  }
  update() {
    this.pos.x += 1;
    this.pos.y += 1;
    this.color -= 10;
    if (this.size > 0){
      this.size -= 1
    }
  }
  show() {
    noStroke();
    fill(0,0, this.color);
    glow(this.pos.x, this.pos.y, this.size)
  }
}


function myglow(a, b, c){
  translate(a, b);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1){
    let xoffset = map(cos(angle), -1, 1, 0, noiseMax);
    let yoffset = map(sin(angle), -1, 1, 0, noiseMax);
    let r = map(noise(xoffset, yoffset, zoffset), 0, 1, c, 100);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x,y)
  }
  endShape(CLOSE);
  zoffset += 0.05
}


*/
