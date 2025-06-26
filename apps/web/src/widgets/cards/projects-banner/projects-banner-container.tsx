'use client'
import { listProject } from '@/data/projects-list'
import { useState } from 'react'
import { DefaultCard } from '../default/default-card'
import { ProjectBanner } from './project-banner'
import './style.css'

export const ProjectsBannerContainer = () => {
	const [hoveredTheme, setHoveredTheme] = useState<string | null>(null)

	return (
		<DefaultCard
			className='col-span-4 row-span-2'
			style={{
				backgroundColor: hoveredTheme || 'var(--default-card-bg)',
				transition: 'var(--transition-standard-fast-spatial)',
			}}
		>
			<DefaultCard.Badge>
				<div id='project-list-live'>
					Projects
					<span className='project-live-circle' />
				</div>
			</DefaultCard.Badge>

			<div id='projects-list-container'>
				{listProject.map((project, i) => {
					const degrees = [-2, 3, -1, 4, 3]
					return (
						<ProjectBanner
							key={project.id}
							project={project}
							style={
								{
									'--project-banner-bg': project.theme,
									'--project-banner-rotate': `${degrees[i]}deg`,
								} as React.CSSProperties
							}
							onMouseEnter={() => setHoveredTheme(project.theme)}
							onMouseLeave={() => setHoveredTheme(null)}
						/>
					)
				})}
			</div>
		</DefaultCard>
	)
}
