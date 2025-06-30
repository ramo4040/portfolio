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
import type { ComponentProps, FC } from 'react'

const accounts = [
	{
		name: 'LinkedIn',
		icon: <LinkedIn />,
		url: 'https://www.linkedin.com/in/yassir-rouane/',
	},
	{
		name: 'Discord',
		icon: <Discord />,
		url: 'discord://discordapp.com/users/1248684034209484874',
	},
	{
		name: 'daily.dev',
		icon: <DailydevLight />,
		url: 'https://app.daily.dev/yassir_rouane',
	},
	{
		name: 'GitHub',
		icon: <GitHubLight />,
		url: 'https://github.com/ramo4040',
	},
]

type Props = ComponentProps<'div'>

export const SocialAccountCard: FC<Props> = ({ ...props }) => {
	return (
		<DefaultCard {...props}>
			<DefaultCard.Badge>Social Account</DefaultCard.Badge>
			<div id='social-account-container'>
				{accounts.map((account) => {
					return (
						<div key={account.name}>
							<Link href={account.url} target='_blank'>
								{account.icon}
							</Link>
						</div>
					)
				})}
			</div>
		</DefaultCard>
	)
}
