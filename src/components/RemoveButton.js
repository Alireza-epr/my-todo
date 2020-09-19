import React, { Component } from 'react'
import todoStore from '../stores/TodoStore'

export default class Remove extends Component {
 
 render(){
	const {todo} = this.props;
	function remove(id) {
		todoStore.todos = todoStore.todos.filter((todo) => todo.id !== id)
	 }
	return(
		<button
		className="destroy"
		onClick={()=>remove(todo.id)}
		/>
	 )
 }
}