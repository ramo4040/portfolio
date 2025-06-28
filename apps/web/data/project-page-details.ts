import type { ProjectDetailsTypes } from '@/types'

export const projectPageDetails: ProjectDetailsTypes[] = [
	{
		slug: 'rh-car-rental',
		'header-preview': '/images/projects/car-rental/car-rental-bg.png',
		headline: 'Lorem ipsum dolor sit amet',
		sections: [
			{
				type: '2-cols-text',
				content: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum bibendum metus ut ultricies. Vestibulum in tellus at nisi \n luctus dapibus vel eget ipsum. Proin placerat lorem sit amet pulvinar eleifend. Nam consequat velit quis libero dapibus, \n at finibus purus semper. Maecenas consectetur, augue sed mattis varius, nibh metus faucibus ante, quis tristique quam felis a ligula. Duis sed porta dui. Proin nec enim ut tellus elementum convallis non sed mi.',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum bibendum metus ut ultricies. Vestibulum in tellus at nisi luctus dapibus vel eget ipsum. Proin \n placerat lorem sit amet pulvinar eleifend. Nam consequat velit quis libero dapibus, at finibus purus semper. Maecenas consectetur, augue sed mattis varius, nibh metus faucibus ante, quis tristique quam felis a ligula. Duis sed porta dui. Proin nec enim ut tellus elementum convallis non sed mi.',
				],
			},
			{
				type: '2-cols-text',
				hasTitle: true,
				content: [
					'Lorem ipsum dolor',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum bibendum metus ut ultricies. Vestibulum in tellus at nisi luctus dapibus vel eget ipsum. Proin placerat lorem sit amet pulvinar eleifend. Nam consequat velit quis libero dapibus, at finibus purus semper. Maecenas consectetur, augue sed mattis varius, nibh metus faucibus ante, quis tristique quam felis a ligula. Duis sed porta dui. Proin nec enim ut tellus elementum convallis non sed mi.',
				],
			},
			{
				type: 'images',
				direction: 'row',
				content: [
					{
						alt: 'Car Rental Background',
						src: '/images/projects/car-rental/car-rental-bg.png',
					},
					{
						alt: 'Car Rental Background',
						src: '/images/projects/car-rental/car-rental-bg.png',
					},
				],
			},
		],
	},
]
