import React from 'react'
import { useHistory } from 'react-router-dom'

const items = [
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
]

const Button = ({ children, item }) => {
	let history = useHistory()

	function press() {
		const location = { pathname: item.path, state: { ...item } }
		history.push(location)
	}

	return (
		<button className='card' onClick={press}>
			{children}
		</button>
	)
}

export default () => {
	return (
		<div className='grid'>
			{items.map((i, id) => {
				return (
					<div className='cell' key={id}>
						<Button item={i}>{i.name}</Button>
					</div>
				)
			})}
		</div>
	)
}
