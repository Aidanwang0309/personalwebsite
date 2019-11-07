const Sketch = p => {
  var x, y, x2, y2, rad, rad2, dist, dist2;
  var deg, incr, yIn, rotateBy, ang;

  p.setup = () => {
    p.createCanvas(p.windowWidth, (p.windowHeight * 2) / 3);
    x = 0;
    y = 0;
    x2 = 0;
    y2 = 0;
    rad = -20;
    rad2 = -160;
    dist = 500;
    dist2 = 550;
    incr = 1;
    rotateBy = 0;
    yIn = 0;
  };

  p.draw = () => {
    p.noStroke();
    p.fill(2, 2, 10, 10);
    p.rect(0, 0, p.width, p.height);
    p.fill(p.random(0, 255), p.random(0, 255), 250);

    rotateBy += 0.003;
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(rotateBy);
    deg = 0;
    while (deg <= 360) {
      deg += incr;
      ang = p.radians(deg);
      x = p.cos(ang) * (rad + dist * p.noise(y / 100, yIn));
      y = p.sin(ang) * (rad + dist * p.noise(x / 80, yIn));
      p.ellipse(x, y, 1.5, 1.5);
      x2 = p.sin(ang) * (rad2 + dist2 * p.noise(y2 / 20, yIn));
      y2 = p.cos(ang) * (rad2 + dist2 * p.noise(y2 / 20, yIn));
      p.ellipse(x2, y2, 1, 1);
    }

    yIn += 0.005;
    p.pop();
  };
};

export default Sketch;
