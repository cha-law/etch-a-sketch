function createSketchpad(numSquares) {
    const sketchpadDiv = document.querySelector(".sketch-pad");
    const amount = Math.pow(numSquares, 2);
    const width = 384 / numSquares;

    for (i = 0; i < amount; i++) {
        let newPixel = document.createElement("div");
        newPixel.style.setProperty("width", `${width}px`);
        newPixel.classList.add("new-box");
        sketchpadDiv.appendChild(newPixel);
    }
}

createSketchpad(16);