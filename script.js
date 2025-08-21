let newTask = document.querySelector(".todo-input");
let add = document.querySelector(".todo-add-btn");
let list = document.querySelector(".todo-list")

add.addEventListener('click', () => {
    let task = newTask.value.trim();
    if (task == "") {
        return;
    };
    let addli = document.createElement("li");
    let addspan = document.createElement("span");
    let checkbox = document.createElement("input");
    let deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";
    addspan.textContent = newTask.value;
    deleteBtn.textContent = "x";

    list.appendChild(addli);
    addli.appendChild(checkbox);
    addli.appendChild(addspan);
    addli.appendChild(deleteBtn);
    newTask.value = "";
});
newTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add.click(); 
  }
});


list.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
if (event.target.type === "checkbox") {
  event.target.nextSibling.classList.toggle("completed");
}

});