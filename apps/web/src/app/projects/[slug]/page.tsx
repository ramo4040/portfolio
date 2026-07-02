import { listProject } from '@/data/projects-list'
import './style.css'
import { siteConfig } from '@/lib/config'
import { type Metadata, createPageMetadata } from '@/lib/metadata'
import { getAllProjectSlugs, getProjectBySlug } from '@/utils/mdx'
import { ProjectCard } from '@/widgets/cards'
import {
	ProjectCloseButton,
	ProjectHeaderPreview,
	ProjectNavbar,
} from '@/widgets/projects-page-details'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { type FC, use } from 'react'

type ProjectPageProps = {
	params: Promise<{ slug: string }>
}

const projectMetaMap: Record<
	string,
	{ title: string; description: string; image: string }
> = {
	'olyx-ui': {
		title: 'Olyx UI - Open-Source React Component Library',
		description:
			'Open-source React component library built on Base UI with 50+ accessible, composable components, CSS custom properties, HCT color, and design tokens.',
		image: '/images/projects/olyx-ui/og.png',
	},
	'rh-car-rental': {
		title: 'RH Car Rental — Fleet Management & Booking System',
		description:
			'Custom fleet management and online booking system for RH CAR. Built with real-time vehicle tracking, reservation management, and admin dashboards.',
		image: '/images/projects/car-rental/car-rental-bg.webp',
	},
	mindsprint: {
		title: 'MindSprint — AI-Powered Learning Platform for Developers',
		description:
			'AI-powered learning platform with personalized paths, interactive quizzes, real-time AI assistance, and collaborative tools for developers.',
		image: '/images/projects/mindsprint/mindsprint-bg.webp',
	},
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params
	const meta = projectMetaMap[slug]

	if (!meta) return {}

	return createPageMetadata({
		title: meta.title,
		description: meta.description,
		path: `/projects/${slug}`,
		ogType: 'article',
		ogImage: { ...siteConfig.ogImage, url: meta.image, alt: meta.title },
	})
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

	const meta = projectMetaMap[slug]
	const jsonLd = meta
		? {
				'@context': 'https://schema.org',
				'@graph': [
					{
						'@type': 'CreativeWork',
						'@id': `https://www.yassir-rouane.me/projects/${slug}#creativework`,
						name: meta.title,
						description: meta.description,
						url: `https://www.yassir-rouane.me/projects/${slug}`,
						image: `https://www.yassir-rouane.me${meta.image}`,
						author: {
							'@id': 'https://www.yassir-rouane.me/#person',
						},
					},
					{
						'@type': 'BreadcrumbList',
						'@id': `https://www.yassir-rouane.me/projects/${slug}#breadcrumb`,
						itemListElement: [
							{
								'@type': 'ListItem',
								position: 1,
								name: 'Home',
								item: 'https://www.yassir-rouane.me/',
							},
							{
								'@type': 'ListItem',
								position: 2,
								name: meta.title,
								item: `https://www.yassir-rouane.me/projects/${slug}`,
							},
						],
					},
				],
			}
		: null

	return (
		<article id='project-details-container'>
			{jsonLd && (
				<script
					type='application/ld+json'
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			)}

			{project.meta.links && (
				<ProjectNavbar
					web={project.meta.links.web}
					github={project.meta.links.github}
				/>
			)}

			<ProjectCloseButton />

			<ProjectHeaderPreview
				alt={project.meta.headline}
				src={project.meta.headerPreview}
			/>

			<h1 className='sr-only'>{project.meta.headline}</h1>

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
