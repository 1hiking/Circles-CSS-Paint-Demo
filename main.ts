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

const amountCircles = document.getElementById("amount");
const radiusCircles = document.getElementById("radius");
const colorCircles = document.getElementById("color");
const canvasPatterns = document.getElementById("pattern");

amountCircles!.addEventListener("change", (e) => {
  return canvasPatterns!.style.setProperty(
    "--circle-amount",
    (e.target as HTMLInputElement).value
  );
});

radiusCircles!.addEventListener("change", (e) => {
  return canvasPatterns!.style.setProperty(
    "--circle-radius",
    (e.target as HTMLInputElement).value
  );
});

colorCircles!.addEventListener("change", (e) => {
  return canvasPatterns!.style.setProperty(
    "--circle-color",
    (e.target as HTMLInputElement).value
  );
});

//https://css-tricks.com/updating-a-css-variable-with-javascript/
