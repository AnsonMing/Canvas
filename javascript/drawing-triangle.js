class DrawingTriangle extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        setCustom.reset()
        setCustom.setPx()
        setCustom.setColor()
        this.p1=[]
        this.p2=[]
        this.p3=[]
        this.isFirstLine=true;
      }
    
    

    onMouseDown(coord, event) {
        if(this.isFirstLine==true){
            this.p1=[coord[0],coord[1]];
            this.e=event;
            this.isFirstLine=false;
        }else{
            this.p3=[coord[0],coord[1]];
            this.contextDraft.clearRect(
                0,
                0,
                canvasDraft.width,
                canvasDraft.height
              );
            
            
            this.contextReal.beginPath()
            this.contextReal.moveTo(this.p2[0],this.p2[1]);
            this.contextReal.lineTo(this.p3[0],this.p3[1]);
            this.contextReal.strokeStyle=setCustom.getColor();
            this.contextReal.lineWidth=setCustom.getPx();
            this.contextReal.lineCap = "round";
            this.contextReal.stroke();

            this.contextReal.beginPath()
            this.contextReal.moveTo(this.p1[0],this.p1[1]);
            this.contextReal.lineTo(this.p3[0],this.p3[1]);
            this.contextReal.strokeStyle=setCustom.getColor();
            this.contextReal.lineWidth=setCustom.getPx();
            this.contextReal.lineCap = "round";
            this.contextReal.stroke();

            this.isFirstLine=true;
        }
        
    }
    onDragging(coord, event) {
        if(this.isFirstLine==false){
            this.contextDraft.clearRect(
                0,
                0,
                canvasDraft.width,
                canvasDraft.height,
            )
            this.contextDraft.beginPath()
            this.contextDraft.moveTo(this.p1[0],this.p1[1])
            this.contextDraft.lineTo(coord[0],coord[1])
            this.contextDraft.strokeStyle=setCustom.getColor();
            this.contextDraft.lineWidth=setCustom.getPx();
            this.contextDraft.lineCap = "round";
            this.contextDraft.stroke()
        }else{

        }
        
    }
    onMouseMove(coord, event) {
        if(this.isFirstLine==false){
            this.contextDraft.beginPath()
            this.contextDraft.clearRect(
                0,
                0,
                canvasDraft.width,
                canvasDraft.height,
            )
            this.contextDraft.moveTo(this.p2[0],this.p2[1])
            this.contextDraft.lineTo(coord[0],coord[1])
            this.contextDraft.strokeStyle=setCustom.getColor()
            this.contextDraft.lineWidth=setCustom.getPx();
            this.contextDraft.lineCap = "round";
            this.contextDraft.stroke()
        }
    }
    onMouseUp(coord, event) {
        if(this.isFirstLine==false){
            this.contextDraft.clearRect(
                0,
                0,
                canvasDraft.width,
                canvasDraft.height
              );
            this.contextReal.beginPath();
            this.p2=[coord[0],coord[1]]
            this.contextReal.moveTo(this.p1[0],this.p1[1])
            this.contextReal.lineTo(this.p2[0],this.p2[1])
            this.contextReal.strokeStyle=setCustom.getColor()
            this.contextReal.lineWidth=setCustom.getPx();
            this.contextReal.lineCap = "round";
            this.contextReal.stroke()
        }else{

        }
        
    }
    onMouseLeave() {}
    onMouseEnter() {}
}