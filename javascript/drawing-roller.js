// drawing-roller.js

class DrawingRoller {
    constructor(contextReal, contextDraft) {
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.isDrawing = false;
      this.previousX = 0;
      this.previousY = 0;
      this.size = 20; // Default size
  
      this.contextReal.lineJoin = "round";
      this.contextDraft.lineJoin = "round";
      this.contextReal.lineCap = "round";
      this.contextDraft.lineCap = "round";
    }
  
    setSize(size) {
      this.size = size;
      this.contextReal.lineWidth = size;
      this.contextDraft.lineWidth = size;
    }
  
    onMouseDown(coord, event) {
      this.isDrawing = true;
      this.previousX = coord[0];
      this.previousY = coord[1];
      this.contextReal.strokeStyle = getRandomColor();
      this.contextDraft.strokeStyle = this.contextReal.strokeStyle;
      this.contextReal.lineWidth = this.size;
      this.contextDraft.lineWidth = this.size;
      this.contextReal.beginPath();
      this.contextDraft.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.contextDraft.moveTo(coord[0], coord[1]);
    }
  
    onMouseMove(coord, event) {
      if (!this.isDrawing) return;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    }
  
    onMouseUp(coord, event) {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.stroke();
      this.contextReal.closePath();
    }
  
    onMouseLeave() {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.closePath();
    }
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }