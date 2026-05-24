import { Cormorant, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Tuleen — Strategic Marketing & Brand Architecture',
  description: 'Award-winning marketing professional crafting brand narratives that define industries and move people.',
  keywords: ['marketing', 'brand strategy', 'digital marketing', 'campaign management', 'content strategy'],
  openGraph: {
    title: 'Tuleen — Strategic Marketing & Brand Architecture',
    description: 'Crafting brand narratives that define industries and move people.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black text-cream font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
