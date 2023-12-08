class DrawingInput extends PaintFunction {

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;

    setCustom.reset();
    setCustom.setPx();

    this.input = document.createElement("input");
    this.input.type = "file";
    this.input.accept = "image/*";

    let img;

    this.input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function () {
        const image = document.createElement('img');
        image.src = reader.result;
        image.id='inputImg'
        image.onload=function(){
          let container=document.getElementById('canvas-container')
          container.appendChild(image)
          image.style.visibility='hidden'
        }
      };
      reader.readAsDataURL(file);
    })
    this.input.click();
    

  }

  onMouseDown(coord, event) {
    this.img=document.createElement('img')
    this.img.src=document.getElementById('inputImg').src
    
    this.heigth=Math.floor(setCustom.getPx()/(this.img.width/this.img.height))
    this.contextDraft.drawImage(this.img,coord[0]-(setCustom.getPx()/2),coord[1]-(setCustom.getPx()/2),setCustom.getPx(),this.heigth)
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextDraft.drawImage(this.img,coord[0]-(setCustom.getPx()/2),coord[1]-(setCustom.getPx()/2),setCustom.getPx(),this.heigth)
  }
  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    this.contextReal.drawImage(this.img,coord[0]-(setCustom.getPx()/2),coord[1]-(setCustom.getPx()/2),setCustom.getPx(),this.heigth)
    save()
  }
  onMouseLeave() {}
  onMouseEnter() {}
}

// $("#drawing-input").click(() => {
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/*";
//     input.addEventListener("change", (event) => {
//       const file = event.target.files[0];
//       const reader = new FileReader();
//       reader.onload = function () {
//         const image = new Image();
//         image.onload = function () {
//           const canvasWidth = contextReal.canvas.width;
//           const canvasHeight = contextReal.canvas.height;
//           const imageAspectRatio = image.width / image.height;
//           const canvasAspectRatio = canvasWidth / canvasHeight;
//           let drawWidth, drawHeight, offsetX, offsetY;
  
//           if (imageAspectRatio > canvasAspectRatio) {
//             drawWidth = canvasWidth;
//             drawHeight = canvasWidth / imageAspectRatio;
//             offsetX = 0;
//             offsetY = (canvasHeight - drawHeight) / 2;
//           } else {
//             drawHeight = canvasHeight;
//             drawWidth = canvasHeight * imageAspectRatio;
//             offsetY = 0;
//             offsetX = (canvasWidth - drawWidth) / 2;
//           }
  
//           contextReal.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
//         };
//         image.src = reader.result;
//       };
//       reader.readAsDataURL(file);
//     });
//     input.click();
//   });