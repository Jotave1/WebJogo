const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./Map/MapaCompleto.png";
console.log(image);

function animate(){
    window.requestAnimationFrame(animate);
    ctx.drawImage(image, -62.5, -375);
}
animate();