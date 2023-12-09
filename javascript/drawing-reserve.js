// The undo functionality
class DrawingReserve {
  constructor(contextReal, contextDraft) {
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  // Implement the undo functionality
  undo() {
    // Clear the real canvas and redraw the saved canvas state
    this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.contextReal.drawImage(canvasDraft, 0, 0);
  }
}

$("#drawing-reserve").click(() => {
  currentFunction = new DrawingReserve(contextReal, contextDraft);
  currentFunction.undo();
});