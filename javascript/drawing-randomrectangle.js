class DrawingRandomRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    setCustom.reset()
    setCustom.setOption()
    setCustom.addOption("Fill")
    setCustom.addOption('Stroke')
  }

  onMouseDown(coord, event) {
    this.color = "#"+Math.floor(Math.random() * 0x1000000).toString(16)
    this.linewidth=Math.floor(Math.random() * 10)
    this.randomX = Math.floor(Math.random() * 200)+10
    this.randomY = Math.floor(Math.random() * 200)+10
    this.p1=[coord[0],coord[1]]
    this.p2=[coord[0]+this.randomX,coord[1]+this.randomY]

    this.contextDraft.beginPath();

    this.contextDraft.fillStyle = this.color
    this.contextDraft.strokeStyle = this.color
    this.contextDraft.lineWidth = this.linewidth
    
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

  onDragging(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height,
    )
    this.p1=[coord[0],coord[1]]
    this.p2=[coord[0]+this.randomX,coord[1]+this.randomY]

    this.contextDraft.beginPath();
    
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

  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height,
    )

    this.p1=[coord[0],coord[1]]
    this.p2=[coord[0]+this.randomX,coord[1]+this.randomY]

    this.contextReal.beginPath();

    this.contextReal.fillStyle = this.color
    this.contextReal.strokeStyle = this.color
    this.contextReal.lineWidth = this.linewidth
    
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

  onMouseMove() {
  }

  onMouseLeave() {
  }

  onMouseEnter() {
  }
}