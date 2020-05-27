import React from 'react'
import { useHistory } from 'react-router-dom'

export default ({ children, onClick }) => {
	return (
		<button className='with-icon' onClick={() => onClick()}>
			{children}
		</button>
	)
}
