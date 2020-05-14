import React from 'react'
import Header from './Header'
import Bill from './Bill'
import HomePanel from './HomePanel'

export default () => {
	return (
		<div className='app'>
			<div className='content'>
				<Header />
				<HomePanel />
				<div className='footer'></div>
			</div>
			<Bill />
		</div>
	)
}
