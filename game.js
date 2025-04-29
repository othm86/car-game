// لعبة سيارات بسيطة
let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 400;
let ctx = canvas.getContext('2d');

let car = { x: 50, y: 300, width: 40, height: 20 };
let gems = [{x: 200, y: 300}, {x: 400, y: 200}];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(car.x, car.y, car.width, car.height);
  ctx.fillStyle = "yellow";
  gems.forEach(g => ctx.fillRect(g.x, g.y, 10, 10));
}

function update() {
  draw();
  requestAnimationFrame(update);
}
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") car.x += 10;
  if (e.key === "ArrowLeft") car.x -= 10;
});
update();