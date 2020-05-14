import React from 'react'
import Button from './elements/Button'
import Panel from './elements/Panel'
import ButtonIcon from './elements/ButtonIcon'

const items = [
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
]

export default () => {
	return (
		<Panel>
			<div className='header with-navigation'></div>
			<div className='grid'>
				{items.map((i, id) => {
					return (
						<div className='cell' key={id}>
							<Button item={i}>{i.name}</Button>
						</div>
					)
				})}
			</div>
		</Panel>
	)
}
