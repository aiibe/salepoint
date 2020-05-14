import React from 'react'
import { useHistory } from 'react-router-dom'

export default ({ children, path }) => {
	let history = useHistory()

	function navigateTo() {
		history.push(path)
	}

	return (
		<button className='with-icon' onClick={navigateTo}>
			{children}
		</button>
	)
}
