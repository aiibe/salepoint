import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Panel from './elements/Panel'
import Button from './elements/Button'

const items = [
	{ name: 'Royal Cheese', path: '/royal-cheese' },
	{ name: '4 Seasons', path: '/4-seasons' },
	{ name: 'Margherita', path: '/margherita' },
	{ name: 'Aloha', path: '/aloha' },
	{ name: 'Sea Foods', path: '/sea-foods' },
	{ name: 'Cannibal', path: '/cannibal' },
	{ name: 'Nordic', path: '/nordic' },
	{ name: 'Meat Lovers', path: '/meat-lovers' },
	{ name: 'Forestiere', path: '/forestiere' },
	{ name: 'Deluxe', path: '/deluxe' },
	{ name: 'Urban Kebab', path: '/urban-kebab' },
	{ name: 'Hypnotika', path: '/hypnotika' },
	{ name: 'Hawian', path: '/hawian' },
	{ name: 'Steak & Cheese', path: '/steak-&-cheese' },
]

export default ({ grid = 10 }) => {
	let [next, setNext] = useState(items.length % grid)
	let location = useLocation()
	let { name } = location.state

	function renderItems() {
		let count
		let childs = []

		for (count = 0; count < grid; count++) {
			childs.push(
				<div className='cell' key={`a1-${count}`}>
					<Button item={items[count]}>{items[count].name}</Button>
				</div>
			)
		}

		return childs
	}

	return (
		<Panel>
			<div className='grid'>
				<div className='cell'>
					<button className='card add'>+ New item</button>
				</div>
				{renderItems()}
				<div className='cell'>
					<button className='card add'>More</button>
				</div>
			</div>
		</Panel>
	)
}
