/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let mouseCurrent =[]

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  mouseCurrent=[e.offsetX,e.offsetY]
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }else{
    currentFunction.onMouseMove([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

// for testing
function print(text=''){
  console.log("testing | "+text)
}

// for custom setting

let customGroup=document.getElementById('customBtnGroup')

let setCustom={
  reset(){
    customGroup.innerHTML=""
    console.log("reset")
    return true
  },
  setColor(){
    let colorBtn=document.createElement('input')
    colorBtn.type='color'
    colorBtn.classList.add('col')
    colorBtn.classList.add('form-control')
    colorBtn.classList.add('form-control-color')
    colorBtn.id='setColor'
    colorBtn.value='#563d7c'
    customGroup.appendChild(colorBtn)
    return true
  },
  getColor(){
    return document.getElementById('setColor').value
  },
  setOption(){
    let optionBtn=document.createElement('select')
    optionBtn.classList.add('col-12')
    optionBtn.classList.add('form-select')
    optionBtn.classList.add('text-white')
    optionBtn.setAttribute('aria-label','.form-select example')
    optionBtn.id="setOption"
    optionBtn.value=''

    customGroup.appendChild(optionBtn)
    return true
  },
  addOption(valuetext="empty"){
    let option=document.createElement('option')
    option.value=valuetext
    option.innerHTML=valuetext
    option.classList.add('text-dark')
    document.getElementById('setOption').appendChild(option)
    return true
  },
  getOption(){
    return document.getElementById('setOption').value
  },
  setPx(){
    let pxBtn=document.createElement('input')
    pxBtn.classList.add('form-control')
    pxBtn.classList.add('col-6')
    pxBtn.type='number'
    pxBtn.id='setPx'
    pxBtn.min=1
    pxBtn.max=1000
    pxBtn.placeholder='Px'
    pxBtn.value=''
    customGroup.appendChild(pxBtn)
    return true
  },
  getPx(){
    return document.getElementById('setPx').value
  },
  setText(){
    let textBtn=document.createElement('input')
    textBtn.classList.add('form-control')
    textBtn.classList.add('col-6')
    textBtn.type='text'
    textBtn.id='setText'
    textBtn.placeholder='text'
    textBtn.value=''
    customGroup.appendChild(textBtn)
    return true
  },
  getText(){
    return document.getElementById('setText').value
  },
};
