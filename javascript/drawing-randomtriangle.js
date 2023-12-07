class DrawingRandomTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    setCustom.reset();
    setCustom.setPx();
    setCustom.setColor();
    setCustom.setOption();
    setCustom.addOption("Fill");
    setCustom.addOption("Stroke");
    this.p1 = [];
    this.p2 = [];
    this.p3 = [];
    this.isFirstLine = true;
  }

  generateRandomCoordinates() {
    const canvasWidth = canvasDraft.width;
    const canvasHeight = canvasDraft.height;

    const x1 = Math.floor(Math.random() * canvasWidth);
    const y1 = Math.floor(Math.random() * canvasHeight);
    const x2 = Math.floor(Math.random() * canvasWidth);
    const y2 = Math.floor(Math.random() * canvasHeight);
    const x3 = Math.floor(Math.random() * canvasWidth);
    const y3 = Math.floor(Math.random() * canvasHeight);

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    return [[x1, y1], [x2, y2], [x3, y3], randomColor];
  }

  onMouseDown(coord, event) {
    if (this.isFirstLine) {
      const randomCoordinates = this.generateRandomCoordinates();
      this.p1 = randomCoordinates[0];
      this.p2 = randomCoordinates[1];
      this.p3 = randomCoordinates[2];
      setCustom.setColor(randomCoordinates[3]); // Set random color
      this.isFirstLine = false;
    } else {
      this.p3 = [coord[0], coord[1]];
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

      this.contextReal.beginPath();
      this.contextReal.moveTo(this.p1[0], this.p1[1]);
      this.contextReal.lineTo(this.p2[0], this.p2[1]);
      this.contextReal.lineTo(this.p3[0], this.p3[1]);
      this.contextReal.lineTo(this.p1[0], this.p1[1]);
      this.contextReal.fillStyle = setCustom.getColor();
      this.contextReal.strokeStyle = setCustom.getColor();
      this.contextReal.lineWidth = setCustom.getPx();

      if (setCustom.getOption() === "Fill") {
        this.contextReal.fill();
        this.contextReal.stroke();
      } else {
        this.contextReal.lineCap = "round";
        this.contextReal.stroke();
      }

      this.isFirstLine = true;
    }
  }

  // Rest of the code...
}