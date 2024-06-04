import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Next Calendar",
	description: "A simple javascript calendar",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${inter.className} ${inter.variable}`}>
			<body>{children}</body>
		</html>
	);
}
