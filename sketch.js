let myShader;

function setup() {
  createCanvas(500, 500, WEBGL);
  myShader = loadShader('./shaders/shader.vert', './shaders/shader.frag');
}

function draw() {
  background(255);
  noStroke();

  // Use our custom shader
  shader(myShader);

  // Pass the time from p5 to the shader
  myShader.setUniform("time", millis());


  circle(0, 0, 150);
  //plane(width, height);
}
