let snake;
let snake2;
let eat;
let gameOver = false;
let gameOver1 = false;
let gameOver2 = false;
let score = 0;
let score2 = 0;
let paused = false;

function preload() {
  img = loadImage("images(2).jpg");
}

function setup() {
  createCanvas(800, 800);
  snake = new Snake(200, 400);
  snake2 = new Snake(600, 400);
  eat = new Eat(img);
}
function draw() {
  background(220);

  if (gameOver) {
    background(0);
    fill("white");
    textSize(40);
    text("The one with the higher score has won", 40, 400);
    textSize(20);
    text(score, 150, 50);
    text("P1 Score:", 50, 50);
    textSize(20);
    text(score2, 650, 50);
    text("P2 Score:", 550, 50);
    fill("red");
    textSize(50);
    text("Try Again", 300, 780);
    return;
  }
  if (gameOver1) {
    background(0);
    fill("white");
    textSize(100);
    text("P1 Lost", 200, 400);
    textSize(70);
    text("P2 has won", 200, 500);
    fill("red");
    textSize(50);
    text("Try Again", 300, 780);
    fill("white");
    textSize(20);
    text(score, 160, 50);
    text("Your score was:", 10, 50);
    return;
  }
  if (gameOver2) {
    background(0);
    fill("white");
    textSize(100);
    text("P2 Lost", 200, 400);
    textSize(70);
    text("P1 has won", 200, 500);
    fill("red");
    textSize(50);
    text("Try Again", 300, 780);
    fill("white");
    textSize(20);
    text(score2, 160, 50);
    text("Your score was:", 10, 50);
    return;
  }

  if (paused) {
    background(120);
    fill("white");
    textSize(100);
    text("Spiel Pausiert", 100, 400);
    fill("white");
    textSize(30);
    text("Drücke ESC um weiter zu Spielen", 200, 780);
    return;
  }

  background("green");

  // p1 score
  textSize(32);
  fill("black");
  text("Score (P1):", 50, 50);
  text(score, 210, 50);
  fill("white");

  //p2 score
  textSize(32);
  fill("black");
  text("Score (P2):", 600, 50);
  text(score2, 760, 50);
  fill("white");

  snake.player();
  snake2.player();
  if (frameCount % 10 === 0) {
  snake.move();
  snake2.move();
  }
  eat.draw();
  //p1
  if (snake.collide(eat)) {
    console.log("eat a meat (p1)");
    score = score + 1;
    eat = new Eat();
    snake.addNewSegment();
  }
  if (snake.isOutsideCanvas()) {
    gameOver1 = true;
  }
  //p2
  if (snake2.collide(eat)) {
    console.log("eat a meat (p2)");
    score2 = score2 + 1;
    eat = new Eat();
    snake2.addNewSegment();
  }
  if (snake2.isOutsideCanvas()) {
    gameOver2 = true;
  }
  if (snake.collidesnake(snake2) || snake2.collidesnake(snake)) {
    console.log("game over");
    gameOver = true;
  }
}

function keyPressed() {
  if (keyCode === 87) {
    //W-Taste
    snake.up();
  }
  if (keyCode === 83) {
    //S-Taste
    snake.down();
  }
  if (keyCode === 65) {
    //A-Taste
    snake.left();
  }
  if (keyCode === 68) {
    // D-Taste
    snake.right();
  }
  if (keyCode === 38) {
    //Arrow Up-Taste
    snake2.up();
  }
  if (keyCode === 40) {
    //Arrow down-Taste
    snake2.down();
  }
  if (keyCode === 39) {
    //Arrow right-Taste
    snake2.right();
  }
  if (keyCode === 37) {
    //Arrow left-Taste
    snake2.left();
  }
  if (keyCode === 32) {
    if (gameOver || gameOver1 || gameOver2) {
      snake = new Snake(200);
      snake2 = new Snake(600);
      eat = new Eat(img);
      gameOver = false;
      gameOver1 = false;
      gameOver2 = false;
      score = 0;
      score2 = 0;
    }
  }
  if (keyCode === 27) {
    paused = !paused;
  }
}
