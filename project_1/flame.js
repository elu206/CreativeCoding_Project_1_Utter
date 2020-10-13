class Flame {
  constructor() {
    this.x = width / 2;
    this.y = 245;
    this.vx = random(-0.5, 0.5);
    this.vy = random(-2.5, -1);
    this.color = 255;
    this.size = 38
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
    fill(255, this.color, 0);
    ellipse(this.x, this.y, this.size)
  }
}
