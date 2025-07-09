import './style.css'
import type { ProjectDetails2ColsTextType } from '@/types'
import type { FC } from 'react'

type Props = {
	details: Pick<ProjectDetails2ColsTextType, 'content' | 'hasTitle'>
}

export const Project2ColsText: FC<Props> = ({ details }) => {
	return (
		<div id='project-2-cols-text'>
			{details.content.map((e, parrentIndex) => {
				return (
					<div key={parrentIndex} className='paragraph-container'>
						{e.split('\n').map((e, i) => {
							if (parrentIndex === 0 && details.hasTitle) {
								return (
									<h3 className='project-details-h3' key={i}>
										{e}
									</h3>
								)
							}
							return (
								<p className='project-details-p' key={i}>
									{e}
								</p>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}
