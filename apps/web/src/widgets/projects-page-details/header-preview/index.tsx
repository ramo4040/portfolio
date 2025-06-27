import './style.css'
import Image from 'next/image'
import type { FC } from 'react'

type HeaderPreviewProps = {
	src: string
	alt: string
	isVideo?: true
}

export const ProjectHeaderPreview: FC<HeaderPreviewProps> = ({
	alt,
	src,
	isVideo = false,
}) => {
	return (
		<header id='project-header-preview'>
			{!isVideo && (
				<Image src={src} alt={alt} fill sizes='100%' objectFit='cover' />
			)}
		</header>
	)
}
