
const todoList=document.getElementById('todo-list');
const input=document.getElementById('todo-input');
const addBtn=document.getElementById('add-btn');

addBtn.addEventListener('click', () =>
{
 const task=input.value.trim();
 if(task === '')
 {
    alert("Please enter any task");
    return;
 }


const li=document.createElement('li');
li.innerHTML = `
<span>${task}</span>
<button class="delete-btn">Delete</button>
`;


li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
});

todoList.appendChild(li);

input.value = '';


});