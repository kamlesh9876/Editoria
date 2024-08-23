let canvas, ctx;
let uploadedImage = new Image();
let angle = 0;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.lineWidth = 5;
    ctx.globalAlpha = 1;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);
}

function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.onload = function() {
                adjustCanvasSize();
                ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
            }
        }
        reader.readAsDataURL(file);
    }
}

function adjustCanvasSize() {
    const aspectRatio = uploadedImage.width / uploadedImage.height;
    const container = document.querySelector('.image-container');
    if (angle % 180 === 0) {
        canvas.width = uploadedImage.width;
        canvas.height = uploadedImage.height;
    } else {
        canvas.width = uploadedImage.height;
        canvas.height = uploadedImage.width;
    }
    container.style.width = `${canvas.width}px`;
    container.style.height = `${canvas.height}px`;
}

function applyFilters() {
    const grayscale = document.getElementById('grayscale').value;
    const sepia = document.getElementById('sepia').value;
    const invert = document.getElementById('invert').value;
    const brightness = document.getElementById('brightness').value;
    const contrast = document.getElementById('contrast').value;
    const blur = document.getElementById('blur').value;
    const hueRotate = document.getElementById('hue-rotate').value;
    const saturate = document.getElementById('saturate').value;

    const filterString = `grayscale(${grayscale}%) sepia(${sepia}%) invert(${invert}%) brightness(${brightness}%) contrast(${contrast}%) blur(${blur}px) hue-rotate(${hueRotate}deg) saturate(${saturate}%)`;
    ctx.filter = filterString;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(uploadedImage, -uploadedImage.width / 2, -uploadedImage.height / 2);
    ctx.restore();
    ctx.filter = 'none';
}

function resetFilters() {
    document.getElementById('grayscale').value = 0;
    document.getElementById('sepia').value = 0;
    document.getElementById('invert').value = 0;
    document.getElementById('brightness').value = 100;
    document.getElementById('contrast').value = 100;
    document.getElementById('blur').value = 0;
    document.getElementById('hue-rotate').value = 0;
    document.getElementById('saturate').value = 100;
    applyFilters();
}

function downloadImage() {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'Editoriaimage.png';
    link.click();
}

function rotateImage() {
    angle = (angle + 90) % 360;
    adjustCanvasSize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(uploadedImage, -uploadedImage.width / 2, -uploadedImage.height / 2);
    ctx.restore();
}

window.onload = init;
