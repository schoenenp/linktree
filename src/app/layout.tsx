import "@/styles/globals.css";

import type { Metadata } from "next";
import { Baloo_2, Cairo, Geist } from "next/font/google";

export const metadata: Metadata = {
	title: "PIRROT.DE - Industrieller Druck und Beschriftung",
	description:
		"Digitaldruck Pirrot GmbH - Ihr professioneller Dienstleister für industriellen Druck und Beschriftungsservices in allen Bereichen wie Flugzeuge, Busse, Straßenbahnen, Autos und Gebäude.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const baloo = Baloo_2({
	subsets: ["latin"],
	variable: "--font-baloo",
});

const cairo = Cairo({
	subsets: ["latin"],
	variable: "--font-cairo",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${geist.variable} ${baloo.variable} ${cairo.variable}`}
			lang="de"
		>
			<body>{children}</body>
		</html>
	);
}
