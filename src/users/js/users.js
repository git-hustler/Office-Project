let form = document.getElementById("form");
let userInput = document.getElementById('input1');
let compName = document.getElementById('input2');
let email = document.getElementById('input3');
let msg = document.getElementById('msg');
let tasks = document.getElementById('user-data');
let add = document.getElementById('imp');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidate();
});


let formValidate = () => {
    if (userInput.value === "") {
        msg.innerHTML = "Please fill out the field";
    } else {
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal")
        add.click();
        (() => {
            add.setAttribute("data-bs-dismiss", "")
        })()
    }
}
let data = {}
 
let acceptData = () => {
    data["text"] = userInput.value;
    data["company"] = compName.value;
    data["email"] = email.value;
    createTask();
}

let createTask = () => {
 
    tasks.innerHTML +=
        ` <tr>
        <td>${data.text}</td>
        <td>${data.company}</td>
        <td>${data.email}</td>
  <td class="options">  <i onclick= "deleteTask(this)" class="bi bi-trash"></i>
  <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="bi bi-pen"></i> </td>

</tr>`
    reset();
}

let reset = () => {
    userInput.value = "";
    compName.value = "";
    email.value="";
}

let deleteTask=(e) => {
    e.parentElement.parentElement.remove();
};
let editTask=(e) => {
    let selected = e.parentElement.parentElement;
    userInput.value = selected.cells[0].innerHTML;
    compName.value = selected.cells[1].innerHTML;
    email.value=selected.cells[2].innerHTML;
    selected.remove();
};
