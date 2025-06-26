import '@/public/styles/tokens.css'
import '@/public/styles/variables.css'
import '@/public/styles/index.css'
import { BottomNavbar } from '@/widgets/bottom-navbar/bottom-navbar'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
})
export const metadata: Metadata = {
	title: 'portfolio',
	description: 'portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${roboto.className}`}>
				<BottomNavbar />
				{children}
			</body>
		</html>
	)
}
