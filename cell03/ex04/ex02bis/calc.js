function isPositiveInteger(value) {
    return /^[0-9]+$/.test(value.trim());
}

function calculate(left, operator, right) {
    if (operator === "+") {
        return left + right;
    }
    if (operator === "-") {
        return left - right;
    }
    if (operator === "*") {
        return left * right;
    }
    if (operator === "/") {
        return left / right;
    }
    return left % right;
}

$(document).ready(function () {
    $("#calc").submit(function (event) {
        event.preventDefault();

        var leftText = $("#left").val();
        var rightText = $("#right").val();
        var operator = $("#operator").val();

        if (!isPositiveInteger(leftText) || !isPositiveInteger(rightText)) {
            alert("Error :(");
            return;
        }

        var left = parseInt(leftText, 10);
        var right = parseInt(rightText, 10);

        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It's over 9000!");
            return;
        }

        var result = calculate(left, operator, right);
        alert(result);
        console.log(result);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});
