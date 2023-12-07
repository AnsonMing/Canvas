class DrawingReReserve {
  constructor(contextReal, contextDraft) {
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.history = []; // Array to store canvas snapshots
    this.currentStep = -1; // Index of the current step
  }

  // Save a snapshot of the canvas to the history array
  saveStep() {
    const snapshot = this.contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
    this.history.push(snapshot);
    this.currentStep++;
  }

  // Implement the redo functionality
  redo() {
    if (this.currentStep < this.history.length - 1) {
      this.currentStep++;
      const snapshot = this.history[this.currentStep];
      this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextReal.putImageData(snapshot, 0, 0);
    }
  }
}