// selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventlisnter('click', addTodo);

//Functions
function addTodo(event){
    //Prevent form from 
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerTest = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document. createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK trash Button
    const trashButton = document. createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    
}