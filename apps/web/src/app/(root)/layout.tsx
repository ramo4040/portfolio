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
