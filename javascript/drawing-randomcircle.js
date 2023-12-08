class DrawingRandomCircle extends PaintFunction {
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
    this.radius=Math.random() * 100 + 20
    this.contextDraft.beginPath();
    this.contextDraft.fillStyle = this.color
    this.contextDraft.strokeStyle = this.color
    this.contextDraft.lineWidth = this.linewidth
    this.contextDraft.arc(coord[0], coord[1], this.radius, 0, 2 * Math.PI);
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
      canvasDraft.height
    );
    this.contextDraft.beginPath();
    this.contextDraft.arc(coord[0], coord[1], this.radius, 0, 2 * Math.PI);
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
      canvasDraft.height
    );
    this.contextReal.beginPath();
    this.contextReal.fillStyle = this.color
    this.contextReal.strokeStyle = this.color
    this.contextReal.lineWidth = this.linewidth
    this.contextReal.arc(coord[0], coord[1], this.radius, 0, 2 * Math.PI);
    switch(setCustom.getOption()){
      case"Fill":this.contextReal.fill();break;
      case"Stroke":this.contextReal.stroke();break;
    }
    save()
  }
  onMouseLeave() {}
  onMouseEnter() {}
  //   constructor(contextReal, contextDraft) {
  //     super();
  //     this.contextReal = contextReal;
  //     this.contextDraft = contextDraft;
  //     setCustom.reset();
  //     this.p1 = [];
  //     this.p2 = [];
  //   }
  
  //   onMouseDown(coord, event) {
  //     this.p1 = [coord[0], coord[1]];
  //     this.radius = Math.random() * 100 + 20; // Random radius between 10 and 60
  //     this.color = getRandomColor(); // Get a random color
  //   }
  
  //   onMouseUp(coord, event) {
  //     this.contextReal.fillStyle = this.color;
  //     this.contextReal.strokeStyle = this.color;
  //     this.contextReal.lineWidth = setCustom.getPx();
  
  //     this.contextReal.beginPath();
  //     this.contextReal.arc(this.p1[0], this.p1[1], this.radius, 0, 2 * Math.PI);
  //     if (setCustom.getOption() == 'Fill') {
  //       this.contextReal.fill();
  //     } else {
  //       this.contextReal.stroke();
  //     }
  //   }
  
  //   onDragging(coord, event) {
  //     // No need to implement anything for this method in the case of a random circle
  //   }
  
  //   onMouseMove() {}
  //   onMouseLeave() {}
  //   onMouseEnter() {}
  // }
  
  // // Function to get a random color
  // function getRandomColor() {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  }