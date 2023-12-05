class DrawingBrush extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.brush=document.createElement('img')
        this.brush.src='./img/pen1.png'
        setCustom.reset()
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
      this.brush.sizes='cover'
      // Drawing the line here
      this.context.drawImage(this.brush,coord[0]-13,coord[1]-13)
    }

    // Clicking and removing your mouse
    onDragging(coord, event) {
      this.context.drawImage(this.brush,coord[0]-13,coord[1]-13)
    }
  
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
  }

  // class DrawingBrush extends PaintFunction {
  //   constructor(contextReal) {
  //     super();
  //     this.context = contextReal;
  //     this.strokeColor = "selectedColor"; // Default stroke color
  //   }
  
  //   // On mouse down, ensure that the pen has these features
  //   onMouseDown(coord, event) {
  //     // Fill in the color
  //     contextReal.strokeStyle = selectedColor;
      
  //     // Kind of line
  //     this.context.lineJoin = "round";
  //     // Width of line
  //     this.context.lineWidth = 50;
  //     // Drawing the line here
  //     this.context.beginPath();
  //     this.context.moveTo(coord[0], coord[1]);
  //   }
  //   // Clicking and removing your mouse
  //   onDragging(coord, event) {
  //     this.draw(coord[0], coord[1]);
  //   }
  
  //   onMouseMove() {}
  //   onMouseUp() {}
  //   onMouseLeave() {}
  //   onMouseEnter() {}
  
  //   draw(x, y) {
  //     //
  //     this.context.lineTo(x, y);
  //     // Draw the line onto the page
  //     this.context.stroke();
  
      
  //   }
  // }