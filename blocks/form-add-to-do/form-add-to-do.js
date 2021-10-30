class FormAddToDo {
	constructor(formSelector, onAddItem) {
		this._form = document.querySelector(formSelector);
		this._onAddItem = onAddItem;
	}

	addEventListeners() {
		this._form.addEventListener("submit", (event) => {
			const value = this._form.querySelector("input").value;
			this._onAddItem(value);
			this._form.reset();
			event.preventDefault();
		})
	}
}