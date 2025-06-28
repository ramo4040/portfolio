import type { FC } from 'react'
import './style.css'
import type { ProjectDetailsImagesType } from '@/types'
import { cn } from '@sglara/cn'
import Image from 'next/image'

type Props = {
	data: Pick<ProjectDetailsImagesType, 'direction' | 'content'>
}

export const ProjectImages: FC<Props> = ({ data }) => {
	return (
		<figure
			id='project-images'
			className={cn({ directionColumn: data.direction === 'col' })}
		>
			{data.content.map(({ alt, src }, i) => {
				return (
					<div key={i}>
						<Image
							src={src}
							alt={alt}
							fill
							sizes='100%'
							style={{ objectFit: 'cover' }}
						/>
					</div>
				)
			})}
		</figure>
	)
}
