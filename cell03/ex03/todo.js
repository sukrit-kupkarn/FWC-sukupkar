var list = document.getElementById("ft_list");

function saveCookie() {
    var todos = [];
    var items = list.children;
    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }
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
    var item = document.createElement("div");
    item.textContent = text;
    item.onclick = function () {
        if (confirm("Remove this TO DO?\n\n" + text)) {
            list.removeChild(item);
            saveCookie();
        }
    };
    list.insertBefore(item, list.firstChild);
}

document.getElementById("new").onclick = function () {
    var text = prompt("What do you have to do?");
    if (text !== null && text.trim() !== "") {
        addTodo(text.trim());
        saveCookie();
    }
};

var saved = readCookie();
for (var i = saved.length - 1; i >= 0; i--) {
    addTodo(saved[i]);
}
