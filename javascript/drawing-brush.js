class DrawingBrush extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.brush=document.createElement('img')
        this.brush.src='./img/pen1.png'
        setCustom.reset()
        setCustom.setOption()
        setCustom.addOption("S")
        setCustom.addOption("M")
        setCustom.addOption("L")
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
      save()
      switch(setCustom.getOption()){
        case "S":this.max=15,this.min=10,this.cur=15,this.i=0;break;
        case "M":this.max=20,this.min=13,this.cur=20,this.i=0;break;
        case "L":this.max=25,this.min=15,this.cur=25,this.i=0;break;
      }
      this.brush.sizes='cover'
      // Drawing the line here
      this.context.drawImage(this.brush,coord[0]-13,coord[1]-13,this.cur,this.cur)
    }

    // Clicking and removing your mouse
    onDragging(coord, event) {
      if(this.cur>this.min&&this.i%6==0){
        this.cur--;
      }
      this.i++
      this.context.drawImage(this.brush,coord[0]-13,coord[1]-13,this.cur,this.cur)
    }
  
    onMouseMove() {}
    onMouseUp(coord, event) {
      
    }
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