import fontfile from './Muli-Black.ttf';

const Sketch = p => {
  let string = 'Code';
  const size = 180;
  let width = 3;
  // const fontFile = "Muli-Black.ttf";
  const showText = true;
  const textAlpha = 1;
  const backgroundColor = 255;
  const strokeAlpha = 15;
  const strokeColor = 100;

  const fontSampleFactor = 0.3;
  const noiseZoom = 0.006;
  const noiseOctaves = 4;
  const noiseFalloff = 0.5;

  const zOffsetChange = 0;
  const individualZOffset = 0;
  const lineSpeed = 0.5;

  // const newPointsCount = 9;

  let font;
  let points = [];
  let startingPoints;

  p.preload = () => {
    font = p.loadFont(fontfile);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth / width, p.windowWidth / 3.3);
    p.background(backgroundColor);
    p.textSize(size);
    p.fill(backgroundColor, textAlpha);
    p.stroke(strokeColor, strokeAlpha);
    p.noiseDetail(noiseOctaves, noiseFalloff);

    startingPoints = font.textToPoints(
      string,
      p.width / 2.1 - p.textWidth(string) / 2,
      p.height / 2,
      size,
      { sampleFactor: fontSampleFactor }
    );

    for (let p = 0; p < startingPoints.length; p++) {
      points[p] = startingPoints[p];
      points[p].zOffset = Math.random();
    }
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.word) {
      string = props.word;
    }
    if (props.width) {
      width = props.width;
    }
  };

  p.draw = () => {
    if (showText) {
      p.noStroke();
      p.text(string, p.width / 2 - p.textWidth(string) / 2, p.height);
      p.stroke(strokeColor, strokeAlpha);
    }
    for (let pt = 0; pt < points.length; pt++) {
      let sp = points[pt];
      let noiseX = sp.x * noiseZoom;
      let noiseY = sp.y * noiseZoom;
      let noiseZ =
        p.frameCount * zOffsetChange + sp.zOffset * individualZOffset;
      let newPX =
        sp.x +
        p.mouseX / 2000 +
        p.map(p.noise(noiseX, noiseY, noiseZ), 0, 1, -lineSpeed, lineSpeed);
      let newPY =
        sp.y +
        p.mouseY / 2000 +
        p.map(
          p.noise(noiseX, noiseY, noiseZ + 214),
          0,
          1,
          -lineSpeed,
          lineSpeed
        );
      p.line(sp.x, sp.y, newPX, newPY);
      sp.x = newPX;
      sp.y = newPY;
    }
  };
};

export default Sketch;
