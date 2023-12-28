import type { Metadata } from 'next';
import './globals.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export const metadata: Metadata = {
  title: 'Suyeon Kim Portfolio',
  description: '웹 디자이너, 프론트엔드 개발자 김수연 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
