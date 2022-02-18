function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 20, 20);
    fill (red);
  }
}

// makes it so canvas stays the full size of the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}