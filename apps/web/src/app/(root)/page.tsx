import './style.css'
import { listProject } from '@/data/projects-list'
import { createPageMetadata } from '@/lib/metadata'
import { AudioConversation } from '@/widgets/ai'
import { ProjectCard } from '@/widgets/cards'
import { Footer } from '@/widgets/footer/footer'
import { Logo } from '@/widgets/logo/logo'

export const metadata = createPageMetadata({
	title: 'Projects & Work',
	description:
		'Explore web development projects by Yassir Rouane — full stack applications built with React, Next.js, Node.js, and TypeScript. Based in Casablanca, Morocco.',
	path: '/',
})

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
				{listProject.map((project, index) => (
					<ProjectCard
						key={project.id}
						project={project}
						priority={index === 0}
					/>
				))}
			</section>

			<Footer hSize='3rem' aSize='2rem' />
		</main>
	)
}
