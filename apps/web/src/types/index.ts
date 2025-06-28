import type { ComponentType } from 'react'

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

export type ProjectDetailsImagesType = {
	type: 'images'
	direction: 'col' | 'row'
	content: {
		alt: string
		src: string
	}[]
}
export type ProjectSectionType =
	| {
			type: '2-cols-text'
			hasTitle?: boolean
			content: string[]
	  }
	| ProjectDetailsImagesType

export type ProjectDetailsTypes = {
	slug: string
	'header-preview': string
	headline: string
	sections: ProjectSectionType[]
}
