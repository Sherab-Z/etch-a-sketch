# Etch-a-Sketch Pseudocode 

## Overview 
A fixed-size etch-a-sketch which the user can draw on when they hold down their left mouse button and drag their cursor across the canvas. The red frame around the canvas will look like the retro toy with 2 dials and a middle button. Shadow effects where the edges would be raised will give it a more realistic look. 

### Features
- L dial will control the size of the pen-tip, 
- R dial will control the color of the pen. 
- R dial will have 3 settings: black, rainbow-color, and eraser.
- When the user clicks the R button, they can choose any color via a pop-up color picker. 
- The middle button re-initializes (i.e. clears) the canvas with the pixel size currently selected on the L dial.
- When the cursor is off the canvas, it looks like a normal arrow cursor; when over the canvas, it becomes a '+' shape.


## Pseudocode 


### Event listeners:
- Mouse click on right dial
- Mouse click on middle button ('Clear')
- Mouse drag: on dials
- Mouse drag: on canvas
- mouse over: canvas vs off-canvas

### List of functions:

 - createNewCanvas(sideSquaresNum: type=number default=16)
 - draw(color: string, isRainbow: boolean default=false)
   - if color = (some color) : draw with that color; 
   - else if isRainbow = true : CALL rainbowColors() on each new grid square being drawn on
 - clearCanvas(): Re-initializes (i.e. clear) the canvas, applying the pixel size currently selected on the L dial
 - openColorPicker()
 - setPenColor(color: string):  Sets the color of the pen, and triggers matchOtherElsToPenColor()
 - matchOtherElsToPenColor():  Changes the color of the R dial and the labels around the L dial to match the currently selected pen color.
 - rainbowColors():  Set random color for each new grid square being dragged over
 - changeColorOfDialSurface()
 - cursorStyle():  When cursor is over off the canvas: it's a normal arrow cursor shape
   - When cursor is over the canvas: it's a '+' shape
 - toggleGridLines()


### Overall Steps:
1. [] Basic overall page layout & general text - title, intro, footer text [ HTML + CSS ]
2. [] Create canvas [ JS + CSS Grid ]
3. [] Ensure responsiveness [ CSS ]
4. [] Set up 'drag' effect for drawing [ JS ]
5. [] Add clear button [ HTML + JS ]
6. [] Add L & R dials, with labels [ HTML + CSS ]
7. [] Add overall styling [ CSS ]
8. [] Make dials functional [ JS ]
9. 



