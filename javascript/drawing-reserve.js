// undo & redo
doList={
  undo:[],
  redo:[]
}

function save(){
  doList.undo.push(document.getElementById("canvas-real").toDataURL())
  doList.redo=[]
}

function undo(){
  document.getElementById("canvas-real").getContext('2d').clearRect(0,0,980,720)
  doList.redo.push(document.getElementById("canvas-real").toDataURL())
  let canvasImg= new Image();
  canvasImg.src=doList.undo.pop()
  document.getElementById("canvas-real").getContext('2d').drawImage(canvasImg,0,0,980,720)
}

function redo(){
  document.getElementById("canvas-real").getContext('2d').clearRect(0,0,980,720)
  doList.undo.push(document.getElementById("canvas-real").toDataURL())
  let canvasImg= new Image();
  canvasImg.src=doList.redo.pop()
  canvasImg.onload=function(){document.getElementById("canvas-real").getContext('2d').drawImage(canvasImg,0,0)}
}