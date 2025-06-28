import './style.css'
import Image from 'next/image'
import type { FC } from 'react'

type HeaderPreviewProps = {
	src: string
	alt: string
	isVideo?: boolean
}

export const ProjectHeaderPreview: FC<HeaderPreviewProps> = ({
	alt,
	src,
	isVideo = false,
}) => {
	return (
		<header id='project-header-preview'>
			{isVideo ? (
				<video
					src={src}
					autoPlay
					muted
					loop
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			) : (
				<Image
					src={src}
					alt={alt}
					fill
					sizes='100%'
					priority
					style={{
						objectFit: 'cover',
					}}
				/>
			)}
		</header>
	)
}
