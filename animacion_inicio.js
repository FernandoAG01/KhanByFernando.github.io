const canvas = document.getElementById("animacion");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let colores = [];
for (let i = 0; i < 20; i++) {
    colores.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 30 + Math.random() * 50,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`
    });
}

function animar() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let c of colores) {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();

        c.x += c.dx;
        c.y += c.dy;

        if (c.x < 0 || c.x > canvas.width) c.dx *= -1;
        if (c.y < 0 || c.y > canvas.height) c.dy *= -1;
    }
    requestAnimationFrame(animar);
}
animar();
