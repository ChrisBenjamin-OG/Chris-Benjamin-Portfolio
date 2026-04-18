function applyChanges(){
    let greeting = document.getElementById("greeting");
    let message = document.getElementById("message");
    
    let userName = document.getElementById("nameInput").value;
    let userMessage = document.getElementById("messageInput").value;
    let color = document.getElementById("bgColor").value;

    greeting.innerHTML = "Hello " + userName + "!";
    message.innerHTML = userMessage;
    document.body.style.backgroundColor = color;

}

function addTask() {
    let todoList = document.getElementById("todo-list");
    let userTask = document.getElementById("addTodo").value;
    let newTask = document.createElement("li");
    let newBtn = document.createElement("button");

    newBtn.textContent = userTask;
    newBtn.setAttribute("onclick","completeTask(event)");
    newTask.appendChild(newBtn);
    todoList.appendChild(newTask);

}

function completeTask(event) {
    let list = document.querySelector('ol');

    event.target.parentElement.remove();
    alert("Task completed and removed");

    list.style.display = 'none';
    list.offsetHeight;
    list.style.display = 'block';
}
