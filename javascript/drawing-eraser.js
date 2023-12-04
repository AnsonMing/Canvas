class DrawingEraser extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.isDrawing = false;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.strokeStyle = "#ffffff"; // Set the stroke color to white for erasing
      this.contextReal.lineWidth = 10; // Set the eraser width
      this.contextReal.lineJoin = "round";
      this.contextReal.lineCap = "round";
      this.contextReal.globalCompositeOperation = "source-over"; // Use the "destination-out" composite operation for erasing
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.isDrawing = true;
    }
  
    onDragging(coord, event) {
      if (!this.isDrawing) return;
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.stroke();
    }
  
    onMouseUp(coord) {
      if (!this.isDrawing) return;
      this.contextReal.closePath();
      this.contextReal.globalCompositeOperation = "source-over"; // Restore the default composite operation
      this.isDrawing = false;
    }
  }
  $("#drawing-eraser").click(() => {
    currentFunction = new DrawingEraser(contextReal, contextDraft);
  });