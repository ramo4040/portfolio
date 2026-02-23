import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Get in touch with Yassir Rouane for freelance web development projects. Full stack developer available for React, Next.js, Node.js, and TypeScript work.',
	openGraph: {
		title: 'Contact Yassir Rouane — Full Stack Developer',
		description:
			'Get in touch for freelance web development projects. Available for React, Next.js, Node.js, and TypeScript work.',
		url: 'https://www.yassir-rouane.me/contact',
	},
	alternates: {
		canonical: '/contact',
	},
}

export default function ContactLayout({ children }: { children: ReactNode }) {
	return children
}
