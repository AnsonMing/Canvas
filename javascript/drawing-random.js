// Add this code inside the $(document).ready() function
$("#drawing-random").click(() => {
    var canvas = document.getElementById("canvas-real");
    var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    canvas.style.backgroundColor = randomColor;
});