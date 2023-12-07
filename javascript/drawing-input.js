$("#drawing-input").click(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function () {
        const image = new Image();
        image.onload = function () {
          const canvasWidth = contextReal.canvas.width;
          const canvasHeight = contextReal.canvas.height;
          const imageAspectRatio = image.width / image.height;
          const canvasAspectRatio = canvasWidth / canvasHeight;
          let drawWidth, drawHeight, offsetX, offsetY;
  
          if (imageAspectRatio > canvasAspectRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imageAspectRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
          } else {
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imageAspectRatio;
            offsetY = 0;
            offsetX = (canvasWidth - drawWidth) / 2;
          }
  
          contextReal.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
    input.click();
  });