import React, { useState } from 'react'
import Button from './elements/Button'
import Panel from './elements/Panel'
import Modal from './elements/Modal'

const items = [
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
]

export default () => {
	const [modal, setModal] = useState(false)

	return (
		<Panel>
			<div className='header with-navigation'>
				<h1>Menu</h1>
			</div>
			<div className='grid'>
				<div className='cell'>
					<button className='card add' onClick={() => setModal(true)}>
						+ New collection
					</button>
				</div>
				{items.map((i, id) => {
					return (
						<div className='cell' key={id}>
							<Button item={i}>{i.name}</Button>
						</div>
					)
				})}
			</div>
			{modal && (
				<Modal close={() => setModal(false)}>
					<div className='form'>
						<label>New collection</label>
						<input type='text' placeholder='Name' />
						<div>
							<Button>Cancel</Button>
							<Button>Okay</Button>
						</div>
					</div>
				</Modal>
			)}
		</Panel>
	)
}
