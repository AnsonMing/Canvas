// undo & redo

undoli=new Array()
redoli=new Array()


function save(){
  undoli.push(canvasReal.toDataURL())
  redoli=[]
  console.log(undoli.length)
  console.log(redoli.length)
}

function undo(){
  console.log("undo")
  if(undoli.length!=0){
    
    redoli.push(canvasReal.toDataURL())
    

    let img= new Image();
    img.src=undoli.pop()
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    img.onload=()=>contextReal.drawImage(img,0,0,canvasReal.width,canvasReal.height)
    console.log(undoli.length)
    console.log(redoli.length)
  }else{
    console.log('not recall')
  }
}

function redo(){
  if (redoli.length!=0){
    
    undoli.push(canvasReal.toDataURL())
    
    
    let img= new Image();
    img.src=redoli.pop()
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    img.onload=contextReal.drawImage(img,0,0,canvasReal.width,canvasReal.height)
    console.log(undoli.length)
    console.log(redoli.length)
  }else{
    console.log('not recall')
  }
}