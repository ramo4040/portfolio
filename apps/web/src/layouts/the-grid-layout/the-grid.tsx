import {
	DefaultCard,
	EmailMeCard,
	LocationCard,
	ProjectCard,
	SocialAccountCard,
} from '@/widgets/cards'
import './style.css'
import { SkillsCard } from '@/widgets/cards/skill/skill-card'

export const TheGridLayout = () => {
	return (
		<section id='the-grid' className='container'>
			<DefaultCard className='col-span-2 row-span-1'>
				<p>
					Fullstack Web Developer based in Morocco, originally from Casablanca.
					where I build and optimize web applications to deliver seamless user
					experiences. My expertise spans frontend and backend development, with
					a focus on creating responsive, scalable, and performant solutions.
					<br />
					<br />I enjoy turning ideas into reality, whether it’s crafting
					intuitive interfaces or architecting robust APIs. Always learning,
					always building—for today’s challenges and tomorrow’s innovations.
				</p>
			</DefaultCard>

			<ProjectCard
				className='col-span-2 row-span-2'
				theme='#242a38'
				color='#fff'
				imageAlt='Car Rental Project'
				imageSrc='/images/projects/car-rental/car-rental-bg.png'
				href='#'
				title='RH CAR'
				description='Is an efficient car rental platform designed to streamline reservations and fleet management through a seamless and secure user experience.'
			/>

			<LocationCard />

			<SocialAccountCard />

			<ProjectCard
				className='col-span-2 row-span-1'
				theme='#e8f9ff'
				color='#000'
				imageAlt='Mindsprint Project'
				imageSrc='/images/projects/mindsprint/mindsprint-bg.png'
				href='#'
				title='Mindsprint'
				description='MindSprint is an AI-powered online learning platform designed to empower developers with personalized, interactive learning experiences.'
			/>

			<EmailMeCard />

			<SkillsCard />

			<DefaultCard className='col-span-4 row-span-4'> </DefaultCard>
		</section>
	)
}
