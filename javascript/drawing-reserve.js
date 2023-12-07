$(document).ready(() => {
    let canvas = document.getElementById("canvas-real");
    let context = canvas.getContext("2d");
    let undoStack = [];
    let redoStack = [];
  
    // Function to save the current state of the canvas
    function saveState() {
      undoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
    }
  
    // Function to undo the last action
    function undo() {
      if (undoStack.length > 1) {
        redoStack.push(undoStack.pop());
        context.putImageData(undoStack[undoStack.length - 1], 0, 0);
      }
    }
  
    // Function to redo the last undone action
    function redo() {
      if (redoStack.length > 0) {
        undoStack.push(redoStack.pop());
        context.putImageData(undoStack[undoStack.length - 1], 0, 0);
      }
    }
  
    // Event listener for the undo button
    $("#drawing-reserve").click(() => {
      undo();
    });
  
    // Event listener for the redo button
    $("#drawing-re-reserve").click(() => {
      redo();
    });
  
    // Event listener for saving the state of the canvas when drawing is done
    $("#canvas-real").mouseup(() => {
      saveState();
    });
  });