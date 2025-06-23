'use client'

import { DefaultCard } from '../default/default-card'
import './style.css'
import Link from 'next/link'

import {
	DailydevLight,
	Discord,
	GitHubLight,
	LinkedIn,
} from '@ridemountainpig/svgl-react'

const accounts = [
	{
		name: 'LinkedIn',
		icon: <LinkedIn />,
		url: 'https://www.linkedin.com/in/your-profile',
	},
	{
		name: 'Discord',
		icon: <Discord />,
		url: 'https://discord.com/users/your-profile',
	},
	{
		name: 'daily.dev',
		icon: <DailydevLight />,
		url: 'https://app.daily.dev/your-profile',
	},
	{
		name: 'GitHub',
		icon: <GitHubLight />,
		url: 'https://github.com/your-profile',
	},
]

export const SocialAccountCard = () => {
	return (
		<DefaultCard>
			<DefaultCard.Badge>Social Account</DefaultCard.Badge>
			<div id='social-account-container'>
				{accounts.map((account) => {
					return (
						<div key={account.name}>
							<Link href={account.url}>{account.icon}</Link>
						</div>
					)
				})}
			</div>
		</DefaultCard>
	)
}
