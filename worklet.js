function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const WORKLET = "circle";

class Circles {
  static get inputProperties() {
    return [`--${WORKLET}-color`, `--${WORKLET}-radius`, `--${WORKLET}-amount`];
  }
  //ctx = https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html , except any specific Canva api
  paint(context, geometry, properties) {
    const amount = properties.get(`--${WORKLET}-amount`);
    for (let i = 1; i <= amount; i++) {
      context.beginPath();
      context.fillStyle = properties.get(`--${WORKLET}-color`);
      context.arc(
        i + getRandom(1, geometry.width),
        i + getRandom(1, geometry.height),
        properties.get(`--${WORKLET}-radius`),
        0,
        2 * Math.PI,
        false
      );
      context.fill();
    }
  }
}

registerPaint(`circles`, Circles);
