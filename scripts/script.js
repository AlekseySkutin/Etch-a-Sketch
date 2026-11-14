const canvas = document.getElementById("canvas");

buildCanvas(64);


const btn = document.getElementById("set-grid-size");

btn.addEventListener("click", () => {
    const size = prompt("Enter the size of square grid");
    canvas.innerHTML = ``;
    buildCanvas(size);
});



function buildCanvas(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        const side = 1.0 / size * 100;

        square.classList.add("square");
        square.style.width = `${side}%`
        square.addEventListener("mouseenter", (e) => e.target.classList.add("square-color"));
        // square.addEventListener("mouseleave", (e) => e.target.classList.remove("square-color"));

        canvas.appendChild(square);
    }
}