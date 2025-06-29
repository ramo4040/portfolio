import type { FC } from 'react'
import './style.css'
import { cn } from '@sglara/cn'
import Image from 'next/image'

type Props = {
	reverse?: boolean
	data: {
		title: string
		description: string
		image: {
			alt: string
			src: string
		}
	}
}

export const Project2ColsTextImage: FC<Props> = ({ data, reverse = false }) => {
	return (
		<div
			id='project-2-cols-text-image'
			className={cn('container', {
				reverse: reverse,
			})}
		>
			<div className='text-container'>
				<h3 className='project-details-h3'>{data.title}</h3>
				<p className='project-details-p'>{data.description}</p>
			</div>

			<div className='image-container'>
				<Image
					src={data.image.src}
					fill
					sizes='100%'
					alt={data.image.alt}
					style={{ objectFit: 'cover' }}
				/>
			</div>
		</div>
	)
}
