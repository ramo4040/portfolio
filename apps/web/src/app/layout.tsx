import '@/public/styles/tokens.css'
import '@/public/styles/variables.css'
import '@/public/styles/index.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
	],
}

export const metadata: Metadata = {
	metadataBase: new URL('https://www.yassir-rouane.me'),
	title: {
		default: 'Yassir Rouane — Full Stack Developer in Casablanca, Morocco',
		template: '%s | Yassir Rouane',
	},
	description:
		'Full stack developer building scalable web applications with React, Next.js, Node.js, and TypeScript. Based in Casablanca, Morocco. Available for freelance projects.',
	keywords: [
		'Yassir Rouane',
		'full stack developer',
		'web developer Morocco',
		'React developer',
		'Next.js developer',
		'TypeScript developer',
		'Node.js developer',
		'freelance developer Casablanca',
		'full-stack web developer',
		'Laravel developer',
		'MongoDB developer',
	],
	authors: [{ name: 'Yassir Rouane', url: 'https://www.yassir-rouane.me' }],
	creator: 'Yassir Rouane',
	category: 'technology',

	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.yassir-rouane.me',
		title: 'Yassir Rouane — Full Stack Developer',
		description:
			'Full stack developer building scalable web applications with React, Next.js, Node.js, and TypeScript. Available for freelance projects.',
		siteName: 'Yassir Rouane',
		images: [
			{
				url: '/images/me/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'Yassir Rouane — Full Stack Developer Portfolio',
				type: 'image/png',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		site: '@yassir_rouane',
		creator: '@yassir_rouane',
		title: 'Yassir Rouane — Full Stack Developer',
		description:
			'Full stack developer building scalable web apps with React, Next.js, and TypeScript. Available for projects.',
		images: {
			url: '/images/me/opengraph-image.png',
			alt: 'Yassir Rouane Portfolio Preview',
		},
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	alternates: {
		canonical: '/',
	},

	other: {
		'application-name': 'Yassir Rouane',
		'mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-title': 'Yassir Rouane',
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
					<script
						type='application/ld+json'
						// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data for SEO
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'https://schema.org',
								'@graph': [
									{
										'@type': 'WebSite',
										'@id': 'https://www.yassir-rouane.me/#website',
										url: 'https://www.yassir-rouane.me',
										name: 'Yassir Rouane',
										description:
											'Full stack developer building scalable web applications with React, Next.js, Node.js, and TypeScript.',
										inLanguage: 'en-US',
										publisher: {
											'@id': 'https://www.yassir-rouane.me/#person',
										},
									},
									{
										'@type': 'Person',
										'@id': 'https://www.yassir-rouane.me/#person',
										name: 'Yassir Rouane',
										jobTitle: 'Full Stack Developer',
										url: 'https://www.yassir-rouane.me',
										image: 'https://www.yassir-rouane.me/images/me/3.jpg',
										description:
											'Full stack developer based in Casablanca, Morocco. Specializes in React, Next.js, Node.js, TypeScript, and Laravel.',
										address: {
											'@type': 'PostalAddress',
											addressLocality: 'Casablanca',
											addressCountry: 'MA',
										},
										sameAs: [
											'https://github.com/ramo4040',
											'https://www.linkedin.com/in/yassir-rouane',
											'https://app.daily.dev/yassir_rouane',
										],
										knowsAbout: [
											'React',
											'Next.js',
											'TypeScript',
											'Node.js',
											'Laravel',
											'MongoDB',
											'Full Stack Development',
											'Web Development',
										],
									},
								],
							}),
						}}
					/>
				</head>
				<body
					className={`${cabinet.variable} ${nunito.variable}`}
					suppressHydrationWarning
				>
					{children}
					<GoogleAnalytics gaId='G-WYQJ9WHY5X' />
				</body>
			</html>
		</ViewTransitions>
	)
}
