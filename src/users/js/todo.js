
async function fetchTasks() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((tr) => {
      console.log(tr);
      let tasks = tr;
      displayTasks(tasks);
    });
}
fetchTasks();

function displayTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${task.title}</td>
    <td class="options">  <i onclick= "deleteTask(this)" class="bi bi-trash"></i>
    <i onclick="updateTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="bi bi-pen"></i> </td> `;
    taskList.appendChild(tr);
  });
}

function addingTask() {
  let todoValue = document.getElementById("text");
  let taskList = document.getElementById("taskList");
  if (todoValue.value === "") {
    alert("Please enter your task!");
  } else {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${todoValue.value}</td>
      <td>
      <button onclick="deleteTask()" class="delete">Delete</button>
      </td>
      <td>
      <button onclick="updateTask()" class="delete">Edit</button>
  </td> `;
    taskList.appendChild(row);
  }

}
function deleteTask() {
  alert('Task has deleted Successfully')
 
}
  

function updateTask() {
  let updateEle = prompt("Enter your task here")
  alert(updateEle);
}

  
