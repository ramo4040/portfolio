import './style.css'
import { projectPageDetails } from '@/data/project-page-details'
import type { ProjectDetailsEntries } from '@/types'
import {
	Project2ColsImage,
	Project2ColsText,
	ProjectHeaderPreview,
	ProjectHeadline,
} from '@/widgets/projects-page-details'
import { type FC, use } from 'react'

type ProjectPageProps = {
	params: Promise<{ slug: string }>
}

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
	const { slug } = use(params)
	const project = projectPageDetails.find((e) => e.slug === slug)

	if (!project) return null

	const projectEnteries = Object.entries(project) as ProjectDetailsEntries

	return (
		<>
			<ProjectHeaderPreview
				alt={project.headline}
				src={project['header-preview']}
			/>

			<div id='project-details-elements'>
				{projectEnteries.map(([key, value], i) => {
					if (key === 'headline') {
						return <ProjectHeadline key={i} title={value} />
					}

					if (key === '2-cols-text') {
						return <Project2ColsText key={i} details={value} />
					}

					if (key === '2-cols-image') {
						return <Project2ColsImage key={i} images={value} />
					}
				})}
			</div>
		</>
	)
}

export default ProjectPage
