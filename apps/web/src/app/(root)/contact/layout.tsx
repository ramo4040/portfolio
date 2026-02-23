import { createPageMetadata } from '@/lib/metadata'
import type { ReactNode } from 'react'

export const metadata = createPageMetadata({
	title: 'Contact',
	description:
		'Get in touch with Yassir Rouane for freelance web development projects. Full stack developer available for React, Next.js, Node.js, and TypeScript work.',
	path: '/contact',
})

export default function ContactLayout({ children }: { children: ReactNode }) {
	return children
}
