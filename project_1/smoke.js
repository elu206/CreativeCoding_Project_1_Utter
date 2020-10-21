class Smoke{
  constructor() {
    this.x = width / 2;
    this.y = 180;
    this.vx = random(-0.5, 0.5);
    this.vy = random(-20, -1);
    this.alpha = 255;
  }
  finished() {
    return this.alpha < 0;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 10;
  }
  show() {
    noStroke();
    fill(100, this.alpha);
    ellipse(this.x, this.y, 5)
  }

}
