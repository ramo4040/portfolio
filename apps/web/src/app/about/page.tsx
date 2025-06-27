import {
	DefaultCard,
	EmailMeCard,
	LocationCard,
	MyImages,
	ResumeCard,
	SocialAccountCard,
} from '@/widgets/cards'
import './style.css'
import { GridLayout } from '@/layouts/grid-layout'
import { MusicListeningCard } from '@/widgets/cards/music-listening'
import { SkillsCard } from '@/widgets/cards/skill/skill-card'
import { Music } from 'lucide-react'

export default function AboutPage() {
	return (
		<GridLayout cols={4} rows={4} id='about-container'>
			<DefaultCard className='col-span-2 row-span-2'>
				<DefaultCard.Badge>About</DefaultCard.Badge>
				<p>
					Fullstack Web Developer based in Morocco, originally from Casablanca.
					where I build and optimize web applications to deliver seamless user
					experiences. My expertise spans frontend and backend development, with
					a focus on creating responsive, scalable, and performant solutions.
					<br />
					<br />I enjoy turning ideas into reality, whether it's crafting
					intuitive interfaces or architecting robust APIs. Always learning,
					always building—for today's challenges and tomorrow's innovations.
				</p>
			</DefaultCard>

			<SocialAccountCard />

			<MyImages />

			<LocationCard />

			<SkillsCard />

			<EmailMeCard />

			<MusicListeningCard />

			<ResumeCard />
		</GridLayout>
	)
}
