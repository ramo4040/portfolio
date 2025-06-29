import './style.css'
import { getAllProjectSlugs, getProjectBySlug } from '@/utils/mdx'
import { ProjectHeaderPreview } from '@/widgets/projects-page-details'
import { X } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { type FC, use } from 'react'

type ProjectPageProps = {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	const slugs = await getAllProjectSlugs()

	return slugs.map((slug) => ({
		slug,
	}))
}

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
	const { slug } = use(params)

	// Load the MDX content
	const projectPromise = getProjectBySlug(slug)
	const project = use(projectPromise)

	if (!project) return notFound()

	return (
		<article id='project-details-container'>
			<Link href='/' id='project-close-button'>
				<X />
			</Link>

			<ProjectHeaderPreview
				alt={project.meta.headline}
				src={project.meta.headerPreview}
			/>

			<div id='project-details-elements'>{project.content}</div>
		</article>
	)
}

export default ProjectPage
