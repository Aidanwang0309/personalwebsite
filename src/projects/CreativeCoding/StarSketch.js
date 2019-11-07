const Sketch = p => {
  let Stars = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth, (p.windowHeight * 2) / 3);
    p.background(100);
  };

  p.draw = () => {
    p.background(0);
    let ps = new Star();
    Stars.push(ps);
    for (let i = Stars.length - 1; i >= 0; i--) {
      Stars[i].update();
      Stars[i].show();
      if (Stars[i].finished()) {
        Stars.splice(i, 1);
      }
    }
  };

  class Star {
    constructor() {
      this.posX = p.mouseX;
      this.posY = p.mouseY;
      this.vx = Math.random(-10, 10);
      this.vy = Math.random(-100, 100);
      this.alpha = 255;
    }

    update() {
      this.posX += 3 * this.vx;
      this.posY -= 3 * this.vy;
      this.alpha -= 5;
    }

    finished() {
      return this.alpha < 0;
    }

    show() {
      p.noStroke();
      p.fill(255, 255, 0, this.alpha);
      this.star(this.posX, this.posY, 15, 30, 5);
    }

    star(x, y, radius1, radius2, npoints) {
      var angle = p.TWO_PI / npoints;
      var halfAngle = angle / 2.0;
      p.beginShape();
      for (var a = 0; a < p.TWO_PI; a += angle) {
        var sx = x + p.cos(a) * radius2;
        var sy = y + p.sin(a) * radius2;
        p.vertex(sx, sy);
        sx = x + p.cos(a + halfAngle) * radius1;
        sy = y + p.sin(a + halfAngle) * radius1;
        p.vertex(sx, sy);
      }
      p.endShape(p.CLOSE);
    }
  }
};

export default Sketch;
