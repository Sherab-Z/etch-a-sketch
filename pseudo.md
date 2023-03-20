# Etch-a-Sketch Pseudocode 

## Overview 
A fixed-size etch-a-sketch which the user can draw on when they hold down their left mouse button and drag their cursor across the canvas. The red frame around the canvas will look like the retro toy with 2 dials and a middle button. Shadow effects where the edges would be raised will give it a more realistic look. 

### Roadmap:
1. [x] Basic overall page layout & general text - title, intro, footer text [ HTML + CSS ]
2. [x] Create canvas [ JS + CSS Flexbox ]
3. [x] Ensure responsiveness [ CSS ]
4. [x] Set-up drawing feature [ JS ]
5. [x] Set-up 'Reset' button feature [ HTML + JS ]
6. [] Create L & R dials, arrange labels [ HTML + CSS Grid ]
7. [x] Add overall styling [ CSS ]
8. [] Make dials functional [ JS ]
9. [] 

### Features
- [] L dial will control the size of the pen-tip, 
- [] R dial will control the color of the pen. 
- [] R dial will have 3 settings: black, rainbow-color, and eraser.
- [] When the user clicks the R button, they can choose any color via a pop-up color picker. 
- [x] The middle button re-initializes (i.e. clears) the canvas with the pixel size currently selected on the L dial.
- [] When the cursor is off the canvas, it looks like a normal arrow cursor; when over the canvas, it becomes a '+' shape.

## Pseudocodes

### Get user choice of pen thickness & convert to grid side length:
1. Event Listener: User clicks 'New Canvas' button
2. Call function promptForPenThickness(): Prompt user for pen thickness choice
3. User enters one of: 'tiny', 'small', 'medium', or 'large' and clicks 'Enter' button
4. Call convertPenThicknessIntoCanvasSideLength: Convert user string to number of div's (gridSideLength) on each side of the canvas
5. Call createNewCanvas function with gridSideLength argument
6. Call setPenColor(clr='black'): Reset pen color to black (default setting)
7. A new canvas is created with user's choice of 'pen thickness'

### Pen Width btn
1. User clicks 'Pen Width' button
2. Event Listener: 
   1. Triggers cyclePenWidths() function to cycle through the 4 available pen widths (default="small": gridSideLength="84")
   2. Triggers updatePenWidthBtnIcon() function to update the Pen Width icon on the button
3. Button displays the correct icon for the new pen width
4. 'Clear Canvas' button only erases strokes on the canvas, keeping the current pen width


### Event listeners:
- [x] Mouse click on right dial
- [x] Mouse click on middle button ('Clear')
- [x] Mouse drag: on dials
- [x] Mouse drag: on canvas
- [x] Mouse over: canvas vs off-canvas

### Functions:

 - [x] createNewCanvas(sideSquaresNum: type=number default=16)
 - [x] draw(color: string)
   - if color = (some color) : apply that color to canvas; 
   - else if color = isRainbow : apply random color to canvas
 - [] clearCanvas(): Re-initializes (i.e. clear) the canvas, applying the pixel size currently selected on the L dial
 - [] openColorPicker()
 - [] setPenColor(color: string):  Sets the color of the pen, and triggers matchOtherElsToPenColor()
 - [] matchOtherElsToPenColor():  Changes the color of the R dial and the labels around the L dial to match the currently selected pen color.
 - [] rainbowColors():  Set random color for each new grid square being dragged over
 - [] changeColorOfDialSurface()
 - [] cursorStyle():  When cursor is over off the canvas: it's a normal arrow cursor shape
   - When cursor is over the canvas: it's a '+' shape
 - [] toggleGridLines()
