// section title date
const dateHTML = document.querySelector("#date");

const date = new Date().toUTCString().slice(5, 16);
dateHTML.innerText = date;

// section input
const todoInput = document.querySelector(".todo-input");
const todoBTN = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// add local storage
const inputtodo = document.getElementById("input-todo");
const BTNtodo = document.getElementById("btn-todo")
BTNtodo.addEventListener("click", () => {
  localStorage.setItem("inputyourtodo" , inputtodo.value);
});

// eventlistenr
todoBTN.addEventListener("click", addTodo);
function addTodo(event) {
  event.preventDefault();

  if (todoInput.value === "") {
    alert("Input tidak boleh kosong");
  } else {
    // create div
    const todo = document.createElement("div");
    todo.classList.add("todo");

    //  Create checkbox button
    const checkBTN = document.createElement("input");
    checkBTN.type = "checkbox";
    checkBTN.classList.add("form-check-input");
    todo.appendChild(checkBTN);

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todo.append(newTodo);


    // create delete button
    const deleteBTN = document.createElement("button");
    deleteBTN.innerText = "X";
    deleteBTN.classList.add("delete-btn");
    todo.append(deleteBTN);

    // tambahkan todo ke todo list
    todoList.append(todo);

    // clear todo input
    todoInput.value = "";
    
  }
}



todoList.addEventListener("click", doneAndDelete);
function doneAndDelete(event) {
  const btn = event.target;
  const todo = btn.parentElement;

  if (btn.type === "checkbox") {
    todo.classList.add("line-through");
    // btn.remove();
  } else if (btn.innerText === "X") {
    todo.classList.add("remove");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
}
