class Smoke{
  constructor() {
    this.x = width / 2;
    this.y = 230;
    this.vx = random(-0.5, 0.5);
    this.vy = random(-10, -1);
    this.alpha = 255;
    if (counter >=13){
      this.alpha-=100
    }
    if (counter >=15){
      this.alpha-=100
    }
    if (counter >=17){
      this.alpha-=55
    }
  }
  finished() {
    return this.alpha < 0;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.alpha >0){
      this.alpha -= 10;
    }
  }
  show() {
    noStroke();
    fill(100, this.alpha);
    ellipse(this.x, this.y, 5)
  }

}
