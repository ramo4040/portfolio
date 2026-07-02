import Link from 'next/link'
import './style.css'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import { certificates } from '@/data/certificates'
import { experiences } from '@/data/experience'
import { socialAccounts } from '@/data/social-account'
import { stackList } from '@/data/stack-list'
import { createPageMetadata } from '@/lib/metadata'
import { LocationCard } from '@/widgets/cards'
import { GithubHeatmap } from '@/widgets/cards/github-heatmap'
import { CertificatesList } from '@/widgets/certificates-list'
import { ExperienceList } from '@/widgets/experience-list'
import { Footer } from '@/widgets/footer/footer'
import { Logo } from '@/widgets/logo/logo'
import { Resume } from '@/widgets/resume'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'

export const metadata = createPageMetadata({
	title: 'About',
	description:
		'Learn about Yassir Rouane — a full stack developer in Casablanca, Morocco. Skills in React, Next.js, TypeScript, Node.js, Laravel. View certifications, tech stack, and resume.',
	path: '/about',
})

export default function AboutPage() {
	return (
		<main id='about-page-container' className='mobile-first-container'>
			<Logo />

			<section className='sections-container'>
				<h1 className='headline'>Where code meets creativity — welcome!</h1>

				<figure className='my-picture'>
					<Image
						src={'/images/me/3.webp'}
						alt='Yassir Rouane, full stack developer based in Casablanca, Morocco'
						fill
						priority
						style={{ objectFit: 'cover' }}
					/>
				</figure>

				<section className='__item description'>
					<h2 className='section-title'>Yassir Rouane</h2>
					<p>
						I’m a full stack developer who loves creating thoughtful, useful
						experiences on the web. I care about building things that people
						enjoy using and that make a difference, no matter how small. Outside
						of work, I’m always learning, exploring, and finding new ways to
						grow — as a developer and as a person.
					</p>
				</section>

				<section className='__item'>
					<h2 className='section-title'>Days I Code</h2>
					<GithubHeatmap />
				</section>

				<section className='__item location'>
					<h2>Where</h2>
					<LocationCard />
				</section>

				<section className='__item online'>
					<h2>Online</h2>
					<nav aria-label='Social media profiles' className='socials-container'>
						{socialAccounts.map((account) => {
							return (
								<Link
									href={account.url}
									key={account.name}
									className='social-wrapper'
									target='_blank'
								>
									<div className='__logo'>{account.icon}</div>
									<div className='__details'>
										<h4>{account.name}</h4>
										<p>{account.id}</p>
									</div>
									<HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
								</Link>
							)
						})}
					</nav>
				</section>

				<section className='__item stack'>
					<h2>Stack</h2>
					<div className='stack-container'>
						{stackList.map((e) => {
							return (
								<Tooltip key={e.title} direction='top'>
									<TooltipTrigger>
										<div className='icon'>
											<e.icon />
										</div>
									</TooltipTrigger>
									<TooltipContent>{e.title}</TooltipContent>
								</Tooltip>
							)
						})}
					</div>
				</section>

				<section className='__item experience'>
					<h2>
						Experience <sup>({experiences.length})</sup>
					</h2>

					<ExperienceList />
				</section>

				<section className='__item certifications'>
					<h2>
						Certifications <sup>({certificates.length})</sup>
					</h2>
					<CertificatesList data={certificates} />
				</section>

				<section className='__item principles-guidelines'>
					<h2>Principles & Guidelines</h2>
					<ul>
						<li>
							<div>
								<h4>Responsibility</h4>
								<p>
									I respect deadlines, stay committed throughout the project,
									and follow the agreed plan without disappearing or leaving
									things unclear.
								</p>
							</div>
						</li>
						<li>
							<div>
								<h4>Inspiration</h4>
								<p>
									I bring fresh ideas, creativity, and positive energy into
									every project, aiming to make the process enjoyable and the
									outcome meaningful.
								</p>
							</div>
						</li>
						<li>
							<div>
								<h4>Quality</h4>
								<p>
									I treat each project as if it were my own, putting in maximum
									effort, striving to improve every result, and never settling
									for "just good enough".
								</p>
							</div>
						</li>
						<li>
							<div>
								<h4>Harmonious Communication</h4>
								<p>
									For me, it's essential to maintain a respectful, healthy, and
									calm relationship with everyone I collaborate with. Working
									with me is easy, transparent, and built on mutual
									appreciation.
								</p>
							</div>
						</li>
					</ul>
				</section>

				<section className='__item resume'>
					<h2>Resume</h2>
					<Resume />
				</section>
			</section>

			<Footer hSize='2rem' aSize='1.5rem' />
		</main>
	)
}
