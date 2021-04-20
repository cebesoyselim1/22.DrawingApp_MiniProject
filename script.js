const plus = document.querySelector(".increaseSize");
const minus = document.querySelector(".decreaseSize");
const drawSize = document.querySelector(".drawSize");
const canvas = document.querySelector(".drawingBoard");
const color = document.querySelector(".drawingColor");
const clear = document.querySelector(".clearCanvas");

let prevX;
let prevY;
let clicked = false;
let size = 10;

plus.addEventListener("click", (e) => {
    size += 5;
    if(size >= 50){
        size = 50;
    }

    drawSize.value = size;
})

minus.addEventListener("click", (e) => {
    size -= 5;
    if(size <= 5){
        size = 5;
    }

    drawSize.value = size;
})

canvas.addEventListener("mousedown", (e) => {
    clicked = true;
})

canvas.addEventListener("mouseup", (e) => {
    clicked = false;
    prevX = null;
    prevY = null;
})

canvas.addEventListener("mousemove", (e) => {
    if(clicked){
        let pointX = e.clientX - e.target.offsetLeft;
        let pointY = e.clientY - e.target.offsetTop;
        drawLine(prevX,prevY,pointX,pointY);
        prevX = pointX;
        prevY = pointY;
        drawCircle(pointX,pointY);
    }
})

clear.addEventListener("click", (e) => {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
})

let drawCircle = (pointX,pointY) => {
    var c = document.querySelector(".drawingBoard");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(pointX, pointY, size, 0, 2 * Math.PI);
    ctx.fillStyle = color.value;
    ctx.fill();
}

let drawLine = (x1,y1,x2,y2) => {
    if(x1 && y1 && x2 && y2){
        var c = document.querySelector(".drawingBoard");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = size * 2;
        ctx.strokeStyle = color.value;
        ctx.stroke();
    }
}