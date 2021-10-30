const todoList = new TodoList(".todo-list");

const addForm = new FormAddToDo(".form-add-to-do", (value) => {
	const item = new TodoItem("#todo-item");
	const itemElement = item.create(value);
	todoList.add(itemElement);
});
addForm.addEventListeners();