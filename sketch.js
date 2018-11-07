var slider;

function setup() {
  createCanvas(800, 600);

  slider = createSlider(0, 255);
  slider.position(100, 100);

  slider.elt.addEventListener('input', function () {
    redraw();
  });

  noLoop();

}

function draw() {

  background(0, slider.value(), 0);

}