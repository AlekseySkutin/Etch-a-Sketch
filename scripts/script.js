const canvas = document.getElementById("canvas");

buildCanvas(64);


const btn = document.getElementById("set-grid-size");

btn.addEventListener("click", () => {
    const size = prompt("Enter the size of square grid");
    canvas.innerHTML = ``;
    buildCanvas(size);
});

let isDrawing = false;

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);


function buildCanvas(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        const side = 1.0 / size * 100;

        square.classList.add("square");
        square.style.width = `${side}%`
        square.addEventListener("mouseenter", (e) => {
            if (isDrawing) {
                e.target.classList.add("square-color");
                let opacity = parseFloat(e.target.style.opacity);
                if (Number.isNaN(opacity))
                    opacity = 0.1
                if (opacity <= 1)
                    opacity += 0.1;
                e.target.style.opacity = opacity;
            }
        });
        canvas.appendChild(square);
    }
}