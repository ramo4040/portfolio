import { ProjectCard } from '@/widgets/cards'
import './style.css'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import { listProject } from '@/data/projects-list'
import { Footer } from '@/widgets/footer/footer'
import Image from 'next/image'

export default function Home() {
	return (
		<main id='works-page-container'>
			<div className='logo' />

			<div className='headlines'>
				<h1 className='headline'>Building scalable apps with impact.</h1>
				<h1 className='sub-headline'>Code. Creativity. Reliability.</h1>
			</div>

			<div className='description'>
				<p>
					I'm{' '}
					<Tooltip>
						<TooltipTrigger>
							<b>Yassir</b>
						</TooltipTrigger>
						<TooltipContent>
							<div className='my-images'>
								<Image
									src={'/images/me/3.jpg'}
									fill
									alt='yassir'
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</TooltipContent>
					</Tooltip>
					, a fullstack developer based in{' '}
					<Tooltip>
						<TooltipTrigger>
							<b>Morocco</b>
						</TooltipTrigger>
						<TooltipContent>
							<div className='my-images'>
								<Image
									src={'/images/my-location.png'}
									fill
									alt='yassir'
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</TooltipContent>
					</Tooltip>
					. I build modern, scalable web applications <br /> — turning ideas
					into interactive digital experiences.
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
