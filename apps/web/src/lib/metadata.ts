import type { Metadata } from 'next'
import { siteConfig } from './config'

export type { Metadata }

type OgImage = {
	url: string
	width: number
	height: number
	alt: string
	type: string
}

type PageMetadataOptions = {
	title: string
	description: string
	path: string
	ogType?: 'website' | 'article'
	ogImage?: OgImage
}

export function createPageMetadata({
	title,
	description,
	path,
	ogType = 'website',
	ogImage = siteConfig.ogImage,
}: PageMetadataOptions): Metadata {
	const url = `${siteConfig.url}${path}`

	return {
		title,
		description,
		openGraph: {
			type: ogType,
			locale: siteConfig.locale,
			url,
			siteName: siteConfig.name,
			title,
			description,
			images: [ogImage],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage.url],
		},
		alternates: {
			canonical: path,
		},
	}
}
