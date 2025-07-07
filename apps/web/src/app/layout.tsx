import '@/public/styles/tokens.css'
import '@/public/styles/variables.css'
import '@/public/styles/index.css'
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${cabinet.variable} ${nunito.variable}`}>
				{children}
			</body>
		</html>
	)
}
