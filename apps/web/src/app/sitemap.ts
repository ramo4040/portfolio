import { listProject } from '@/data/projects-list'
import { siteConfig } from '@/lib/config'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = siteConfig.url

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date('2026-02-23'),
			changeFrequency: 'monthly',
			priority: 1,
			images: [`${baseUrl}/images/me/opengraph-image.png`],
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date('2026-02-23'),
			changeFrequency: 'monthly',
			priority: 0.8,
			images: [`${baseUrl}/images/me/3.jpg`],
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date('2026-02-23'),
			changeFrequency: 'yearly',
			priority: 0.6,
		},
	]

	const projectRoutes: MetadataRoute.Sitemap = listProject.map((project) => ({
		url: `${baseUrl}${project.href}`,
		lastModified: new Date('2026-02-23'),
		changeFrequency: 'monthly',
		priority: 0.9,
		images: [`${baseUrl}${project.imageSrc}`],
	}))

	return [...staticRoutes, ...projectRoutes]
}
