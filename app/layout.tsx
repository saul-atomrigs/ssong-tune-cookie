import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import UsernameRequired from './UsernameRequired';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '쏭-춘쿠키',
  description: '새해 운세를 음악으로 들어보세요!',
  openGraph: {
    description: '2025년 내가 원하는 것을 얻게 해줄 노래는?',
    images: [
      {
        url: '/open-graph-new.png',
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
      </body>
    </html>
  );
}
