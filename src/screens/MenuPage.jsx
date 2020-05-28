import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Panel from '../elements/Panel'
import Modal from '../elements/Modal'
import ButtonIcon from '../elements/ButtonIcon'

const _collections = [
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
	{ name: 'Pizza', path: '/pizza' },
	{ name: 'Burgers', path: '/burgers' },
	{ name: 'Soups', path: '/soup' },
	{ name: 'Beers', path: '/beers' },
	{ name: 'Bakery', path: '/bakery' },
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
						<button className='card' onClick={() => history.push(i.path)}>
							{i.name}
						</button>
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
						<ButtonIcon
							onClick={() => setCurrentPage((current) => current - 1)}
							disabled={currentPage == 0}
						>
							<svg viewBox='0 0 0.558 1.217'>
								<path d='M.5.11a.052.052 0 00-.04.016L.017.568a.06.06 0 000 .082l.442.442c.015.015.036.02.056.015s.036-.02.04-.04.001-.043-.015-.057l-.4-.4.4-.4C.558.19.563.166.553.144S.522.108.5.11z' />
							</svg>
							Back
						</ButtonIcon>
					)}

					{currentPage + 1 !== collections.length && (
						<ButtonIcon onClick={() => setCurrentPage((current) => current + 1)}>
							Next
							<svg viewBox='0 0 0.558 1.217'>
								<path d='M.06.11C.075.11.09.115.1.126l.44.442a.056.056 0 010 .082l-.44.442c-.015.015-.036.02-.056.015s-.036-.02-.04-.04.001-.042.016-.056l.4-.4-.4-.4C.001.19-.004.166.005.144S.036.108.06.11z' />
							</svg>
						</ButtonIcon>
					)}
				</div>
			)
		}
	}

	console.log('HomePanel render')
	return (
		<Panel>
			<div className='nav'>
				<div className='item'>
					<h4>Menu</h4>
				</div>
				<div className='item tools'>
					<button className='card' onClick={() => setModal(true)}>
						Create collection
					</button>
					{renderNavigation()}
				</div>
			</div>
			<div className='inner'>
				<div className='grid'>{renderCollections()}</div>
			</div>
			{modal && (
				<Modal close={() => setModal(false)}>
					<div className='form'>
						<div className='body'>
							<label>Name collection</label>
							<input type='text' placeholder='Name' autoFocus />
						</div>
						<div className='footer'>
							<button className='card'>Cancel</button>
							<button className='card'>Okay</button>
						</div>
					</div>
				</Modal>
			)}
		</Panel>
	)
}
