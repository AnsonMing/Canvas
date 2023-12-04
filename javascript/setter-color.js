$(document).ready(() => {
    let S = "#000000"; // Default color
  
    // Handle color picker change event
    $("#color-picker").change((event) => {
      selectedColor = event.target.value;
    });
  
    // Pass the selected color to the drawing functions
    currentFunction = new DrawingLine(contextReal, contextDraft, selectedColor, DrawingCircle, DrawingRectangle, DrawingBrush);
    currentFunction = new DrawingBrush(contextReal, contextDraft, selectedColor, DrawingCircle, DrawingRectangle, DrawingBrush);
    // ...
  });