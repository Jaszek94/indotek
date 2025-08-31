import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jaszólos Adam - Indotek',
  description: 'Indotek Fullstack Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
