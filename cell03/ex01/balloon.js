var balloon = document.getElementById("balloon");
var colors = ["red", "green", "blue"];
var color = 0;
var size = 200;

function draw() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
}

balloon.onclick = function () {
    size = size + 10;
    if (size > 420) {
        size = 200;
    }
    color = (color + 1) % colors.length;
    draw();
};

balloon.onmouseleave = function () {
    size = size - 5;
    if (size < 200) {
        size = 200;
    }
    color = (color - 1 + colors.length) % colors.length;
    draw();
};
