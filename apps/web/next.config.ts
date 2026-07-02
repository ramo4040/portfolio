import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	async headers() {
		const csp = [
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
			"style-src 'self' 'unsafe-inline'",
			"img-src 'self' data: blob: https://www.google-analytics.com https://pub-c61f5269c4904bd7ac93d0d05abdcc25.r2.dev",
			"font-src 'self' data:",
			"connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://api.groq.com https://api.pinecone.io https://pub-c61f5269c4904bd7ac93d0d05abdcc25.r2.dev",
			"media-src 'self' https://pub-c61f5269c4904bd7ac93d0d05abdcc25.r2.dev",
			"frame-ancestors 'none'",
			"base-uri 'self'",
			"form-action 'self'",
		].join('; ')

		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: csp,
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value:
							'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
					},
				],
			},
		]
	},
	async rewrites() {
		return [
			{
				source: '/media/:path*',
				destination:
					'https://pub-c61f5269c4904bd7ac93d0d05abdcc25.r2.dev/:path*',
			},
		]
	},
}

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
})

export default withMDX(nextConfig)
