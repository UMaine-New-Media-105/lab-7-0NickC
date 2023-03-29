function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  let offset = 80;
  let redChannel = 200;
  let greenChannel = 75;
  let blueChannel = 100;

  for (let numRows = 0; numRows < 5; numRows++) {
    for (let numCols = 0; numCols < 5; numCols++) {
      fill(redChannel, greenChannel, blueChannel);
      ellipse(numRows * offset + 40, numCols * offset + 40, 80);
      greenChannel = greenChannel + offset;
      blueChannel = blueChannel + offset;
    }
  }
}
