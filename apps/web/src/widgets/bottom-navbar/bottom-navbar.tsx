'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './style.css'
import { useTransitionRouter } from 'next-view-transitions'
import { useState } from 'react'

const navItems = [
	{
		id: 'home',
		href: '/',
		label: 'Works',
		ariaLabel: 'Navigate to Works page',
	},
	{
		id: 'about',
		href: '/about',
		label: 'About',
		ariaLabel: 'Navigate to About page',
	},
	{
		id: 'contact',
		href: '/contact',
		label: 'Contact',
		ariaLabel: 'Navigate to Contact section',
	},
]

export const BottomNavbar = () => {
	const pathname = usePathname()
	const [bgXposition, setBgXPosition] = useState(
		`${navItems.findIndex((item) => item.href === pathname) * 100}%`,
	)
	const router = useTransitionRouter()

	return (
		<nav id='bottom-navbar' aria-label='Main navigation'>
			<ul
				aria-orientation='horizontal'
				style={
					{
						'--bg-x-position': bgXposition,
					} as React.CSSProperties
				}
			>
				{navItems.map((item, i) => {
					const isCurrentPage = pathname === item.href
					const bgXPosition = `${100 * i}%`

					return (
						<li key={item.id}>
							<Link
								href={item.href}
								aria-label={item.ariaLabel}
								aria-current={isCurrentPage ? 'page' : undefined}
								onClick={(e) => {
									e.preventDefault()
									setBgXPosition(bgXPosition)
									router.push(item.href, {
										onTransitionReady: pageAnimation,
									})
								}}
							>
								{item.label}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

const pageAnimation = () => {
	document.documentElement.animate(
		[
			{
				opacity: 1,
				scale: 1,
				transform: 'translateY(0)',
			},
			{
				opacity: 0.5,
				scale: 0.9,
				transform: 'translateY(-200px)',
			},
		],
		{
			duration: 1000,
			easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
			fill: 'forwards',
			pseudoElement: '::view-transition-old(root)',
		},
	)

	document.documentElement.animate(
		[
			{
				transform: 'translateY(100%)',
			},
			{
				transform: 'translateY(0)',
			},
		],
		{
			duration: 1000,
			easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
			fill: 'forwards',
			pseudoElement: '::view-transition-new(root)',
		},
	)
}
