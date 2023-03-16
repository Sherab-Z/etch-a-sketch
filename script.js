const settingsObj = {
  canvasColor: "rgb(241, 237, 237)",
  penColor: "black",
  canvasGridSideLength: 16,
};

//  FUNC: Sets the color of all .gs divs back to the default canvas color.
function clearCanvas() {
  console.log("FUNC CALL: clearCanvas()");

  const canvasDivs = document.querySelectorAll("div.gs");
  canvasDivs.forEach((div) => {
    div.style.backgroundColor = settingsObj.canvasColor;
  });
}

// FUNC: Creates and appends a collection of div's to the canvas based on the sideSqursNum param, which determines the number of divs on each side of the canvas. These div's will be rendered as a grid inside the #canvas el using flexbox wrapping
function createNewCanvas(gridSideLength = 16) {
  // sideSqursNum param is the number of .gs divs that will be on each side of the square canvas
  console.log("FUNC CALL: createNewCanvas()");

  settingsObj.canvasGridSideLength = gridSideLength; // Update the grid side length value in settingsObj for use by other functions

  // Values to be passed into the for loop below, for creating the canvas grid div's
  const canvas = document.getElementById("canvas");
  const gsWidth = `calc(100% / ${gridSideLength})`;
  const gsHeight = `calc(100% / ${gridSideLength})`;

  // Delete all existing .gs divs inside the #canvas
  canvas.innerHTML = "";

  // Based on gridSideLength, create the correct number of .gs divs with the right size to fill the square canvas which has its own responsively predetermined width and height
  for (let i = 0; i < gridSideLength ** 2; i++) {
    const gs = document.createElement("div");
    gs.className = "gs";
    gs.style.width = gsWidth;
    gs.style.height = gsHeight;
    canvas.appendChild(gs);
  }
}

function drawOnCanvas() {
  console.log("FUNC CALL: drawOnCanvas()");

  let isMouseDown = false;
  console.log(`isMouseDown ${isMouseDown}`);

  // Mousemove handler function
  const mousemoveHandler = function (event) {
    // Check if the mouse button is currently down and the cursor is over a .gs div
    if (isMouseDown && event.target.classList.contains("gs")) {
      console.log("func EVENT: drawOnCanvas() > mousemove ACTIVE");

      event.target.style.backgroundColor = settingsObj.penColor; // Change the color to the currently set pen color in the settingsObj
    }
  };

  // Set up event listener for mousedown event
  document.addEventListener("mousedown", function (event) {
    console.log("func EVENT: drawOnCanvas() > mousedown");

    isMouseDown = true;
    console.log(`isMouseDown = ${isMouseDown}`);
    // Check if the clicked element has class .gs
    if (event.target.classList.contains("gs")) {
      event.target.style.backgroundColor = settingsObj.penColor; // Change the color to the currently set pen color in the settingsObj object

      // Set up event listener for mousemove event
      document.addEventListener("mousemove", mousemoveHandler); // Add the mousemove event listener
    }

    // Set up event listener for mouseup event
    document.addEventListener("mouseup", function () {
      console.log("func EVENT: drawOnCanvas() > mouseup");

      isMouseDown = false;
      console.log(`isMouseDown ${isMouseDown}`);

      document.removeEventListener("mousedown", mousemoveHandler); // Remove the mousemove event listener
    });
  });
}


// EVENT HANDLERS

// Reinitialize the canvas every time script file is loaded
document.addEventListener("DOMContentLoaded", function () {
  createNewCanvas();
  drawOnCanvas();
});

// Clear button
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener('click', clearCanvas);  // Set the background color of each .gs div in the canvas back to the default canvas color, which is set in settingsObj.canvasColor

// Dial features

