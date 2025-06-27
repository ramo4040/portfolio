import type { ProjectDetailsTypes } from '@/types'
import { CSS, HTML5, ReactLight } from '@ridemountainpig/svgl-react'

export const projectPageDetails: ProjectDetailsTypes[] = [
	{
		slug: 'rh-car-rental',
		'header-preview': '/images/projects/car-rental/car-rental-bg.png',
		headline: 'Lorem ipsum dolor sit amet',
		'2-cols-text': [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum bibendum metus ut ultricies. Vestibulum in tellus at nisi \n luctus dapibus vel eget ipsum. Proin placerat lorem sit amet pulvinar eleifend. Nam consequat velit quis libero dapibus, \n at finibus purus semper. Maecenas consectetur, augue sed mattis varius, nibh metus faucibus ante, quis tristique quam felis a ligula. Duis sed porta dui. Proin nec enim ut tellus elementum convallis non sed mi.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum bibendum metus ut ultricies. Vestibulum in tellus at nisi luctus dapibus vel eget ipsum. Proin \n placerat lorem sit amet pulvinar eleifend. Nam consequat velit quis libero dapibus, at finibus purus semper. Maecenas consectetur, augue sed mattis varius, nibh metus faucibus ante, quis tristique quam felis a ligula. Duis sed porta dui. Proin nec enim ut tellus elementum convallis non sed mi.',
		],
		'2-cols-image': [
			'/images/projects/car-rental/car-rental-bg.png',
			'/images/projects/car-rental/car-rental-bg.png',
		],
		'tech-stack': [
			{ title: 'HTML', icon: HTML5 },
			{ title: 'CSS', icon: CSS },
			{ title: 'React.js', icon: ReactLight },
		],
	},
]
