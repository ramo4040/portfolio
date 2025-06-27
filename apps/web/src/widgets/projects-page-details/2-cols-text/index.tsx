import './style.css'
import type { FC } from 'react'

type Props = {
	details: string[]
}

export const Project2ColsText: FC<Props> = ({ details }) => {
	return (
		<div id='project-2-cols-text'>
			{details.map((e, i) => {
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={i} className='paragraph-container'>
						{e.split('\n').map((e, i) => {
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							return <p key={i}>{e}</p>
						})}
					</div>
				)
			})}
		</div>
	)
}
