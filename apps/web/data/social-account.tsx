import {
	DailydevLight,
	Discord,
	GitHubLight,
	LinkedIn,
} from '@ridemountainpig/svgl-react'

export const socialAccounts = [
	{
		name: 'LinkedIn',
		icon: <LinkedIn />,
		url: 'https://www.linkedin.com/in/yassir-rouane/',
		id: 'yassir-rouane',
	},
	{
		name: 'Discord',
		icon: <Discord />,
		id: 'yassir.rouane',
		url: 'discord://discordapp.com/users/1248684034209484874',
	},
	{
		name: 'daily.dev',
		icon: <DailydevLight />,
		id: 'yassir_rouane',
		url: 'https://app.daily.dev/yassir_rouane',
	},
	{
		name: 'GitHub',
		id: 'ramo4040',
		icon: <GitHubLight />,
		url: 'https://github.com/ramo4040',
	},
]
