class Flame {
  constructor() {
    this.x = width / 2; //xpos
    this.y = 245; //ypos
    this.vx = random(-0.5, 0.5); //x velocity
    this.vy = random(-2.5, -1); //y velocity
    this.color = 255; //color value
    this.size = 38 //size of particles
    this.alpha = 255 //opacity
    if (counter >=10){ //over time, fire dies out
      this.alpha-=100
    }
    if (counter >=11){
      this.alpha-=100
    }
    if (counter >=12){
      this.alpha-=55
    }
  }
  done() {
    return this.color < 0;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.color -= 5;
    if (this.size > 0){
      this.size -= 1
    }
  }
  display() {
    noStroke();
    fill(255, this.color, 0, this.alpha);
    ellipse(this.x, this.y, this.size)
  }
}
