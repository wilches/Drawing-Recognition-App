const draw = {};

draw.path = (ctx, path, color = "black") => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(...path[0]); // path[0][0], path[0][1]
  for (let i = 1; i < path.length; i++) {
    ctx.lineTo(...path[i]); // path[i][0], path[i][1]
  }
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
};

draw.paths = (ctx, paths, color = "black") => {
  for (const path of paths) {
    draw.path(ctx, path, color);
  }
};
