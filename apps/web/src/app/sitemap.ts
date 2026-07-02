import { listProject } from '@/data/projects-list'
import { siteConfig } from '@/lib/config'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = siteConfig.url
	const lastModified = {
		home: new Date('2026-07-02'),
		about: new Date('2026-07-02'),
		contact: new Date('2026-07-02'),
		projects: new Date('2026-07-02'),
	}

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: lastModified.home,
			images: [`${baseUrl}/images/me/opengraph-image.png`],
		},
		{
			url: `${baseUrl}/about`,
			lastModified: lastModified.about,
			images: [`${baseUrl}/images/me/3.webp`],
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: lastModified.contact,
		},
	]

	const projectRoutes: MetadataRoute.Sitemap = listProject.map((project) => ({
		url: `${baseUrl}${project.href}`,
		lastModified: lastModified.projects,
		images: [`${baseUrl}${project.imageSrc}`],
	}))

	return [...staticRoutes, ...projectRoutes]
}
