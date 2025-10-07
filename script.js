alert("This site works best on PC and may not display well on mobile devices.");

function toggleTheme() {
    if (document.querySelector(".theme-button").innerText === "DARK") {
        document.body.classList.add("dark-theme");
        document.querySelector(".theme-button").innerText = "LIGHT";
    } else {
        document.body.classList.remove("dark-theme");
        document.querySelector(".theme-button").innerText = "DARK";
    }
}

const todosArray = JSON.parse(localStorage.getItem("Todos Array")) || [];
let todos;
document.querySelector(".todo-list").innerHTML = localStorage.getItem("Todos") || "";

function add() {
    if (document.querySelector(".todo-text-field").value) {
        todosArray.push({id : 0, todo : document.querySelector(".todo-text-field").value, isDone : false});

        document.querySelector(".todo-text-field").value = "";

        todos = "";
        for(let i=0; i<todosArray.length; i++) {
            todosArray[i].id = i;
            if (todosArray[i].isDone) {
                todos += `<span class="list-span"><input type="checkbox" checked id="${todosArray[i].id}" onclick="isDone(event)"><p>${todosArray[i].todo}</p><button id="${todosArray[i].id}" onclick="del(event)">Delete</button></span>`;
            } else {
                todos += `<span class="list-span"><input type="checkbox" id="${todosArray[i].id}" onclick="isDone(event)"><p>${todosArray[i].todo}</p><button id="${todosArray[i].id}" onclick="del(event)">Delete</button></span>`;
            }
        }
        document.querySelector(".todo-list").innerHTML = todos;
        localStorage.setItem("Todos", todos);
        localStorage.setItem("Todos Array", JSON.stringify(todosArray));
    }
}

function isDone(event) {
    if (event.target.checked) {
        todosArray[event.target.id].isDone = true;
    } else {
        todosArray[event.target.id].isDone = false;
    }

    todos = "";
    for(let i=0; i<todosArray.length; i++) {
        todosArray[i].id = i;
        if (todosArray[i].isDone) {
            todos += `<span class="list-span"><input type="checkbox" checked id="${todosArray[i].id}" onclick="isDone(event)"><p>${todosArray[i].todo}</p><button id="${todosArray[i].id}" onclick="del(event)">Delete</button></span>`;
        } else {
            todos += `<span class="list-span"><input type="checkbox" id="${todosArray[i].id}" onclick="isDone(event)"><p>${todosArray[i].todo}</p><button id="${todosArray[i].id}" onclick="del(event)">Delete</button></span>`;
        }
    }
    document.querySelector(".todo-list").innerHTML = todos;
    localStorage.setItem("Todos", todos);
    localStorage.setItem("Todos Array", JSON.stringify(todosArray));
}

function del(event) {
    todosArray.splice(event.target.id, 1);

    todos = "";
    for(let i=0; i<todosArray.length; i++) {
        todosArray[i].id = i;
        if (todosArray[i].isDone) {
            todos += `<span class="list-span"><input type="checkbox" checked id="${todosArray[i].id}" onclick="isDone(event)"><p>${todosArray[i].todo}</p><button id="${todosArray[i].id}" onclick="del(event)">Delete</button></span>`;
        } else {
            todos += `<span class="list-span"><input type="checkbox" id="${todosArray[i].id}" onclick="isDone(event)"><p>${todosArray[i].todo}</p><button id="${todosArray[i].id}" onclick="del(event)">Delete</button></span>`;
        }
    }
    document.querySelector(".todo-list").innerHTML = todos;
    localStorage.setItem("Todos", todos);
    localStorage.setItem("Todos Array", JSON.stringify(todosArray));
}