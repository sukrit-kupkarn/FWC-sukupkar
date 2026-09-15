var colors = ["red", "green", "blue"];
var color = 0;
var size = 200;

function draw() {
    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[color]
    });
}

$(document).ready(function () {
    $("#balloon").click(function () {
        size = size + 10;
        if (size > 420) {
            size = 200;
        }
        color = (color + 1) % colors.length;
        draw();
    });

    $("#balloon").mouseleave(function () {
        size = size - 5;
        if (size < 200) {
            size = 200;
        }
        color = (color - 1 + colors.length) % colors.length;
        draw();
    });
});
