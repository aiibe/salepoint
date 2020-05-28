import React from 'react'
import './scss/Checkout.scss'

export default () => {
	return (
		<div className='checkout'>
			<div className='head'>
				<h4>Checkout</h4>
			</div>
			<div className='body'>
				<ul>
					<li></li>
				</ul>
				<div className='total'>
					<div>Total</div>
					<div>140,000</div>
				</div>
			</div>
			<div className='foot'>
				<button className='pay'>Pay</button>
			</div>
		</div>
	)
}
