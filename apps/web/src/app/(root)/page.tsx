import './style.css'
import { listProject } from '@/data/projects-list'
import { AudioConversation } from '@/widgets/ai'
import { ProjectCard } from '@/widgets/cards'
import { Footer } from '@/widgets/footer/footer'
import { Logo } from '@/widgets/logo/logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Projects & Work',
	description:
		'Explore web development projects by Yassir Rouane — full stack applications built with React, Next.js, Node.js, and TypeScript. Based in Casablanca, Morocco.',
	openGraph: {
		title: 'Yassir Rouane — Full Stack Developer Projects',
		description:
			'Explore web development projects built with React, Next.js, Node.js, and TypeScript.',
		url: 'https://www.yassir-rouane.me',
	},
	alternates: {
		canonical: '/',
	},
}

export default function Home() {
	return (
		<main id='works-page-container'>
			<Logo />

			<div className='headlines'>
				<h1 className='headline'>
					Building scalable apps with impact.
					<span className='sub-headline'>Code. Creativity. Reliability.</span>
				</h1>
			</div>

			<div className='description'>
				<p>
					I'm <b>Yassir</b>, a fullstack developer based in <b>Morocco</b>. I
					build modern, scalable web applications <br /> — turning ideas into
					interactive digital experiences.
				</p>
			</div>

			<AudioConversation />

			<section aria-label='Featured projects' className='projects-container'>
				{listProject.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</section>

			<Footer hSize='3rem' aSize='2rem' />
		</main>
	)
}
