import {
	saveToLocalStorage,
	getFromLocalStorage,
} from './localstorage-helpers.js'
import { createElement } from './dom-helpers.js'

const inputField = document.querySelector('[data-text-field]')
const addTodoBtn = document.querySelector('[data-add-todo-btn]')
const todoContainer = document.querySelector('[data-todo-container]')

const todoList = getFromLocalStorage('todos')

addTodoBtn.addEventListener('click', () => {
	if (inputField.value.trim()) {
		todoList.push(inputField.value)
		inputField.value = ''

		saveToLocalStorage('todos', todoList)
		render()
	}
})

const removeTodo = (index) => {
	todoList.splice(index, 1)
	saveToLocalStorage('todos', todoList)
	render()
}

const render = () => {
	todoContainer.innerHTML = ''

	todoList.forEach((item, index) => {
		const todoItem = createElement('li', item)
		const removeBtn = createElement('button', '❌')

		removeBtn.addEventListener('click', () => removeTodo(index))

		todoItem.append(removeBtn)
		todoContainer.append(todoItem)
	})
}

render()
