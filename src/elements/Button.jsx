import React from 'react'
import { useHistory } from 'react-router-dom'

export default ({ children, item, className }) => {
	let history = useHistory()

	function press() {
		const location = { pathname: item.path, state: { ...item } }
		history.push(location)
	}

	return (
		<button className={className || 'card'} onClick={press}>
			{children}
		</button>
	)
}
