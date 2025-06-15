import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../index.css";

const roboto = Roboto({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});
export const metadata: Metadata = {
	title: "portfolio",
	description: "portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${roboto.className} antialiased`}>{children}</body>
		</html>
	);
}
