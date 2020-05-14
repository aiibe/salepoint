import React from 'react'
import { useHistory } from 'react-router-dom'

const items = [
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
]

const Button = ({ children, path }) => {
	let history = useHistory()
	function press() {
		history.push(path)
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
						<Button path={i.path}>{i.name}</Button>
					</div>
				)
			})}
		</div>
	)
}
