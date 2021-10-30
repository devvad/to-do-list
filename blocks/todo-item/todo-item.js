class TodoItem {
	constructor(templateSelector) {
		this._template = document.querySelector(templateSelector);
	}

	create(name) {
		const item = this._template.content.querySelector(".todo-item").cloneNode(true);
		item.querySelector(".todo-item__input").textContent = name;
		item.querySelector(".todo-item__input").value = name;
		return item;
	}
}