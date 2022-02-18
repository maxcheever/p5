var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  createCanvas(w, h);
}

function draw() {
  if (mouseIsPressed) {
    fill (0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}