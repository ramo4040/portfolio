import { listProject } from '@/data/projects-list'
import { GridLayout } from '@/layouts/grid-layout'
import {
	DefaultCard,
	EmailMeCard,
	LocationCard,
	ProjectCard,
	ProjectsBannerContainer,
	SocialAccountCard,
} from '@/widgets/cards'
import { SkillsCard } from '@/widgets/cards/skill/skill-card'
import { TopNavbar } from '@/widgets/top-navbar/top-navbar'
import { Yassir } from '@/widgets/yassir/yassir'

export default function Home() {
	const carRentalProject = listProject[0]
	const mindsprintProject = listProject[1]

	return (
		<main>
			<TopNavbar />
			<Yassir />
			<GridLayout>
				<DefaultCard>
					<p>
						Fullstack Web Developer based in Morocco, originally from
						Casablanca. where I build and optimize web applications to deliver
						seamless user experiences. My expertise spans frontend and backend
						development, with a focus on creating responsive, scalable, and
						performant solutions.
						<br />
						<br />I enjoy turning ideas into reality, whether it's crafting
						intuitive interfaces or architecting robust APIs. Always learning,
						always building—for today's challenges and tomorrow's innovations.
					</p>
				</DefaultCard>
				<ProjectCard project={carRentalProject} />
				<LocationCard />
				<SocialAccountCard />
				<ProjectCard project={mindsprintProject} />
				<EmailMeCard />
				<SkillsCard />
				<ProjectsBannerContainer />
			</GridLayout>
		</main>
	)
}
