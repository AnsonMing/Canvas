// drawing-roller.js

class DrawingRoller extends PaintFunction{

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    setCustom.reset()
    this.p1=[]
    this.p2=[]
  }
  onMouseDown(coord, event) {
    this.p1=[coord[0],coord[1]]
    this.color = "#"+Math.floor(Math.random() * 0x1000000).toString(16)
    this.linewidth=Math.floor(Math.random() * 20)+12
  }
  onDragging(coord, event) {
    
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    this.p2=[coord[0],coord[1]]

    this.contextDraft.strokeStyle = this.color
    this.contextDraft.lineWidth = this.linewidth
    this.contextDraft.lineCap = "round";

    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.p1[0],this.p1[1])
    this.contextDraft.lineTo(this.p2[0],this.p2[1])
    this.contextDraft.stroke();
  }
  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    this.contextReal.strokeStyle = this.color
    this.contextReal.lineWidth = this.linewidth
    this.contextReal.lineCap = "round";
    
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.p1[0],this.p1[1])
    this.contextReal.lineTo(this.p2[0],this.p2[1])
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}

    // constructor(contextReal, contextDraft) {
    //   this.contextReal = contextReal;
    //   this.contextDraft = contextDraft;
    //   this.isDrawing = false;
    //   this.previousX = 0;
    //   this.previousY = 0;
    //   this.size = 20; // Default size
  
    //   this.contextReal.lineJoin = "round";
    //   this.contextDraft.lineJoin = "round";
    //   this.contextReal.lineCap = "round";
    //   this.contextDraft.lineCap = "round";
    // }
     
    // setSize(size) {
    //   this.size = size;
    //   this.contextReal.lineWidth = size;
    //   this.contextDraft.lineWidth = size;
    // }
  
    // onMouseDown(coord, event) {
    //   this.isDrawing = true;
    //   this.previousX = coord[0];
    //   this.previousY = coord[1];
    //   this.contextReal.strokeStyle = getRandomColor();
    //   this.contextDraft.strokeStyle = this.contextReal.strokeStyle;
    //   this.contextReal.lineWidth = this.size;
    //   this.contextDraft.lineWidth = this.size;
    //   this.contextReal.beginPath();
    //   this.contextDraft.beginPath();
    //   this.contextReal.moveTo(coord[0], coord[1]);
    //   this.contextDraft.moveTo(coord[0], coord[1]);
    // }
  
    // onMouseMove(coord, event) {
    //   if (!this.isDrawing) return;
    //   this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    //   this.contextDraft.lineTo(coord[0], coord[1]);
    //   this.contextDraft.stroke();
    // }
  
    // onMouseUp(coord, event) {
    //   if (!this.isDrawing) return;
    //   this.isDrawing = false;
    //   this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    //   this.contextReal.lineTo(coord[0], coord[1]);
    //   this.contextReal.stroke();
    //   this.contextReal.closePath();
    // }
  
    // onMouseLeave() {
    //   if (!this.isDrawing) return;
    //   this.isDrawing = false;
    //   this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    //   this.contextReal.closePath();
    // }
  }