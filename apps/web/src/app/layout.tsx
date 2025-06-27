import '@/public/styles/tokens.css'
import '@/public/styles/variables.css'
import '@/public/styles/index.css'
import localFont from 'next/font/local'

const myFont = localFont({
	src: '../../public/font/Saans-Medium.woff2',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${myFont.className}`}>{children}</body>
		</html>
	)
}
