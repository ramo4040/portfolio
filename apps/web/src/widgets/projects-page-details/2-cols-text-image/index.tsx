import type { FC } from 'react'
import './style.css'
import { cn } from '@sglara/cn'
import Image from 'next/image'

type Props = {
	reverse?: boolean
	data: {
		text: string
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
			className={cn({
				reverse: reverse,
			})}
		>
			<div className='text-container'>
				<p>{data.text}</p>
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
