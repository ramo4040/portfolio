'use client'

import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import './style.css'
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
			<HugeiconsIcon icon={Cancel01Icon} />
		</Link>
	)
}
