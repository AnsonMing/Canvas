// Add this code inside the $(document).ready() function
$("#drawing-random").click(() => {
    var canvas = document.getElementById("canvas-real");
    canvas.style.backgroundColor = "#"+Math.floor(Math.random() * 0x1000000).toString(16);
    save()
}); 