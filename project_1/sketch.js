flames = []
smoke = []
let counter = 0

function setup() {
  createCanvas(600, 600);
  setInterval(myCounter, 1000);
}

function draw() {
  background(50);
  noStroke();
  fill(255);
  ellipse(width/2, height/2, 250)
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

  text(counter, 20, 20); //to be deleted later, just for me to time things

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
