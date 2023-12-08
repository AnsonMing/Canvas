/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {


  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    setCustom.reset()
    setCustom.setColor()
    setCustom.setPx()
    setCustom.setOption()
    setCustom.addOption('Fill')
    setCustom.addOption('Stroke')
    this.p1=[]
    this.p2=[]
  }

  onMouseDown(coord, event) {
    this.p1=[coord[0],coord[1]]
  }

  onDragging(coord, event) {
    this.p2=[coord[0],coord[1]]

    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height,
    )
    this.contextDraft.strokeStyle=setCustom.getColor();
    this.contextDraft.fillStyle=setCustom.getColor();
    this.contextDraft.lineWidth=setCustom.getPx();
    this.contextDraft.lineCap = "round";
    this.contextDraft.beginPath()
    this.contextDraft.moveTo(this.p1[0],this.p1[1])
    this.contextDraft.lineTo(this.p1[0],this.p2[1])
    this.contextDraft.lineTo(this.p2[0],this.p2[1])
    this.contextDraft.lineTo(this.p2[0],this.p1[1])
    this.contextDraft.lineTo(this.p1[0],this.p1[1])
    this.contextDraft.lineTo(this.p1[0],this.p2[1])
    switch(setCustom.getOption()){
      case"Fill":this.contextDraft.fill();break;
      case"Stroke":this.contextDraft.stroke();break;
    }
    
    
  }
  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height,
    )
    this.contextReal.strokeStyle=setCustom.getColor();
    this.contextReal.lineWidth=setCustom.getPx();
    this.contextReal.fillStyle=setCustom.getColor();
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.p1[0],this.p1[1])
    this.contextReal.lineTo(this.p1[0],this.p2[1])
    this.contextReal.lineTo(this.p2[0],this.p2[1])
    this.contextReal.lineTo(this.p2[0],this.p1[1])
    this.contextReal.lineTo(this.p1[0],this.p1[1])
    this.contextReal.lineTo(this.p1[0],this.p2[1])
    switch(setCustom.getOption()){
      case"Fill":this.contextReal.fill();break;
      case"Stroke":this.contextReal.stroke();break;
    }
    save()
  }
  onMouseLeave() {}
  onMouseEnter() {}

  // onMouseDown(coord, event) {
  //   this.contextReal.fillStyle = setCustom.getColor();
  //   this.origX = coord[0];
  //   this.origY = coord[1];
  // }

  // onDragging(coord, event) {
  //   // Manipulating the context draft
  //   this.contextDraft.fillStyle = setCustom.getColor();
  //   // Allows you to actually draw out your squares
  //   this.contextDraft.clearRect(
  //     0,
  //     0,
  //     canvasDraft.width,
  //     canvasDraft.height
  //   );
  //   // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
  //   this.contextDraft.fillRect(
  //     this.origX,
  //     this.origY,
  //     coord[0] - this.origX,
  //     coord[1] - this.origY
  //   );
  // }

  // onMouseMove() {}

  // // Committing the element to the canvas
  // onMouseUp(coord) {
  //   // Clearing the rectangle first
  //   this.contextDraft.clearRect(
  //     0,
  //     0,
  //     canvasDraft.width,
  //     canvasDraft.height
  //   );
  //   // Commit that drawing to context real
  //   // Without this commit, it won't actually draw
  //   this.contextReal.fillRect(
  //     this.origX,
  //     this.origY,
  //     coord[0] - this.origX,
  //     coord[1] - this.origY
  //   );
  // }
  // onMouseLeave() {}
  // onMouseEnter() {}
}
