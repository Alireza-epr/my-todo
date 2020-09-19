import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Remove from './RemoveButton'

@observer
class TodoItem extends Component {
	onToggle = () => {
		this.props.todo.toggle()
	}
	render() {
		const { todo } = this.props
		return (
			<li className={todo.completed ? 'completed' : ' '} id={todo.id} >
				<div className="view">
					<input
						onChange={this.onToggle}
						type="checkbox"
						className="toggle"
						value="on"
						checked={todo.completed}
					/>
					<label>{todo.title}</label>
					<Remove todo={todo}/>
				</div>
			</li>
				
		)
	}
}

export default TodoItem; 