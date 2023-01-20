# Etch-a-Sketch Pseudocode 

## Macro view 
1. A canvas containing a grid of squares will be displayed upon opening the page, with 'New Sketch' button below that.

2. When the user clicks 'New Sketch', a prompt will display asking the user how many squares on each side of the canvas there should be (max 100). Upon submitting a valid number, a new empty square canvas will be displayed with the requested size. 

3. As the user moves their cursor across the canvas, each square the user hovers over will change color when the cursor starts hovering over it. 

4. Pressing the 'New Sketch' button will trigger a confirmation dialog "Do you wish to clear the canvas and start over?", which if approved will clear the canvas and prompt the user for a new canvas size, then proceeds from step 2. 

## Pseudocode 

NOTE: 'Overall Steps' content is most up-to-date, and everything under 'Algorithm' needs to incorporated into a copy of it

NOTE: I'm not sure about how to implement checkUserInput() - how to proceed if it fails? Should it alert "invalid input" and call createNewSketch() again? Or Alert and call getUserInput() again within the same function call? How to implement the latter?


### List of functions:

 - introCanvas()
 - createNewCanvas()
 - checkUserInput()
 - convertUserInputStringToNum()

### Overall Steps:

1. Create intro canvas
2. User clicks 'New Sketch' button >>> createNewCanvas()
   1. Call getUserInput()
      1. Create new variable userInputString
      2. Prompt for number of sides, which returns to userInputString
      3. Return output string from prompt
   2. Call convertUserInputStringToNum(string) with argument userInputString, and assign to new variable userInputConvertedToNum
      1. Create new variable num
      2. Convert returned string to number and assign to num
      3. Return num
   3. Check userInputConvertedToNum is within valid range
      1. If so:
         1. Return true
      2. Else: 
         1. return false

### Algorithm:

1. HTML contains div with class "container", with set width and height
2. When page opens call function introCanvas() to create empty 16x16 square canvas and return nothing:
  - get div with class "container" and assign to variable named canvasFrame
  - create variable named canvas 
  - create 16x16 square canvas and assign to variable canvas.
  - Assign canvas to canvasFrame 
3. When User clicks 'New sketch' button, call function createNewCanvas()which returns a string containing a number:
  - Create new variable userInput
  - Prompt "How fine will your pencil be? Choose a number of squares for each side of your canvas between 16 and 100" and assign return value to userInput
    - Call function checkUserInput() with argument userInput which returns a boolean:
      - Trim whitespace from userInput
      - Call convertUserInputStringToNum(string) with argument userInput, which is coded inside scope of checkUserInput(), which returns a number and assigns it to new variable userInputNum: 
           - Convert string to a number and assign to new variable num
           - Return num
       - 
      - If userInputNum is between 16 and 100:
        - Return userInputNum to createNewCanvas() and assign to 
      - Else: 
        - Prompt "Sorry, that's not allowed ;) Please enter a number between 16 and 100..."
  - Create a new empty square canvas with side length === canvasSideLength
1. When User hovers over a square: 
  - permanently change its color to black.
1. When User clicks 'New sketch' button after a canvas has been created: 
  - Prompt "Do you wish to clear the canvas and start over?"
    - If User clicks 'OK':
      - Clear the canvas and call createNewCanvas() function
    - Else if User clicks 'Cancel':
      - Do nothing, empty return

