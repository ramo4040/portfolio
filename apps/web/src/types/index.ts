import type { ComponentProps } from 'react'

export type Project = {
	id: number
	theme: string
	color?: string
	title?: string
	description?: string
	imageSrc: string
	imageBannerSrc: string
	imageAlt: string
	href: string
}
