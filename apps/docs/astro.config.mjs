import starlight from '@astrojs/starlight'
// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Portfolio Documentation',
			description:
				'Comprehensive documentation for the portfolio project architecture.',
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'overview' },
						{ label: 'Project Structure', slug: 'project-structure' },
					],
				},
				{
					label: 'MDX Implementation',
					items: [
						{ label: 'MDX Overview', slug: 'mdx/overview' },
						{ label: 'How MDX Works', slug: 'mdx/how-it-works' },
						{ label: 'Custom Components', slug: 'mdx/custom-components' },
					],
				},
			],
		}),
	],
})
