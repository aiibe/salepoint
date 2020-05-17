import React from 'react'
import { useLocation } from 'react-router-dom'
import Panel from './elements/Panel'
import ButtonIcon from './elements/ButtonIcon'

export default () => {
	let location = useLocation()
	let { name } = location.state

	return (
		<Panel>
			<div className='grid'>
				<div className='cell'></div>
			</div>
		</Panel>
	)
}
