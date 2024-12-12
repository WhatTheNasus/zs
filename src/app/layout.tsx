// src/app/layout.tsx

import { Metadata } from 'next';
import "./globals.css";
import Navbar from '@/components/NavBar';
import AuthProvider from '../components/AuthProvider';
import { ThemeProvider } from '@/components/ThemeProvider'; // Import the new ThemeProvider

export const metadata: Metadata = {
  title: 'ZS',
  description: 'Created by students of SPŠE Zochova',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <ThemeProvider> {/* Wrap everything with ThemeProvider for consistent theming */}
          <AuthProvider>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <main style={{ flexGrow: 1 }}>
                {children}
              </main>
            </div>
            <Navbar /> {/* Navbar has access to theme context */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
