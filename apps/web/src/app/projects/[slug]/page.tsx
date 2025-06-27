import {
	type ProjectDetailsEntries,
	projectPageDetails,
} from '@/data/project-page-details'
import {
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
			{projectEnteries.map(([key, value]) => {
				if (key === 'header-preview') {
					return (
						<ProjectHeaderPreview
							key={crypto.randomUUID()}
							alt={project.headline}
							src={value}
						/>
					)
				}

				if (key === 'headline') {
					return <ProjectHeadline key={value} title={value} />
				}
			})}
		</>
	)
}

export default ProjectPage
