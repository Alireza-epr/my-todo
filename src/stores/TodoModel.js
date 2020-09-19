import { observable, action } from 'mobx'
import todoStore from './TodoStore'

export default class TodoModel {
	store
	id
	@observable title
	@observable completed
	
	constructor(store, title, completed, id) {
		this.title = title
		this.completed = completed
		this.id = id
		this.store = store

	}

	@action
	toggle() {
		this.completed = !this.completed

		var comp = [];
		var notComp = [];
		todoStore.todos.map((todo) => {
			if (todo.completed) {
				comp.push(todo)
			} else {
				notComp.push(todo)
			}
		})
		// console.log(`all is : ` + todoStore.todos.length +' Completed todo : '+ comp.length +' & not completed todo : '+ notComp.length)
		}
}