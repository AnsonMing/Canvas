class DrawingRandomRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.p1 = [];
    this.p2 = [];
  }

  setRandomColor() {
    this.color = getRandomColor();
  }

  setRandomPx() {
    this.px = getRandomSize(1, 10);
  }

  onMouseDown(coord, event) {
    const randomWidth = Math.random() * 100 + 50; // Random width between 50 and 150
    const randomHeight = Math.random() * 100 + 50; // Random height between 50 and 150

    this.p1 = [coord[0], coord[1]];
    this.p2 = [coord[0] + randomWidth, coord[1] + randomHeight];

    this.setRandomColor();
    this.setRandomPx();
  }

  onMouseUp(coord, event) {
    this.contextReal.strokeStyle = this.color;
    this.contextReal.lineWidth = this.px;
    this.contextReal.fillStyle = this.color;
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.p1[0], this.p1[1]);
    this.contextReal.lineTo(this.p1[0], this.p2[1]);
    this.contextReal.lineTo(this.p2[0], this.p2[1]);
    this.contextReal.lineTo(this.p2[0], this.p1[1]);
    this.contextReal.lineTo(this.p1[0], this.p1[1]);
    this.contextReal.lineTo(this.p1[0], this.p2[1]);
    switch (setCustom.getOption()) {
      case "Fill":
        this.contextReal.fill();
        break;
      case "Stroke":
        this.contextReal.stroke();
        break;
    }
  }

  onDragging(coord, event) {
    // Handle dragging if needed
    const randomOffsetX = Math.random() * 20 - 10; // Random offsetX between -10 and 10
    const randomOffsetY = Math.random() * 20 - 10; // Random offsetY between -10 and 10

    this.p1[0] = coord[0] + randomOffsetX;
    this.p1[1] = coord[1] + randomOffsetY;

    this.p2[0] = this.p1[0] + (this.p2[0] - this.p1[0]);
    this.p2[1] = this.p1[1] + (this.p2[1] - this.p1[1]);

    this.drawRectangle();
  }

  onMouseMove(coord, event) {
    // Handle mouse move if needed
    if (event.buttons !== 1) return;

    const randomOffsetX = Math.random() * 20 - 10; // Random offsetX between -10 and 10
    const randomOffsetY = Math.random() * 20 - 10; // Random offsetY between -10 and 10

    this.p1[0] = coord[0] + randomOffsetX;
    this.p1[1] = coord[1] + randomOffsetY;

    this.p2[0] = this.p1[0] + (this.p2[0] - this.p1[0]);
    this.p2[1] = this.p1[1] + (this.p2[1] - this.p1[1]);

    this.drawRectangle();
  }

  onMouseLeave() {
    // Handle mouse leave if needed
    this.clearCanvas();
  }

  onMouseEnter() {
    // Handle mouse enter if needed
  }

  drawRectangle() {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeStyle = this.color;
    this.contextDraft.lineWidth = this.px;
    this.contextDraft.fillStyle = this.color;
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.p1[0], this.p1[1]);
    this.contextDraft.lineTo(this.p1[0], this.p2[1]);
    this.contextDraft.lineTo(this.p2[0], this.p2[1]);
    this.contextDraft.lineTo(this.p2[0], this.p1[1]);
    this.contextDraft.lineTo(this.p1[0], this.p1[1]);
    this.contextDraft.lineTo(this.p1[0], this.p2[1]);
    this.contextDraft.stroke();
  }

  clearCanvas() {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
}