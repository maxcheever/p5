function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

// for drawing (with circles)
function draw() {
  if (mouseIsPressed) {
    // ellipse(mouseX, mouseY, 80, 80);
    fill (255,0,0);
    noStroke();
  } else {
    fill(0,255,0);
    noStroke();
  }
  ellipse(mouseX, mouseY, 80, 80);
}

//// roatating cube (makes my computer sound like it's taking off)
// function draw() {
//   background(0);
//   //noStroke();
//   fill(240, 70, 255);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(0.25*windowWidth, 0.25*windowWidth, 0.25*windowWidth);
//   describe('black canvas with pink cube spinning');
// }

// makes it so canvas stays the full size of the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}