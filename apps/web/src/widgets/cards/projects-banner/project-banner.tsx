import type { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps, FC } from 'react'

export type ProjectBannerProps = ComponentProps<'article'> & {
	project: Project
}

export const ProjectBanner: FC<ProjectBannerProps> = ({
	project,
	...props
}) => {
	const { title, href, imageAlt, imageBannerSrc } = project

	return (
		<article className='project-banner-card' {...props}>
			<Link href={href}>
				<Image src={imageBannerSrc} fill alt={imageAlt} />
				<h1>{title}</h1>
			</Link>
		</article>
	)
}
