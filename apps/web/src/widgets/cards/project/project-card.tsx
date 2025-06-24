import { ArrowUpRight } from 'lucide-react'
import './style.css'
import type { Project } from '@/types'
import { cn } from '@sglara/cn'
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

	return (
		<article
			id='project-card'
			className={cn('card', className)}
			style={{ backgroundColor: theme, color: color, ...style }}
			{...props}
		>
			<Link
				href={href}
				id='project-card-link'
				aria-label={`View ${title} project details`}
			>
				<header className='link'>
					<span className='description' aria-hidden='true'>
						Open Project
					</span>
					<div className='icon' aria-hidden='true'>
						<ArrowUpRight size='30px' />
					</div>
				</header>

				<figure className='image' role='img' aria-label={imageAlt}>
					<Image src={imageSrc} alt={imageAlt} fill />
				</figure>

				<section className='description'>
					<h2>{title}</h2>
					<p>{description}</p>
				</section>
			</Link>
		</article>
	)
}
