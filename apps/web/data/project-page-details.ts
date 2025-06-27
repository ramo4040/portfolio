import { CSS, HTML5, ReactLight } from '@ridemountainpig/svgl-react'
import type { ComponentType } from 'react'

export type ProjectDetails = {
	slug: string
	'header-preview': string
	headline: string
	'tech-stack': {
		title: string
		icon: ComponentType
	}[]
}[]

export const projectPageDetails: ProjectDetails = [
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
