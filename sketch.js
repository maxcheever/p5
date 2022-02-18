function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

// function draw() {
//   if (mouseIsPressed) {
//     ellipse(mouseX, mouseY, 80, 80);
//     fill (255,0,0);
//     noStroke();
//   }
// }

function draw() {
  background(0);
  noStroke();
  fill(240, 70, 255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(45, 45, 45);
  describe('black canvas with pink cube spinning');
}

// makes it so canvas stays the full size of the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}