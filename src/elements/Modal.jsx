import React, { useRef } from 'react'

export default ({ children, close }) => {
	let overlay = useRef(null)

	function onClose(event) {
		event.target == overlay.current && close()
	}
	return (
		<div className='modal' onClick={onClose}>
			<div className='modal-overlay' ref={overlay} />
			<div className='modal-body'>{children}</div>
		</div>
	)
}
