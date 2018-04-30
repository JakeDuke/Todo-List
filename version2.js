var todos = ['item 1', 'item 2', 'item 3'];

console.log(todos);

todos.push('new item');

todos[0] = 'updated item 1';

todos.splice(0,1);

function displayTodos() {
    console.log(todos);
}

function addTodo() {
    todos.push('new todo');
    displayTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}