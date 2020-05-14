import React from 'react'

export default ({ children }) => {
	return (
		<div>
			<div className='offset'></div>
			<div className='panel'>{children}</div>
		</div>
	)
}
