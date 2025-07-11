import Link from 'next/link'
import './style.css'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import { certificates } from '@/data/certificates'
import { socialAccounts } from '@/data/social-account'
import { stackList } from '@/data/stack-list'
import { LocationCard } from '@/widgets/cards'
import { Footer } from '@/widgets/footer/footer'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
	return (
		<main id='about-page-container'>
			<header className='logo' />

			<section className='sections-container'>
				<h1 className='headline'>Where code meets creativity — welcome!</h1>

				<figure className='my-picture'>
					<Image
						src={'/images/me/3.jpg'}
						alt='yassir'
						fill
						style={{ objectFit: 'cover' }}
					/>
				</figure>

				<section className='__item description'>
					<h3 className='section-title'>Yassir Rouane</h3>
					<p>
						I’m a full stack developer who loves creating thoughtful, useful
						experiences on the web. I care about building things that people
						enjoy using and that make a difference, no matter how small. Outside
						of work, I’m always learning, exploring, and finding new ways to
						grow — as a developer and as a person.
					</p>
				</section>

				<section className='__item location'>
					<h3>Where</h3>
					<LocationCard />
				</section>

				<section className='__item online'>
					<h3>Online</h3>
					<nav className='socials-container'>
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
									<ArrowUpRight size={20} />
								</Link>
							)
						})}
					</nav>
				</section>

				<section className='__item stack'>
					<h3>Stack</h3>
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

				<section className='__item principles-guidelines'>
					<h3>Principles & Guidelines</h3>
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
									I treat each project as if it were my own — putting in maximum
									effort, striving to improve every result, and never settling
									for "just good enough."
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

				<section className='__item certifications'>
					<h3>
						Certifications <sup>({certificates.length})</sup>{' '}
					</h3>
					<div className='-container'>
						{certificates.map((e, i) => {
							return (
								<Link href={e.url} key={i} target='_blank'>
									<div className='__image'>
										<Image
											src={e.image}
											alt={e.title}
											fill
											style={{ objectFit: 'cover' }}
										/>
									</div>
									<div className='__details'>
										<h4>{e.title}</h4>
										<div>
											<small className='issuer'>@{e.issuer}</small>
											<hr />
											<small className='date'>{e.date}</small>
										</div>
									</div>
									<ArrowUpRight size={20} />
								</Link>
							)
						})}
					</div>
				</section>
			</section>

			<Footer hSize='2rem' aSize='1.5rem' />
		</main>
	)
}
