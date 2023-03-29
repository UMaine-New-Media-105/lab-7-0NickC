let arrayOfColors = [
  "mintcream",
  "honeydew",
  "lemonchiffon",
  "greenyellow",
  "chartreuse",
];

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  let someVar = 10;
  let offset = 35;
  let X = 35;
  let Y = 35;
  let otherX = 365;
  for (let i = 0; i < 10; i++) {
    let randomColor = random(arrayOfColors);
    addPiece(X, Y, randomColor);
    addPiece(otherX, Y, randomColor);
    otherX = otherX - 35;
    X = X + 35;
    Y = Y + 35;
  }
}

function addPiece(x, y, color) {
  push();
  fill(color);
  ellipse(x, y, 50);
  pop();
}
