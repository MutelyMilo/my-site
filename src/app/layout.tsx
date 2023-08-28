import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import {redirect} from "next/navigation";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hey princess!',
	description: '公主',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
