const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragStart);

item.addEventListener("dragend", dragEnd);

for (const placeholder of placeholders) {
    placeholder.addEventListener("dragover", dragOver); // вызывается, когда над placeholder'ом, куда мы можем поместить
    placeholder.addEventListener("dragenter", dragEnter); // вызывается, когда заходим на территорию конкретного placeholder'а
    placeholder.addEventListener("dragleave", dragLeave); // вызывается, когда перетащили, но вышли оттуда
    placeholder.addEventListener("drop", dragDrop); // вызывается, когда отпустили
};

function dragStart(e) {
    //можно this //можно e.target - это лучше
    e.target.classList.add("hold");
    setTimeout(() => e.target.classList.add("hide"), 0);
    
};

function dragEnd(e) {
    e.target.className = "item"; // аналогичный результат e.target.classList.remove("hold", "hide");
};

function dragOver(e) {
    e.preventDefault();
    // console.log("over");
};
function dragEnter(e) {
    e.target.classList.add("hovered");
    console.log("enter");
};
function dragLeave(e) {
    e.target.classList.remove("hovered");
    // console.log("leave");
};
function dragDrop(e) {
    e.target.classList.remove("hovered");
    e.target.append(item);
    // console.log("drop");
};
