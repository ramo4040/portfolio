import type { ProjectSectionType } from '@/types'
import './style.css'
import { projectPageDetails } from '@/data/project-page-details'
import {
	Project2ColsImage,
	Project2ColsText,
	ProjectHeaderPreview,
} from '@/widgets/projects-page-details'
import { notFound } from 'next/navigation'
import { type FC, type JSX, use } from 'react'

type ProjectPageProps = {
	params: Promise<{ slug: string }>
}

function renderProjectSection(
	section: ProjectSectionType,
	index: number,
): JSX.Element | null {
	switch (section.type) {
		case '2-cols-text':
			return <Project2ColsText key={index} details={section} />
		case 'images':
			return <Project2ColsImage key={index} data={section} />

		default:
			return null
	}
}

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
	const { slug } = use(params)
	const project = projectPageDetails.find((e) => e.slug === slug)
	if (!project) return notFound()

	return (
		<>
			<ProjectHeaderPreview
				alt={project.headline}
				src={project['header-preview']}
			/>

			<div id='project-details-elements'>
				{project.sections.map((section, index) =>
					renderProjectSection(section, index),
				)}
			</div>
		</>
	)
}

export default ProjectPage
