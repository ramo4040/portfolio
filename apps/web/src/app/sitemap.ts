import { listProject } from '@/data/projects-list'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://yassir-rouane.me'

	// Static routes
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]

	// Dynamic project routes
	const projectRoutes: MetadataRoute.Sitemap = listProject.map((project) => ({
		url: `${baseUrl}${project.href}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.7,
	}))

	return [...staticRoutes, ...projectRoutes]
}
