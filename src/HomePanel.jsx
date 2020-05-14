import React from 'react'

const items = ['Pizza', 'Burger', 'Soup', 'Drinks', 'Bakery']

const Button = ({ children }) => {
	return <button className='card'>{children}</button>
}

export default () => {
	return (
		<div className='grid'>
			{items.map((i, id) => {
				return (
					<div className='cell' key={id}>
						<Button>{i}</Button>
					</div>
				)
			})}
		</div>
	)
}
