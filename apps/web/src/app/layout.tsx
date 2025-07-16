import '@/public/styles/tokens.css'
import '@/public/styles/variables.css'
import '@/public/styles/index.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'

const cabinet = localFont({
	src: '../../public/font/CabinetGrotesk-Medium.woff',
	variable: '--font-cabinet',
})

const nunito = Nunito({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-nunito',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://www.yassir-rouane.me'),
	title: 'Yassir Rouane - Full Stack Developer Portfolio',
	description:
		'Explore my portfolio showcasing innovative web applications and full-stack development projects. Available for work.',
	keywords: [
		'Yassir Rouane',
		'full stack developer',
		'full-stack web developer',
		'MERN stack portfolio',
		'React.js developer',
		'TypeScript full-stack',
		'Node.js developer',
		'Laravel developer',
		'responsive web design',
		'web developer Casablanca',
		'MERN stack developer portfolio examples',
		'freelance full-stack developer available',
	],
	authors: [{ name: 'Yassir Rouane', url: 'https://www.yassir-rouane.me' }],
	// Creator information
	creator: 'Yassir Rouane',
	// Language and content classification
	category: 'technology',

	// Open Graph tags for social media sharing
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.yassir-rouane.me',
		title: 'Yassir Rouane - Full Stack Developer Portfolio',
		description:
			'Explore my portfolio showcasing innovative web applications and full-stack development projects. Available for work.',
		siteName: 'Yassir Rouane Portfolio',
		images: [
			{
				url: '/images/me/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'Yassir Rouane Portfolio - Full Stack Developer',
				type: 'image/png',
			},
		],
	},

	// Twitter Card optimization
	twitter: {
		card: 'summary_large_image',
		site: '@yassir_rouane',
		creator: '@yassir_rouane',
		title: 'Yassir Rouane - Full Stack Developer Portfolio',
		description:
			'Explore innovative web applications and modern designs. Available for projects.',
		images: {
			url: '/images/me/opengraph-image.png',
			alt: 'Yassir Rouane Portfolio Preview',
		},
	},

	// Robots configuration for SEO
	robots: {
		index: true,
		follow: true,
		noarchive: false,
		nosnippet: false,
		noimageindex: false,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	// Canonical URL to prevent duplicate content
	alternates: {
		canonical: 'https://www.yassir-rouane.me',
	},

	// Structured data for rich snippets
	other: {
		'application-name': 'Yassir Rouane Portfolio',
		'mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-title': 'Yassir Rouane Portfolio',
	},

	icons: {
		icon: [
			{ url: '/images/favicon-16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/images/favicon-96.png', sizes: '96x96', type: 'image/png' },
		],
		apple: [
			{ url: '/images/favicon-96.png', sizes: '180x180', type: 'image/png' },
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang='en' suppressHydrationWarning>
				<head>
					{/* Additional structured data */}
					<script
						type='application/ld+json'
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'Person',
								name: 'Yassir Rouane',
								jobTitle: 'Full Stack Developer',
								url: 'https://www.yassir-rouane.me',
								sameAs: [
									'https://github.com/ramo4040',
									'https://www.linkedin.com/in/yassir-rouane',
								],
								knowsAbout: ['Web Development', 'Full Stack Development'],
							}),
						}}
					/>
				</head>
				<body
					className={`${cabinet.variable} ${nunito.variable}`}
					suppressHydrationWarning
				>
					{children}
				</body>
				<GoogleAnalytics gaId='G-WYQJ9WHY5X' />
			</html>
		</ViewTransitions>
	)
}
