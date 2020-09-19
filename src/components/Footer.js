import React, { Component } from 'react'

import TodoItem from './TodoItem'
import todoStore from '../stores/TodoStore'


import { observer } from 'mobx-react'

@observer
class Footer extends Component {
	state = {
		flag: 'All'
	}
	remove = () => {
		todoStore.todos = todoStore.todos.filter((todo) => todo.completed === false)
	}

	All = () => {
		this.setState({
			flag: 'All'
		})
	}

	Active = () => {
		this.setState({
			flag: 'Active'
		})
	}

	Completed = () => {
		this.setState({
			flag: 'Completed'
		})
	}

	render() {
		return (
			<div>
				<section className="main">
					<ul className="todo-list">
						{
							this.state.flag === 'All' &&

							todoStore.todos.map(todo => {
								return (
									<TodoItem todo={todo} />
								)
							})
						}
						{
							this.state.flag === 'Active' &&

							todoStore.todos.filter((tod)=> tod.completed === false ).map(todo => {
								return (
									<TodoItem todo={todo} />
								)
							})
						}
						{
							this.state.flag === 'Completed' &&

							todoStore.todos.filter((tod)=> tod.completed !== false ).map(todo => {
								return (
									<TodoItem todo={todo} />
								)
							})
						}
					</ul>
				</section>

				<footer className="footer">
					<span class="todo-count"><strong>{todoStore.todos.length}</strong> item left</span>
					<ul class="filters">
						<li><a href="#" onClick={this.All} className={ this.state.flag === 'All' ? 'selected' : ''}>All</a></li>
						<li><a href="#" onClick={this.Active} className={ this.state.flag === 'Active' ? 'selected' : ''}>Active</a></li>
						<li><a href="#" onClick={this.Completed} className={ this.state.flag === 'Completed' ? 'selected' : ''}>Completed</a></li>
					</ul>
					<button class="clear-completed" onClick={this.remove}>Clear completed</button>
				</footer>
			</div>
		)
	}
}

export default Footer;