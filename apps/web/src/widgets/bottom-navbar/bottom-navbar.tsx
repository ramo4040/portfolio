'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './style.css'
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
	console.log(pathname)

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
								onClick={() => setBgXPosition(bgXPosition)}
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
