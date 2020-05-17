import React from 'react'
import Navigato from './Navigato'
import Bill from './Bill'
import HomePanel from './HomePanel'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductPanel from './ProductPanel'

export default () => {
	console.log('Render App')
	return (
		<BrowserRouter>
			<div className='app'>
				<div className='content'>
					<Navigato />
					<Switch>
						<Route path='/:id'>
							<ProductPanel />
						</Route>
						<Route path='/'>
							<HomePanel />
						</Route>
					</Switch>
					<div className='footer'></div>
				</div>

				<Bill />
			</div>
		</BrowserRouter>
	)
}
