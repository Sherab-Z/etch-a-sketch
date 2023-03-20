// Store current state settings of the app
const settingsObj = {
  canvasColor: "rgb(241, 237, 237)",
  penColor: "black",
  canvasGridSideLength: 84
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
function createNewCanvas(gridSideLength=64) {
  // sideSqursNum param is the number of .gs divs that will be on each side of the square canvas
  console.log("FUNC CALL: createNewCanvas()");

  settingsObj.canvasGridSideLength = gridSideLength; // Update the grid side length value in settingsObj for use by other functions

  // Values for creating the canvas grid div's
  const canvas = document.getElementById("canvas");
  const gsLen = `calc(100% / ${gridSideLength})`;

  // Delete all existing .gs divs inside the #canvas
  canvas.innerHTML = "";

  // Based on gridSideLength, create the correct number of .gs divs with the right size to fill the square canvas which has its own responsively predetermined width and height
  for (let i = 0; i < gridSideLength ** 2; i++) {
    const gs = document.createElement("div");
    gs.className = "gs";
    gs.style.width = gsLen;
    gs.style.height = gsLen;
    canvas.appendChild(gs);
  }
}

function resizePenSizeBtnIcons() {
  // Get reference to canvas, as these icons will be sized based on its width and height
  const canvas = document.getElementById("canvas");

  // Get icon div's
  const fineIcon = document.getElementById("fine-pen-icon");
  const smallIcon = document.getElementById("small-pen-icon");
  const mediumIcon = document.getElementById("medium-pen-icon");
  const largeIcon = document.getElementById("large-pen-icon");

  // Calc side lengths for each pen width
  fineIconSize = `${canvas.offsetWidth / 100}px`;
  smallIconSize = `${canvas.offsetWidth / 84}px`;
  mediumIconSize = `${canvas.offsetWidth / 64}px`;
  largeIconSize = `${canvas.offsetWidth / 33}px`;
  
  // Set size for each icon

  fineIcon.style.width = fineIconSize;
  fineIcon.style.height = fineIconSize;
  smallIcon.style.width = smallIconSize;
  smallIcon.style.height = smallIconSize;
  mediumIcon.style.width = mediumIconSize;
  mediumIcon.style.height = mediumIconSize;
  largeIcon.style.width = largeIconSize;
  largeIcon.style.height = largeIconSize;
}

// FUNC: Prompt user for pen thickness to be applied to new canvas
function getPenThickness() {
  console.log("FUNC CALL: getPenThickness()");
  // Store the user's input as penThickness
  const penThickness = prompt(
    "How thick would you like your pen to be? Type 'fine', 'small', 'medium' or 'large':"
  );

  const validPenThicknessArr = ["fine", "small", "medium", "large"];
  console.log(`Input valid?: ${validPenThicknessArr.includes(penThickness)}`);

  if (penThickness === null) {
    return; // User cancelled the prompt, so do nothing
  } else if (validPenThicknessArr.includes(penThickness)) {
    return penThickness;
  } else {
    alert(
      `Invalid entry "${penThickness}". Pen thickness should be one of 'fine', 'small', 'medium' or 'large'.`
    );
    getPenThickness();
  }
}

function convertPenThicknessIntoCanvasSideLength(penThickness) {
  console.log(
    `FUNC CALL: convertPenThicknessIntoCanvasSideLength(${penThickness})`
  );

  // Convert penThickness into gridSideLength inside settingsObj, to be used to createNewCanvas
  switch (penThickness) {
    case "fine":
      settingsObj.gridSideLength = 100;
      return 100;
      break;
    case "small":
      settingsObj.gridSideLength = 84;
      return 84;
      break;
    case "medium":
      settingsObj.gridSideLength = 64;
      return 64;
      break;
    case "large":
      settingsObj.gridSideLength = 33;
      return 33;
      break;
    default:
      throw new Error(
        `Invalid pen thickness string "${penThickness}". String should be one of 'fine', 'small', 'medium' or 'large'.`
      );
  }
}

function refreshCanvas() {
  let thicknessChoice = getPenThickness();
  let sideLen = convertPenThicknessIntoCanvasSideLength(thicknessChoice);
  createNewCanvas(sideLen);
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

// Each time the script file is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Reinitialize the canvas and button elements
  createNewCanvas();
  resizePenSizeBtnIcons();
  drawOnCanvas();

  // Add event handlers
  // 'New Canvas' button:
  const clearCanvasBtn = document.getElementById("clear-canvas-btn");
  clearCanvasBtn.addEventListener("click", clearCanvas);
});

// Call resizePenSizeBtnIcons function whenever the window is resized
window.addEventListener('resize', resizePenSizeBtnIcons);
