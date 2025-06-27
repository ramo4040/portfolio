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

export type ProjectDetailsTypes = {
	slug: string
	'header-preview': string
	headline: string
	'2-cols-text': string[]
	'tech-stack': ProjectDetailsTechStackType
	'2-cols-image': string[]
}

export type ProjectDetailsEntries = [
	['slug', string],
	['header-preview', string],
	['headline', string],
	['2-cols-text', string[]],
	['2-cols-image', string[]],
	['tech-stack', ProjectDetailsTechStackType],
]
