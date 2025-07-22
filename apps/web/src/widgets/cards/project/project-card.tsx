'use client'

import { ArrowUpRight } from 'lucide-react'
import './style.css'
import type { Project } from '@/types'
import { pageAnimation } from '@/widgets/bottom-navbar/bottom-navbar'
import { cn } from '@sglara/cn'
import { useTransitionRouter } from 'next-view-transitions'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps, FC } from 'react'

type ProjectCardProps = ComponentProps<'div'> & {
	project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({
	project,
	className,
	style,
	...props
}) => {
	const { theme, color, imageSrc, imageAlt, href, title, description } = project
	const router = useTransitionRouter()

	return (
		<article
			id='project-card'
			className={cn('card', className)}
			style={{ backgroundColor: theme, color: color, ...style }}
			{...props}
		>
			<Link
				href={href}
				onClick={(e) => {
					e.preventDefault()
					router.push(href, {
						onTransitionReady: pageAnimation,
					})
				}}
				id='project-card-link'
				aria-label={`View ${title} project details`}
			>
				<header>
					<span className='description' aria-hidden='true'>
						Open Project
					</span>
					<div className='icon' aria-hidden='true'>
						<ArrowUpRight size='30px' />
					</div>
				</header>

				<figure role='img' aria-label={imageAlt}>
					<Image src={imageSrc} alt={imageAlt} fill priority sizes='100vw' />
				</figure>

				<section>
					<span />
					<div>
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
				</section>
			</Link>
		</article>
	)
}
