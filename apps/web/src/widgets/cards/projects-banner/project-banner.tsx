import type { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps, FC } from 'react'

export type ProjectBannerProps = ComponentProps<'article'> & {
	project: Project
	degree: number
}

export const ProjectBanner: FC<ProjectBannerProps> = ({
	project,
	degree,
	...props
}) => {
	const { title, href, imageAlt, imageBannerSrc } = project

	return (
		<article
			className='project-banner-card'
			style={
				{
					'--project-banner-bg': project.theme,
					'--project-banner-rotate': `${degree}deg`,
				} as React.CSSProperties
			}
			{...props}
		>
			<Link href={href}>
				<Image src={imageBannerSrc} fill alt={imageAlt} />
				<h1>{title}</h1>
			</Link>
		</article>
	)
}
