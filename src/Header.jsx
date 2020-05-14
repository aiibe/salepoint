import React from 'react'
import Logo from './assets/logo.png'

export default () => {
	return (
		<div className='header'>
			<div className='brand'>
				<img src={Logo} alt='Salepoint' />
			</div>
		</div>
	)
}
