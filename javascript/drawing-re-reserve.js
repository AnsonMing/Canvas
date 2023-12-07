// The redo functionality
class DrawingReReserve {
    constructor(contextReal, contextDraft) {
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    // Implement the redo functionality
    redo() {
      // Clear the real canvas and redraw the saved canvas state
      this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextReal.drawImage(canvasDraft, 0, 0);
    }
  }

  $("#drawing-re-reserve").click(() => {
    currentFunction = new DrawingReReserve(contextReal, contextDraft);
    currentFunction.redo();
  });