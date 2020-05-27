import React from 'react'
import Checkout from './Checkout'
import MenuPage from './screens/MenuPage'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductPanel from './ProductPanel'
import Tab from './Tab'

export default () => {
	console.log('Render App')
	return (
		<BrowserRouter>
			<div className='app'>
				<div className='content'>
					<Switch>
						<Route path='/:id'>
							<ProductPanel />
						</Route>
						<Route path='/'>
							<MenuPage />
						</Route>
					</Switch>
					<div className='footer'>
						<Tab />
					</div>
				</div>
				<Checkout />
			</div>
		</BrowserRouter>
	)
}
