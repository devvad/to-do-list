class TodoList {
	constructor(todoListSelector) {
		this._todoList = document.querySelector(todoListSelector);
	}

	add(item) {
		this._todoList.appendChild(item);
	}
}