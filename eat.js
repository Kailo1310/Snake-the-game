class Eat {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }
  draw() {
    circle(this.x, this.y, 20);
    //image (this.img, this.x, this.y, 40)
  }
}
