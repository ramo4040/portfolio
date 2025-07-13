'use client'

import Link from 'next/link'
import './style.css'
import { pageAnimation } from '@/widgets/bottom-navbar/bottom-navbar'
import { X } from 'lucide-react'
import { useTransitionRouter } from 'next-view-transitions'

export const ProjectCloseButton = () => {
	const router = useTransitionRouter()

	return (
		<Link
			href='/'
			onClick={(e) => {
				e.preventDefault()
				router.push('/', { onTransitionReady: pageAnimation })
			}}
			id='project-close-button'
		>
			<X />
		</Link>
	)
}
