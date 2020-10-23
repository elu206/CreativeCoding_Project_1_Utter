class Flame {
  constructor() {
    this.x = width / 2;
    this.y = 245;
    this.vx = random(-0.5, 0.5);
    this.vy = random(-2.5, -1);
    this.color = 255;
    this.size = 38
    this.move = 0
    this.alpha = 255
    if (counter >=10){
      this.alpha-=100
    }
    if (counter >=11){
      this.alpha-=100
    }
    if (counter >=12){
      this.alpha-=55
    }
  }
  finished() {
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
  show() {
    noStroke();
    fill(255, this.color, 0, this.alpha);
    ellipse(this.x, this.y, this.size)
  }
}
