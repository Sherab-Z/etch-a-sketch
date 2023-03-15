const settingsObj = {
  penColor: "black",
  canvasGridSideLength: 16,
};

function createNewCanvas(sideSquaresNum = 16) {
  console.log("FUNC CALL: createNewCanvas()");
  const canvas = document.getElementById("canvas");

  for (let i = 0; i < sideSquaresNum ** 2; i++) {
    const gs = document.createElement("div");
    gs.className = "gs";
    gs.style.width = `calc(100% / ${sideSquaresNum})`;
    gs.style.height = `calc(100% / ${sideSquaresNum})`;
    canvas.appendChild(gs);
  }
}

function drawOnCanvas() {
  console.log("FUNC CALL: drawOnCanvas()");

  let isMouseDown = false;
  console.log(`isMouseDown ${isMouseDown}`);

  // Mousemove handler function
  const mousemoveHandler = function (event) {
    console.log("func EVENT: drawOnCanvas() > mousemove");

    // Check if the mouse button is currently down and the cursor is over a .gs div
    if (isMouseDown && event.target.classList.contains("gs")) {
      console.log("func EVENT: drawOnCanvas() > mousemove ACTIVE");

      event.target.style.backgroundColor = settingsObj.penColor; // Change the color to the currently set pen color in the settingsObj
    }
  };

  // Set up event listener for mousedown event
  document.addEventListener("mousedown", function (event) {
    console.log("func EVENT: drawOnCanvas() > mousedown");
    // Check if the clicked element has class .gs
    if (event.target.classList.contains("gs")) {
      isMouseDown = true;
      console.log(`isMouseDown = ${isMouseDown}`);

      event.target.style.backgroundColor = settingsObj.penColor; // Change the color to the currently set pen color in the settingsObj object

      // Set up event listener for mousemove event
      document.addEventListener("mousemove", mousemoveHandler); // Add the mousemove event listener
    }

    // Set up event listener for mouseup event
    document.addEventListener("mouseup", function (event) {
      console.log("func EVENT: drawOnCanvas() > mouseup");

      isMouseDown = false;
      console.log(`isMouseDown ${isMouseDown}`);

      document.removeEventListener("mousedown", mousemoveHandler); // Remove the mousemove event listener
    });
  });
}

// Reinitialize the canvas every time script file is loaded
document.addEventListener("DOMContentLoaded", function () {
  createNewCanvas();
  drawOnCanvas();
});

// EVENT LISTENERS

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
