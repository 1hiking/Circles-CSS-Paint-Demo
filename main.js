// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units

CSS.registerProperty({
  name: "--rectangle-color",
  syntax: "<color>",
  initialValue: "black",
  inherits: true,
});

CSS.registerProperty({
  name: "--rectangle-width",
  syntax: "<number>",
  initialValue: "100",
  inherits: true,
});

CSS.registerProperty({
  name: "--rectangle-height",
  syntax: "<number>",
  initialValue: "100",
  inherits: true,
});

if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("worklet.js");
  console.log("Sucess loading worklet");
} else {
  console.log("Browser doesn't support CSS Paint API");
}
