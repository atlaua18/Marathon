const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"];

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("sq");

    square.addEventListener("mouseover", () => 
    setColor(square));

    square.addEventListener("mouseleave", () => 
    removeColor(square));

    board.append(square);
};

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    element.style.cursor = `url("./src/kitty64px.png"), auto`
};

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
};