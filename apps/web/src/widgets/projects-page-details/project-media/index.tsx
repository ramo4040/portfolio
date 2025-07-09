import type { FC } from 'react'
import './style.css'
import type { ProjectDetailsMediaType } from '@/types'
import { cn } from '@sglara/cn'
import Image from 'next/image'

type Props = {
	data: Pick<ProjectDetailsMediaType, 'direction' | 'content'>
}

export const ProjectMedia: FC<Props> = ({ data }) => {
	return (
		<div
			id='project-images'
			className={cn({ directionColumn: data.direction === 'col' })}
		>
			{data.content.map(({ alt, src, isVideo }, i) => {
				return (
					<figure key={i}>
						{isVideo ? (
							<video autoPlay loop muted playsInline preload='meta'>
								<source src={src} type='video/mp4' />
							</video>
						) : (
							<Image
								src={src}
								alt={alt}
								fill
								sizes='100%'
								style={{ objectFit: 'cover' }}
							/>
						)}
					</figure>
				)
			})}
		</div>
	)
}
