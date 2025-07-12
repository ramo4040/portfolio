import { ProjectCard } from '@/widgets/cards'
import './style.css'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import { listProject } from '@/data/projects-list'
import { Footer } from '@/widgets/footer/footer'
import { Logo } from '@/widgets/logo/logo'
import Image from 'next/image'

export default function Home() {
	return (
		<main id='works-page-container'>
			<Logo />

			<div className='headlines'>
				<h1 className='headline'>Building scalable apps with impact.</h1>
				<h1 className='sub-headline'>Code. Creativity. Reliability.</h1>
			</div>

			<div className='description'>
				<p>
					I'm <b>Yassir</b>, a fullstack developer based in <b>Morocco</b>. I
					build modern, scalable web applications <br /> — turning ideas into
					interactive digital experiences.
				</p>
			</div>

			<div className='cta' />

			<div className='projects-container'>
				{listProject.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			<Footer hSize='3rem' aSize='2rem' />
		</main>
	)
}
