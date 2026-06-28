'use client'

import Link from 'next/link'
import './style.css'
import { X } from 'lucide-react'
import { useTransitionRouter } from 'next-view-transitions'

export const ProjectCloseButton = () => {
	const router = useTransitionRouter()

	return (
		<Link
			href='/'
			onClick={(e) => {
				e.preventDefault()
				router.push('/')
			}}
			id='project-close-button'
			aria-label='Close project and return to homepage'
		>
			<X />
		</Link>
	)
}
