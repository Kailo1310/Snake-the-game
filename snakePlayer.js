class Snake {
  constructor(startX, startY) {
    this.state = "up"; // up, down, right, left
    this.segments = [{ x: startX, y: startY }];
    this.head = this.segments[0];
  }

  player() {
    for (let i = 0; i < this.segments.length; i++) {
      rect(this.segments[i].x, this.segments[i].y, 22, 22);
    }
    //image (this.img, this.segments[i].x, this.segments[i].y, 22)
  }

  move() {
    const newSegments = [...this.segments];
    for (let i = 1; i < this.segments.length; i++) {
      newSegments[i] = { x: this.segments[i - 1].x, y: this.segments[i - 1].y };
    }
    this.segments = newSegments;

    if (this.state === "right") {
      this.segments[0].x = this.segments[0].x + 20;
    }
    if (this.state === "up") {
      this.segments[0].y = this.segments[0].y - 20;
    }
    if (this.state === "left") {
      this.segments[0].x = this.segments[0].x - 20;
    }
    if (this.state === "down") {
      this.segments[0].y = this.segments[0].y + 20;
    }
  }

  up() {
    this.state = "up";
  }
  down() {
    this.state = "down";
  }
  right() {
    this.state = "right";
  }
  left() {
    this.state = "left";
  }

  isOutsideCanvas() {
    if (this.head.y === 0) {
      return true;
    }
    if (this.head.y === 800) {
      return true;
    }
    if (this.head.x === 0) {
      return true;
    }
    if (this.head.x === 800) {
      return true;
    }
  }

  collide(eat) {
    let collidesOnX = this.head.x <= eat.x && eat.x <= this.head.x + 25;
    let collidesOnY = this.head.y <= eat.y && eat.y <= this.head.y + 25;
    return collidesOnX && collidesOnY;
  }
  collidesnake(snake) {
    let collidesOnX =
      this.head.x <= snake.head.x && snake.head.x <= this.head.x + 22;
    let collidesOnY =
      this.head.y <= snake.head.y && snake.head.y <= this.head.y + 22;
    return collidesOnX && collidesOnY;
  }
  addNewSegment() {
    this.segments.push({ x: this.head.x, y: this.head.y });
  }
}
