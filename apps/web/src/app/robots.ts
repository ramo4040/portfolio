import { siteConfig } from '@/lib/config'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseUrl = siteConfig.url

	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/_next/'],
			},
			// Explicitly allow AI crawlers for GEO (Generative Engine Optimization)
			{
				userAgent: [
					'GPTBot',
					'ChatGPT-User',
					'Google-Extended',
					'PerplexityBot',
					'ClaudeBot',
					'anthropic-ai',
					'Applebot-Extended',
					'Bytespider',
					'CCBot',
					'cohere-ai',
				],
				allow: '/',
				disallow: ['/api/', '/_next/'],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	}
}
