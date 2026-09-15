function saveCookie() {
    var todos = [];
    $("#ft_list").children().each(function () {
        todos.push($(this).text());
    });
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=604800; path=/";
}

function readCookie() {
    var parts = document.cookie.split("; ");
    for (var i = 0; i < parts.length; i++) {
        if (parts[i].indexOf("todos=") === 0) {
            return JSON.parse(decodeURIComponent(parts[i].substring(6)));
        }
    }
    return [];
}

function addTodo(text) {
    var item = $("<div>").text(text);
    item.click(function () {
        if (confirm("Remove this TO DO?\n\n" + text)) {
            item.remove();
            saveCookie();
        }
    });
    $("#ft_list").prepend(item);
}

$(document).ready(function () {
    $("#new").click(function () {
        var text = prompt("What do you have to do?");
        if (text !== null && text.trim() !== "") {
            addTodo(text.trim());
            saveCookie();
        }
    });

    var saved = readCookie();
    for (var i = saved.length - 1; i >= 0; i--) {
        addTodo(saved[i]);
    }
});
