import './globals.css';
import BottomNav from './components/BottomNav';

export const metadata = {
  title: 'CCOI Asia 2026',
  description: 'Conference PWA for CCOI Asia 2026',
  icons: {
    icon: [
      { url: '/ccoi-asia-2026/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/ccoi-asia-2026/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/ccoi-asia-2026/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/ccoi-asia-2026/manifest.json" />
        <meta name="theme-color" content="#2E5B8D" />
      </head>
      <body className="flex flex-col min-h-screen bg-bgLight">
        <div className="flex-1 pb-24">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
