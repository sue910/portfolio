import type { Metadata } from 'next';
import './globals.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export const metadata: Metadata = {
  title: 'Suyeon Kim Portfolio',
  description: '웹 디자이너, 프론트엔드 개발자 김수연 포트폴리오',
  // metadataBase: new URL('https://acme.com'),
  // openGraph: {
  //   images: '/images/thumbnail.png',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className="min-h-screen bg-default-bg-color">
        <Header />
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
