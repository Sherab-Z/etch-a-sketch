

function createNewCanvas(sideSquaresNum = 16) {
  const canvas = document.getElementById('canvas');

  for (let i = 0; i < (sideSquaresNum ** 2); i++) {
    const gs = document.createElement('div');
    gs.className = 'gs';
    gs.style.width = `calc(100% / ${sideSquaresNum})`;
    gs.style.height = `calc(100% / ${sideSquaresNum})`;
    canvas.appendChild(gs);
  }
}

function draw(color='black', isRainbow=false) {
  
}

// Bottom of script
createNewCanvas();

// Dial features

// const dial = document.getElementById("dial");
// const handle = document.querySelector(".dial-handle");
// const marks = document.querySelectorAll(".dial-mark");

// let isDragging = false;
// let startAngle = 0;

// handle.addEventListener("mousedown", function(event) {
//   event.preventDefault();
//   isDragging = true;
//   startAngle = getAngle(event.clientX, event.clientY);
// });

// document.addEventListener("mousemove", function(event) {
//   event.preventDefault();
//   if (isDragging) {
//     const angle = getAngle(event.clientX, event.clientY);
//     const delta = angle - startAngle;
//     const rotation = getRotation() + delta;
//     setRotation(rotation);
//     startAngle = angle;
//   }
// });

// document.addEventListener("mouseup", function(event) {
//   event.preventDefault();
//   isDragging = false;
// });

// handle.addEventListener("click", function(event) {
//   event.stopPropagation();
//   const targetAngle = parseInt(event.target.dataset.angle);
//   const currentAngle = getRotation();
//   const delta = targetAngle - currentAngle;
//   setRotation(targetAngle);
// });

// function getAngle(x, y) {
//   const dx = x - dial.offsetLeft - dial.offsetWidth / 2;
//   const dy = y - dial.offsetTop - dial.offsetHeight / 2;
//   return Math.atan2(dy, dx) * 180 / Math.PI;
// }

// function getRotation() {
//   const style = window.getComputedStyle(dial);
//   const matrix = new DOMMatrixReadOnly(style.transform);
//   return Math.round(Math.atan2(matrix.m21, matrix.m11) * 180 / Math.PI);
// }

// function setRotation(angle) {
//   const value = `rotate(${angle}deg)`;
//   dial.style.transform = value;
// }
