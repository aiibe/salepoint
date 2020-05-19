import React from 'react'
import Button from './elements/Button'

export default () => {
	return (
		<div className='checkout'>
			<div className='header'>
				<h3>Checkout</h3>
			</div>
			<div className='body'>
				<div className='items'>
					<div className='item'>
						<div className='quantity'>2</div>
						<div className='detail'>
							<div className='name'>Margherita</div>
							<small>pizza</small>
						</div>
						<div className='price'>
							<div>80,000</div>
							<small>40,000</small>
						</div>
					</div>
					<div className='item'>
						<div className='quantity'>1</div>
						<div className='detail'>
							<div className='name'>Cannibal</div>
							<small>pizza</small>
						</div>
						<div className='price'>50,000</div>
					</div>
					<div className='item'>
						<div className='quantity'>2</div>
						<div className='detail'>
							<div className='name'>Espresso</div>
							<small>cafe</small>
						</div>
						<div className='price'>10,000</div>
					</div>
				</div>
				<div className='total'>
					<div>Total</div>
					<div>140,000</div>
				</div>
			</div>
			<div className='footer'>
				<Button className='pay'>Pay</Button>
			</div>
		</div>
	)
}
