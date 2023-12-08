class DrawingRandomTriangle extends PaintFunction {

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    setCustom.reset();
    setCustom.setOption();
    setCustom.addOption("Fill");
    setCustom.addOption("Stroke");
    this.p1 = [];
    this.p2 = [];
    this.p3 = [];
  }

  onMouseDown(coord, event) {
    
    this.color = "#"+Math.floor(Math.random() * 0x1000000).toString(16)
    this.linewidth=Math.floor(Math.random() * 10)

    this.randomInt1=Math.floor(Math.random() * 200) + 20
    this.randomInt2=Math.floor(Math.random() * 200) + 20
    this.randomInt3=Math.floor(Math.random() * 200) + 20
    this.randomInt4=Math.floor(Math.random() * 200) + 20
    if(Math.random()>0.5){
      this.randomInt2=Math.floor(Math.random() * 200) + 20
    }else{
      this.randomInt2=(Math.floor(Math.random() * 200) + 20)*-1
    }
    if(Math.random()>0.5){
      this.randomInt4=Math.floor(Math.random() * 200) + 20
    }else{
      this.randomInt4=(Math.floor(Math.random() * 200) + 20)*-1
    }
    if(Math.random()>0.5){
      this.randomInt1=Math.floor(Math.random() * 200) + 20
    }else{
      this.randomInt1=(Math.floor(Math.random() * 200) + 20)*-1
    }
    if(Math.random()>0.5){
      this.randomInt3=Math.floor(Math.random() * 200) + 20
    }else{
      this.randomInt3=(Math.floor(Math.random() * 200) + 20)*-1
    }
    this.p1=[coord[0],coord[1]]
    this.p2=[coord[0]+this.randomInt1,coord[1]+this.randomInt2]
    this.p3=[coord[0]+this.randomInt3,coord[1]+this.randomInt4]
    
    this.contextDraft.fillStyle = this.color
    this.contextDraft.strokeStyle = this.color
    this.contextDraft.lineWidth = this.linewidth
    this.contextDraft.lineCap = "round"
    this.contextDraft.beginPath();
    

    this.contextDraft.moveTo(this.p1[0],this.p1[1])
    this.contextDraft.lineTo(this.p2[0],this.p2[1])
    this.contextDraft.lineTo(this.p3[0],this.p3[1])
    this.contextDraft.lineTo(this.p1[0],this.p1[1])

    switch(setCustom.getOption()){
      case"Fill":this.contextDraft.fill();break;
      case"Stroke":this.contextDraft.stroke();break;
    }
    
  }

  onDragging(coord, event) {
    this.p1=[coord[0],coord[1]]
    this.p2=[coord[0]+this.randomInt1,coord[1]+this.randomInt2]
    this.p3=[coord[0]+this.randomInt3,coord[1]+this.randomInt4]

    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height,
    )

    this.contextDraft.beginPath();
    
    this.contextDraft.moveTo(this.p1[0],this.p1[1])
    this.contextDraft.lineTo(this.p2[0],this.p2[1])
    this.contextDraft.lineTo(this.p3[0],this.p3[1])
    this.contextDraft.lineTo(this.p1[0],this.p1[1])

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

    this.contextReal.beginPath();

    this.contextReal.fillStyle = this.color
    this.contextReal.strokeStyle = this.color
    this.contextReal.lineWidth = this.linewidth
    this.contextReal.lineCap = "round"

    this.contextReal.moveTo(this.p1[0],this.p1[1])
    this.contextReal.lineTo(this.p2[0],this.p2[1])
    this.contextReal.lineTo(this.p3[0],this.p3[1])
    this.contextReal.lineTo(this.p1[0],this.p1[1])

    switch(setCustom.getOption()){
      case"Fill":this.contextReal.fill();break;
      case"Stroke":this.contextReal.stroke();break;
    }
    save()
  }
  onMouseLeave() {}
  onMouseEnter() {}

}