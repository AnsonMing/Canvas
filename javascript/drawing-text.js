class DrawingText extends PaintFunction{

    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        setCustom.reset()
        setCustom.setText()
        setCustom.setPx()
        setCustom.setColor()
      }

    onMouseDown(coord, event) {
      this.contextDraft.font=setCustom.getPx()+"px Arial"
      this.contextDraft.fillStyle=setCustom.getColor()
      this.contextDraft.fillText(setCustom.getText(),coord[0],coord[1])
    }
    onDragging(coord, event) {
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height,
      )
      this.contextDraft.font=setCustom.getPx()+"px Arial"
      this.contextDraft.fillStyle=setCustom.getColor()
      this.contextDraft.fillText(setCustom.getText(),coord[0],coord[1])
    }
    onMouseMove() {}
    onMouseUp(coord, event) {
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height,
      )
      this.contextReal.font=setCustom.getPx()+"px Arial"
      this.contextReal.fillStyle=setCustom.getColor()
      this.contextReal.fillText(setCustom.getText(),coord[0],coord[1])
      }
    
    onMouseLeave() {}
    onMouseEnter() {}
}