import { projectPageDetails } from '@/data/project-page-details'
import { ProjectHeaderPreview } from '@/widgets/projects-page-details'
import { type FC, use } from 'react'

type ProjectPageProps = {
	params: Promise<{ slug: string }>
}

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
	const { slug } = use(params)
	const project = projectPageDetails.find((e) => e.slug === slug)

	if (!project) return null

	return (
		<>
			<ProjectHeaderPreview
				alt={project.headline}
				src={project['header-preview']}
			/>
		</>
	)
}

export default ProjectPage
