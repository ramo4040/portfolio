import '@/public/styles/variables.css'
import '@/public/styles/tokens.css'
import '@/public/styles/index.css'
import { siteConfig } from '@/lib/config'
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
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
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
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: siteConfig.titleTemplate,
	},
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
	creator: siteConfig.author.name,
	category: 'technology',

	openGraph: {
		type: 'website',
		locale: siteConfig.locale,
		url: siteConfig.url,
		title: `${siteConfig.author.name} — Full Stack Developer`,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [{ ...siteConfig.ogImage }],
	},

	twitter: {
		card: 'summary_large_image',
		site: siteConfig.twitterHandle,
		creator: siteConfig.twitterHandle,
		title: `${siteConfig.author.name} — Full Stack Developer`,
		description:
			'Full stack developer building scalable web apps with React, Next.js, and TypeScript. Available for projects.',
		images: {
			url: siteConfig.ogImage.url,
			alt: `${siteConfig.author.name} Portfolio Preview`,
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
		'application-name': siteConfig.name,
		'mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-title': siteConfig.name,
	},

	icons: {
		icon: [
			{ ...siteConfig.favicon.sm },
			{ ...siteConfig.favicon.md },
			{ ...siteConfig.favicon.lg },
		],
		apple: [
			{ url: siteConfig.favicon.lg.url, sizes: '180x180', type: 'image/png' },
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
			<html
				lang='en'
				className={`${cabinet.variable} ${nunito.variable}`}
				suppressHydrationWarning
			>
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
				<body suppressHydrationWarning>
					{children}
					<GoogleAnalytics gaId={siteConfig.gaId} />
				</body>
			</html>
		</ViewTransitions>
	)
}
