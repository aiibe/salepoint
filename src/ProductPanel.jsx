import React from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
	let location = useLocation()
	let { name } = location.state

	return (
		<div className='grid'>
			<h1>Page {name}</h1>
			<div className='cell'></div>
		</div>
	)
}
