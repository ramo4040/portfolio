'use client'

import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import './style.css'
import type { Project } from '@/types'
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
					router.push(href)
				}}
				id='project-card-link'
				aria-label={`View ${title} project details`}
			>
				<header>
					<span className='description' aria-hidden='true'>
						Open Project
					</span>
					<div className='icon' aria-hidden='true'>
						<HugeiconsIcon icon={ArrowUpRight01Icon} size='30px' />
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
