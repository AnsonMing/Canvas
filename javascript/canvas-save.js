
drawingSave = document.querySelector("#save"),

drawingSave.addEventListener("click", () => {
    const link = document.createElement("a"); // creating <a> element
    link.download = `${Date.now()}.jpg`; // passing current date as link download value
    link.href = canvasReal.toDataURL(); // passing canvasData as link href value
    link.click(); // clicking link to download image
});
