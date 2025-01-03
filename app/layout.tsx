import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import UsernameRequired from './UsernameRequired';
import KakaoScript from './KakaoScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '나를 대박나게 해줄 새해 노래 듣고 2025년 시작하세요',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '나를 대박나게 해줄 새해 노래 듣고 2025년 시작하세요',
    images: [
      {
        url: '/open-graph-original.png',
        width: 1200,
        height: 630,
        alt: '쏭-춘쿠키',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        style={{
          background:
            'linear-gradient(180deg, #EC7D86 -29.56%, #EF7052 37.77%, #F3B06C 100%)',
        }}
      >
        <UsernameRequired>{children}</UsernameRequired>
        <Analytics />
      </body>
      <KakaoScript />
    </html>
  );
}
