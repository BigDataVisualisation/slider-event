var slider;

function setup() {
  createCanvas(800, 600);

  slider = createSlider(0, 255);
  slider.position(100, 100);

}

function draw() {

  background(slider.value(), 0, 0);

}