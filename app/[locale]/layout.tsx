import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getMessages } from 'next-intl/server';
import LocalSwitcher from '../components/local-switcher';
import MuiThemeProvider from '../../configs/mui/MuiThemeProvider'; // Đường dẫn đến component mới

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <MuiThemeProvider>
            <header>
              <LocalSwitcher />
            </header>
            {children}
          </MuiThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}