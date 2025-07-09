import type { ComponentProps, FC } from 'react'
import './style.css'

type ProjectHeadlineProps = ComponentProps<'div'> & {
	title: string
}

export const ProjectHeadline: FC<ProjectHeadlineProps> = ({ title }) => {
	return (
		<div id='project-headline'>
			<h1>{title}</h1>
		</div>
	)
}
