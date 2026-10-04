import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadata.url),
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metadata.description,
  authors: [{ name: siteConfig.name, url: siteConfig.metadata.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: siteConfig.metadata.locale,
    url: siteConfig.metadata.url,
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#111111] bg-[#f8f8f5] selection:bg-[#111111] selection:text-[#f8f8f5] min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
