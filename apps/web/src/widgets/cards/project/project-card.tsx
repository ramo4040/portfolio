import { ArrowUpRight } from 'lucide-react'
import './style.css'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps, FC } from 'react'

type ProjectCardProps = ComponentProps<'div'> & {
	theme?: string
	color?: string
	title?: string
	description?: string
	imageSrc: string
	imageAlt: string
	href: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
	theme,
	className,
	style,
	color,
	imageSrc,
	imageAlt,
	href,
	title,
	description,
	...props
}) => {
	return (
		<Link href={href} id='project-card-link' className={`${className} card`}>
			<div
				id='project-card'
				style={{ backgroundColor: theme, color: color, ...style }}
				{...props}
			>
				<article>
					<div className='link'>
						<div className='description'>Open Project</div>
						<div className='icon'>
							<ArrowUpRight size='30px' />
						</div>
					</div>

					<div className='image'>
						<Image src={imageSrc} alt={imageAlt} fill />
					</div>

					<div className='description'>
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				</article>
			</div>
		</Link>
	)
}
