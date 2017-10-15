function setup() {
  createCanvas(500, 500);
  frameRate(8);
  background(47);
}

function RNG() {
  return random() < 0.02;
}

function draw() {
  noStroke();
  fill(47);
  rect(0, 0, width, height);

  for (var x = 2.5; x <= width - 5; x += 10) {
    for (var y = 2.5; y <= height - 5; y += 10) {
      if (RNG()) {
        fill(color('#36c'));
      } else if (RNG()) {
        fill(color('#c36'));
      } else if (RNG()) {
        fill(color('#6c3'));
      } else {
        fill(255, 15 + random() * 80);
      }
      rect(x, y, 5, 5);
    }
  }
}