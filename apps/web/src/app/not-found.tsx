'use client'

import './style.css'
import { Button } from '@/components'
import { pageAnimation } from '@/widgets/bottom-navbar/bottom-navbar'
import { Logo } from '@/widgets/logo/logo'
import { ArrowLeft, Home } from 'lucide-react'
import { useTransitionRouter } from 'next-view-transitions'
import Link from 'next/link'

export default function NotFound() {
	const router = useTransitionRouter()

	return (
		<main className='not-found-container'>
			<Logo />

			<div className='content'>
				<h1 className='error-code'>404</h1>
				<div>
					<h2 className='error-title'>Page Not Found</h2>
					<p className='error-description'>
						This is not the page you are looking for
					</p>
				</div>

				<div className='actions'>
					<Button
						className='btn-full'
						onClick={(e) => {
							e.preventDefault()
							router.push('/', {
								onTransitionReady: pageAnimation,
							})
						}}
					>
						Back
					</Button>
				</div>
			</div>
		</main>
	)
}
