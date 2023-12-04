class DrawingBrush extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.brush=document.createElement('img')
        this.brush.src='./img/pen1.png'
        setCustom.reset()
        setCustom.setOption()
        setCustom.addOption('S')
        setCustom.addOption('M')
        setCustom.addOption('L')
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
      // Drawing the line here
      this.context.beginPath();
      this.brush.lineJoin="round";
      this.context.moveTo(coord[0], coord[1]);
      switch(setCustom.getOption()){
        case 'S':
            this.brush.width='50%';
            this.brush.height='50%';
            this.context.lineWidth='13'
      }
      this.context.drawImage(this.brush,coord[0]-13,coord[1]-13)
    }
    // Clicking and removing your mouse
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);
    }
  
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      //
      this.context.lineTo(x, y);
      // Draw the line onto the page
      this.context.stroke();
  
      
    }
  }