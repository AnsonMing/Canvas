$("#drawing-sketch").click(() => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const image = new Image();
      image.onload = function () {
        const canvas = document.getElementById("canvas-real");
        const context = canvas.getContext("2d");

        // Calculate the dimensions to fit the image within the canvas
        const maxWidth = canvas.width;
        const maxHeight = canvas.height;
        const imageAspectRatio = image.width / image.height;
        const canvasAspectRatio = maxWidth / maxHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imageAspectRatio > canvasAspectRatio) {
          drawWidth = maxWidth;
          drawHeight = maxWidth / imageAspectRatio;
          offsetX = 0;
          offsetY = (maxHeight - drawHeight) / 2;
        } else {
          drawHeight = maxHeight;
          drawWidth = maxHeight * imageAspectRatio;
          offsetY = 0;
          offsetX = (maxWidth - drawWidth) / 2;
        }

        // Clear the canvas
        canvas.width = maxWidth;
        canvas.height = maxHeight;
        context.clearRect(0, 0, maxWidth, maxHeight);

        // Draw the resized image
        context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

        // Apply black and white sketch effect using CamanJS
        Caman("#canvas-real", function () {
          this.greyscale(); // Apply grayscale effect
          this.contrast(50);
          this.render();
        });
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
  input.click();
});

