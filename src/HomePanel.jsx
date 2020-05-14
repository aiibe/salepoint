import React from 'react'
import Button from './elements/Button'

const items = [
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
]

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
