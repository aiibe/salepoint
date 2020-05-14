import React from 'react'
import { useLocation } from 'react-router-dom'
import Panel from './elements/Panel'
import ButtonIcon from './elements/ButtonIcon'

export default () => {
	let location = useLocation()
	let { name } = location.state

	return (
		<Panel>
			<div className='header with-navigation'>
				<h1>{name}</h1>
				<ButtonIcon path='/'>
					<svg viewBox='0 0 512 512'>
						<path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
					</svg>
					Back
				</ButtonIcon>
			</div>
			<div className='grid'>
				<div className='cell'></div>
			</div>
		</Panel>
	)
}
