// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units

if ("registerProperty" in CSS) {
  CSS.registerProperty({
    name: "--circle-color",
    syntax: "<color>",
    initialValue: "black",
    inherits: true,
  });

  CSS.registerProperty({
    name: "--circle-radius",
    syntax: "<number>",
    initialValue: "100",
    inherits: true,
  });

  CSS.registerProperty({
    name: "--circle-amount",
    syntax: "<integer>",
    initialValue: "1",
    inherits: true,
  });
}

if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("worklet.js");
  console.log("Sucess loading worklet");
} else {
  console.log("Browser doesn't support CSS Paint API");
}
