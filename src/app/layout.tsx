import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from "next/script";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CueCue',
  description: '呵呵',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head>
            <script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js" async></script>
        </Head>
      <body className={inter.className}>
      {children}
      <Analytics />
      </body>
    </html>
  )
}
