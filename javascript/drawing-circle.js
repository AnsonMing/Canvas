document.getElementById("drawing-circle").addEventListener("click", function() {
    const circleDrawing = DrawingCircle(contextReal, contextDraft);
    canvas.addEventListener("mousedown", circleDrawing.onMouseDown);
    canvas.addEventListener("mousemove", circleDrawing.onMouseMove);
    canvas.addEventListener("mouseup", circleDrawing.onMouseUp);
  });
  

  
  function DrawingCircle(contextReal, contextDraft) {
    let startX, startY;
    let fillColor = "#000000"; // Set default fill color to black
  
    function onMouseDown(coord, event) {
      startX = coord[0];
      startY = coord[1];
    }
  
    function onMouseMove(coord, event) {
      if (!startX || !startY) return;
  
      let radius = Math.sqrt(
        Math.pow(coord[0] - startX, 2) + Math.pow(coord[1] - startY, 2)
      );
  
      contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      contextDraft.beginPath();
      contextDraft.arc(startX, startY, radius, 0, 2 * Math.PI);
      contextDraft.strokeStyle = "black";
      contextDraft.lineWidth = 2;
      contextDraft.stroke();
  
      if (fillColor) {
        contextDraft.fillStyle = fillColor;
        contextDraft.fill();
      }
    }
  
    function onMouseUp(coord, event) {
      if (!startX || !startY) return;
  
      let radius = Math.sqrt(
        Math.pow(coord[0] - startX, 2) + Math.pow(coord[1] - startY, 2)
      );
  
      contextReal.beginPath();
      contextReal.arc(startX, startY, radius, 0, 2 * Math.PI);
      contextReal.strokeStyle = "black";
      contextReal.lineWidth = 2;
      contextReal.stroke();
  
      if (fillColor) {
        contextReal.fillStyle = fillColor;
        contextReal.fill();
      }
  
      startX = null;
      startY = null;
    }
  
    return {
      onMouseDown,
      onMouseMove,
      onMouseUp,
    };
  }
