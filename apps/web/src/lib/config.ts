export const siteConfig = {
	name: 'Yassir Rouane',
	url: 'https://www.yassir-rouane.me',
	locale: 'en_US' as const,
	title: 'Yassir Rouane — Full Stack Developer in Casablanca, Morocco',
	titleTemplate: '%s | Yassir Rouane',
	description:
		'Full stack developer building scalable web applications with React, Next.js, Node.js, and TypeScript. Based in Casablanca, Morocco. Available for freelance projects.',
	gaId: 'G-WYQJ9WHY5X',
	twitterHandle: '@yassir_rouane',

	ogImage: {
		url: '/images/me/opengraph-image.png',
		width: 1200,
		height: 630,
		alt: 'Yassir Rouane — Full Stack Developer Portfolio',
		type: 'image/png' as const,
	},

	author: {
		name: 'Yassir Rouane',
		url: 'https://www.yassir-rouane.me',
		jobTitle: 'Full Stack Developer',
		avatar: '/images/me/3.jpg',
		location: {
			city: 'Casablanca',
			countryCode: 'MA',
		},
		social: {
			github: 'https://github.com/ramo4040',
			linkedin: 'https://www.linkedin.com/in/yassir-rouane',
			dailyDev: 'https://app.daily.dev/yassir_rouane',
		},
	},

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

	favicon: {
		sm: { url: '/images/favicon-16.png', sizes: '16x16', type: 'image/png' },
		md: { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
		lg: { url: '/images/favicon-96.png', sizes: '96x96', type: 'image/png' },
	},
} as const
