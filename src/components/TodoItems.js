import React, { Component } from 'react'

import Footer from './Footer'
import { observer } from 'mobx-react'


@observer
class TodoItems extends Component {
	
	render() {
		return (
			<div>
				<Footer />
			</div>
		);
	}
}

export default TodoItems; 