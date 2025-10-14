const canvas = document.getElementById('fondoAnimado');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const burbujas = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  dy: Math.random() * 0.8 + 0.3,
  color: `hsl(${Math.random() * 360}, 70%, 60%)`
}));

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  burbujas.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
    b.y -= b.dy;
    if (b.y < 0) b.y = canvas.height;
  });
  requestAnimationFrame(animar);
}
animar();
