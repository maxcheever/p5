function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 80, 80);
    fill (255,0,0);
  }
}

// makes it so canvas stays the full size of the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}