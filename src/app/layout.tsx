import './styles/globals.css';
import Header from '@/components/Header';
import { metadata } from './metadata';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-kiyori-background dark:bg-kiyori-dark-background text-kiyori-text dark:text-kiyori-dark-text">
        <Header />
        <main className="pt-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
