// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units
if ("registerProperty" in CSS) {
  //@ts-ignore
  CSS.registerProperty({
    name: "--circle-color",
    syntax: "<color>",
    initialValue: "black",
    inherits: true,
  });
  //@ts-ignore
  CSS.registerProperty({
    name: "--circle-radius",
    syntax: "<number>",
    initialValue: "100",
    inherits: true,
  });
  //@ts-ignore
  CSS.registerProperty({
    name: "--circle-amount",
    syntax: "<integer>",
    initialValue: "1",
    inherits: true,
  });
}
if ("paintWorklet" in CSS) {
  //@ts-ignore
  CSS.paintWorklet.addModule("worklet.js");
  console.log("Sucess loading worklet");
} else {
  console.log("Browser doesn't support CSS Paint API");
}
var amountCircles = document.getElementById("amount");
var radiusCircles = document.getElementById("radius");
var colorCircles = document.getElementById("color");
var canvasPatterns = document.getElementById("pattern");
amountCircles.addEventListener("change", function (e) {
  return canvasPatterns.style.setProperty("--circle-amount", e.target.value);
});
radiusCircles.addEventListener("change", function (e) {
  return canvasPatterns.style.setProperty("--circle-radius", e.target.value);
});
colorCircles.addEventListener("change", function (e) {
  return canvasPatterns.style.setProperty("--circle-color", e.target.value);
});
//https://css-tricks.com/updating-a-css-variable-with-javascript/
