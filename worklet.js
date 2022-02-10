class Rectangle {
  static get inputProperties() {
    return ["--rectangle-color", "--rectangle-width", "--rectangle-height"];
  }
  paint(ctx, geometry, properties) {
    ctx.fillStyle = properties.get("--rectangle-color");
    ctx.fillRect(
      100,
      100,
      properties.get("--rectangle-width"),
      properties.get("--rectangle-height")
    );
  }
}

registerPaint("line", Rectangle);
