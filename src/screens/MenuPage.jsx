import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../elements/Button'
import Panel from '../elements/Panel'
import Modal from '../elements/Modal'

const _collections = [
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Coffee', path: '/bakery' },
	{ name: 'Donuts', path: '/bakery' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Coffee', path: '/bakery' },
	{ name: 'Donuts', path: '/bakery' },
]

function paginate(items) {
	let pages = []
	let page = []
	for (let i = 0; i < items.length; ++i) {
		if (page.length == 12) {
			pages.push(page)
			page = []
		}
		page.push(items[i])
	}
	pages.push(page)
	return pages
}

export default () => {
	const [modal, setModal] = useState(false)
	const [collections, setCollections] = useState([])
	const [currentPage, setCurrentPage] = useState(0)

	useEffect(() => {
		// Paginate collections
		setCollections([...paginate(_collections)])
	}, [])

	function renderCollections() {
		let history = useHistory()

		if (collections.length > 0) {
			return collections[currentPage].map((i, id) => {
				return (
					<div className='cell' key={id}>
						<Button onClick={() => history.push(i.path)}>{i.name}</Button>
					</div>
				)
			})
		}
	}

	function renderNavigation() {
		if (collections.length > 0) {
			return (
				<div className='item nextback'>
					{currentPage !== 0 && (
						<Button
							onClick={() => setCurrentPage((current) => current - 1)}
							disabled={currentPage == 0}
						>
							Back
						</Button>
					)}

					{currentPage + 1 !== collections.length && (
						<Button onClick={() => setCurrentPage((current) => current + 1)}>
							Next
						</Button>
					)}
				</div>
			)
		}
	}

	console.log('HomePanel render')
	return (
		<Panel>
			<div className='nav'>
				<div className='item current'>
					<h4>Menu</h4>
				</div>
				<div className='item'>
					<Button onClick={() => setModal(true)}>Add collection</Button>
				</div>
				{renderNavigation()}
			</div>
			<div className='grid'>{renderCollections()}</div>
			{modal && (
				<Modal close={() => setModal(false)}>
					<div className='form'>
						<div className='body'>
							<label>New collection</label>
							<input type='text' placeholder='Name' autoFocus />
						</div>
						<div className='footer'>
							<Button>Cancel</Button>
							<Button>Okay</Button>
						</div>
					</div>
				</Modal>
			)}
		</Panel>
	)
}
