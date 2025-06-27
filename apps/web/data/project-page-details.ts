import { CSS, HTML5, ReactLight } from '@ridemountainpig/svgl-react'
import type { ComponentType } from 'react'

type TechStackType = { title: string; icon: ComponentType }[]

export type ProjectDetailsTypes = {
	slug: string
	'header-preview': string
	headline: string
	'tech-stack': TechStackType
}

export type ProjectDetailsEntries = [
	['slug', string],
	['header-preview', string],
	['headline', string],
	['tech-stack', TechStackType],
]

export const projectPageDetails: ProjectDetailsTypes[] = [
	{
		slug: 'rh-car-rental',
		'header-preview': '/images/projects/car-rental/car-rental-bg.png',
		headline: 'RH Car Rental',
		'tech-stack': [
			{ title: 'HTML', icon: HTML5 },
			{ title: 'CSS', icon: CSS },
			{ title: 'React.js', icon: ReactLight },
		],
	},
]
