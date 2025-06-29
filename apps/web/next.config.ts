import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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
