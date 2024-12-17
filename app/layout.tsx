import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import UsernameRequired from './UsernameRequired';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '쏭-춘쿠키',
  description: '새해 운세를 음악으로 들어보세요!',
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
      <body className={`${inter.className} antialiased`}>
        <UsernameRequired>{children}</UsernameRequired>
      </body>
    </html>
  );
}
