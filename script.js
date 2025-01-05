/* FUNCTIONS */

function createSketchpad(numSquares) {
    const sketchpadDiv = document.createElement("div");
    sketchpadDiv.classList.add("sketch-pad");
    document.querySelector(".sketch-pad-container").appendChild(sketchpadDiv);
    const amount = Math.pow(numSquares, 2);
    const width = 384 / numSquares;

    for (i = 0; i < amount; i++) {
        let newPixel = document.createElement("div");
        newPixel.style.setProperty("width", `${width}px`);
        newPixel.classList.add("new-box");
        newPixel.addEventListener("mouseover", draw);
        sketchpadDiv.appendChild(newPixel);
    }
}

function changeSize(event) {
    let container = document.querySelector(".sketch-pad-container");
    let sketchpadDiv = document.querySelector(".sketch-pad");
    let sizeDisplay = document.querySelector("#size-display");
    let newSize = event.target.value;
    sizeDisplay.textContent = (newSize + " x " + newSize);
    container.removeChild(sketchpadDiv);
    createSketchpad(newSize);
}

function changeColour(event) {
    let colourDisplay = document.querySelector("#colour-display");
    let newColour = event.target.value;
    colourDisplay.textContent = newColour;
    return newColour;
}

function draw(event) {
    let pixel = event.target;
    let newColour = document.querySelector("#colour-picker").value;
    pixel.style.backgroundColor = newColour;
}

/* PROGRAM */

/* Base Settings */
let baseSize = 16;
let colour = "#000000";


/* Elements */
let sizePicker = document.querySelector("#size-picker");
let colourPicker = document.querySelector("#colour-picker");


sizePicker.addEventListener("change", changeSize);
colour = colourPicker.addEventListener("change", changeColour);

createSketchpad(baseSize);