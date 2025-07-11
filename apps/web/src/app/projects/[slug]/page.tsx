import { listProject } from '@/data/projects-list'
import './style.css'
import { getAllProjectSlugs, getProjectBySlug } from '@/utils/mdx'
import { ProjectCard } from '@/widgets/cards'
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
	// get 2 random projects to display in the footer
	const moreProjects = listProject
		.filter((e) => e.id !== slug)
		.sort(() => 0.5 - Math.random())
		.slice(0, 2)

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

			<div id='project-details-elements' className='container'>
				{project.content}
			</div>

			<div className='footer container'>
				<Link href='/' className='see-more'>
					Explore more work
				</Link>

				<div className='more-projects'>
					{moreProjects.map((project) => {
						return <ProjectCard key={project.id} project={project} />
					})}
				</div>
			</div>
		</article>
	)
}

export default ProjectPage
