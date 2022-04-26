const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const canvas_width = document.getElementsByClassName("canvas")[0].offsetWidth
const canvas_height = document.getElementsByClassName("canvas")[0].offsetHeight;
const saveBtn = document.getElementById("jsSave")

canvas.width = canvas_width
canvas.height = canvas_height

// init set
ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5

let painting = false
let filling = false

function startPainting() {
    painting = true
}

function stopPainting() {
    painting = false
}

// 클릭시 글써지게 하는 이벤트
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

// 컬러 클릭 시 붓 색상 변경
function handleColorClick(event) {
    const color = event.target.style.backgroundColor
    if (!filling) { // fill on or off
        ctx.strokeStyle = color
    } else {
        ctx.fillStyle = color
        ctx.fillRect(0, 0, canvas_width, canvas_height)
    }
}

// 붓 굵기 변경
function handleRangeChange(event) {
    const size = event.target.value
    ctx.lineWidth = size
}

// fill 버튼
function handleModeClick() {
    if (filling === false) {
        filling = true;
        mode.innerText = "Fill"
    } else {
        filling = false;
        mode.innerText = "Paint"
    }
}

// 저장 버튼
function handleCM(event) {
    event.preventDefault(); // Mouse 우클릭 방지
}

function handleSaveClick() {
    const image = canvas.toDataURL()
    const link = document.createElement("a")
    link.href = image;
    link.download = "PaintJS[🤟]"
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener("contextmenu", handleCM)
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))

if (range) {
    range.addEventListener("input", handleRangeChange)
}

if (mode) {
    mode.addEventListener("click", handleModeClick)
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick)
}