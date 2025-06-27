import type { FC } from 'react'
import './style.css'
import type { ProjectDetails2ColsImageType } from '@/types'
import Image from 'next/image'

type Props = {
	images: ProjectDetails2ColsImageType
}

export const Project2ColsImage: FC<Props> = ({ images }) => {
	return (
		<figure id='project-2-cols-image'>
			{images.map(({ alt, src }, i) => {
				return (
					<div key={i}>
						<Image src={src} alt={alt} fill sizes='100%' objectFit='cover' />
					</div>
				)
			})}
		</figure>
	)
}
