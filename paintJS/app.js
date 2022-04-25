const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

// init set
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() {
    painting = true
}

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath() // 경로 생성
        ctx.moveTo(x, y) // 선 시작 좌표
    } else {
        ctx.lineTo(x, y) // 선 끝 좌표
        ctx.stroke() // 선 그리기
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
}

// if(painting)