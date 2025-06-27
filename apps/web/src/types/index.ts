import type { ComponentProps, ComponentType } from 'react'

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

// --------------------------------

export type ProjectDetailsTechStackType = {
	title: string
	icon: ComponentType
}[]

export type ProjectDetails2ColsImageType = {
	alt: string
	src: string
}[]

export type ProjectDetailsTypes = {
	slug: string
	'header-preview': string
	headline: string
	'2-cols-text': string[]
	'tech-stack': ProjectDetailsTechStackType
	'2-cols-image': ProjectDetails2ColsImageType
}

export type ProjectDetailsEntries = [
	['slug', string],
	['header-preview', string],
	['headline', string],
	['2-cols-text', string[]],
	['2-cols-image', ProjectDetails2ColsImageType],
	['tech-stack', ProjectDetailsTechStackType],
]
