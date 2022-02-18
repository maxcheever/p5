function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill (0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 20, 20);
}

// makes it so canvas stays the full size of the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}