import React from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
	let location = useLocation()
	let { name } = location.state

	return (
		<div>
			<h1>Page {name}</h1>
		</div>
	)
}
