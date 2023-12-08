class DrawingCircle extends PaintFunction{
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    setCustom.reset()
    setCustom.setPx()
    setCustom.setColor()
    setCustom.setOption()
    setCustom.addOption("Fill")
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
      canvasDraft.height
    );

    this.radius = Math.sqrt(
              Math.pow(this.p2[0] - this.p1[0], 2) + Math.pow(this.p2[1] - this.p1[1], 2)
            );
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.p1[0], this.p2[1], this.radius, 0, 2 * Math.PI);
    this.contextDraft.fillStyle = setCustom.getColor();
    this.contextDraft.strokeStyle = setCustom.getColor();
    this.contextDraft.lineWidth = setCustom.getPx();

    if(setCustom.getOption()=='Fill'){
      this.contextDraft.fill();
    }else{
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}

  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    this.radius = Math.sqrt(
      Math.pow(this.p2[0] - this.p1[0], 2) + Math.pow(this.p2[1] - this.p1[1], 2)
    );
    
    this.contextReal.fillStyle = setCustom.getColor();
    this.contextReal.strokeStyle = setCustom.getColor();
    this.contextReal.lineWidth = setCustom.getPx();

    this.contextReal.beginPath();
    this.contextReal.arc(this.p1[0], this.p2[1], this.radius, 0, 2 * Math.PI);
    if(setCustom.getOption()=='Fill'){
      this.contextReal.fill();
    }else{
      this.contextReal.stroke();
    }
    save()
  }

  onMouseLeave() {}
  onMouseEnter() {}
}


// document.getElementById("drawing-circle").addEventListener("click", function() {
//     const circleDrawing = DrawingCircle(contextReal, contextDraft);
//     canvas.addEventListener("mousedown", circleDrawing.onMouseDown);
//     canvas.addEventListener("mousemove", circleDrawing.onMouseMove);
//     canvas.addEventListener("mouseup", circleDrawing.onMouseUp);
//   });
  
  
//   function DrawingCircle(contextReal, contextDraft) {
//     let startX, startY;
//     let fillColor = "#000000"; // Set default fill color to black
  
//     function onMouseDown(coord, event) {
//       startX = coord[0];
//       startY = coord[1];
//     }
  
//     function onMouseMove(coord, event) {
//       if (!startX || !startY) return;
  
//       let radius = Math.sqrt(
//         Math.pow(coord[0] - startX, 2) + Math.pow(coord[1] - startY, 2)
//       );
  
//       contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//       contextDraft.beginPath();
//       contextDraft.arc(startX, startY, radius, 0, 2 * Math.PI);
//       contextDraft.strokeStyle = "black" ;
//       contextDraft.lineWidth = 2;
//       contextDraft.stroke();
  
//       if (fillColor) {
//         contextDraft.fillStyle = setCustom.getColor();
//         contextDraft.fill();
//       }
//     }
  
//     function onMouseUp(coord, event) {
//       if (!startX || !startY) return;
  
//       let radius = Math.sqrt(
//         Math.pow(coord[0] - startX, 2) + Math.pow(coord[1] - startY, 2)
//       );
  
//       contextReal.beginPath();
//       contextReal.arc(startX, startY, radius, 0, 2 * Math.PI);
//       contextReal.strokeStyle = "black";
//       contextReal.lineWidth = 2;
//       contextReal.stroke();
  
//       if (fillColor) {
//         contextReal.fillStyle = setCustom.getColor();
//         contextReal.fill();
//       }
  
//       startX = null;
//       startY = null;
//     }
  
//     return {
//       onMouseDown,
//       onMouseMove,
//       onMouseUp,
//     };
//   }
