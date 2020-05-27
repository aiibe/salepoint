import React from 'react'

export default ({ children, onClick, disabled = false }) => {
	return (
		<button className={'card'} onClick={() => onClick()} disabled={disabled}>
			{children}
		</button>
	)
}
