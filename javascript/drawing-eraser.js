class DrawingEraser extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.isDrawing = false;
      setCustom.reset()
      setCustom.setOption()
      setCustom.addOption("S")
      setCustom.addOption("M")
      setCustom.addOption("L")
    }
  
    onMouseDown(coord, event) {
      // Set the eraser width
      switch(setCustom.getOption()){
        case"S":this.contextReal.lineWidth = 10; break 
        case"M":this.contextReal.lineWidth = 20; break
        case"L":this.contextReal.lineWidth = 30; break
      }
      this.contextReal.strokeStyle = "#fff"; // Set the stroke color to white for erasing
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