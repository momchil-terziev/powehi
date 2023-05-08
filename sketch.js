// var c = 30;
// var G = 3.54;
 const dt = 2;

let m87;

const particles = [];
let start, end;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button1 = createButton("Set G to");
  button1.mousePressed(resetSketch);
  Gvalue = createInput(3.54);
  
  button2 = createButton("Set c to");
  button2.mousePressed(resetSketch);
  Cvalue = createInput(30);

  m87 = new Blackhole(width / 2, height / 2, 10000);
  rcol1 = random(226);
  rcol2 = random(226);
  rcol3 = random(226);

  start = height / 2;
  end = height / 2 - m87.rs * 2.6;

  for (let y = 0; y < start; y += 10) {
    particles.push(new Photon(width - 20, y));
  }
}

function resetSketch() {
  rcol1 = random(226);
  rcol2 = random(226);
  rcol3 = random(226);
  G = Gvalue.value();
  c = Cvalue.value();
  // m87 = new Blackhole(width / 2, height / 2, 10000);
 // dt = 2;
  for (let y = 0; y < start; y += 10) {
    particles.push(new Photon(width - 20, y));
  }
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(1);
  line(0, start, width, start);
  line(0, end, width, end);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }
  m87.show();
}
