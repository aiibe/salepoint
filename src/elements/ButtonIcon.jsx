import React from 'react'

export default ({ children, onClick }) => {
	return (
		<button className='with-icon' onClick={() => onClick()}>
			{children}
		</button>
	)
}
