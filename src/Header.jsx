import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from './assets/logo.png'

export default () => {
	let history = useHistory()

	return (
		<div className='header'>
			<div className='brand'>
				<img src={Logo} alt='Salepoint' />
			</div>
		</div>
	)
}
