import '@/public/styles/tokens.css'
import '@/public/styles/variables.css'
import '@/public/styles/index.css'
import { BottomNavbar } from '@/widgets/bottom-navbar/bottom-navbar'
import type { Metadata } from 'next'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<BottomNavbar />
			{children}
		</>
	)
}
