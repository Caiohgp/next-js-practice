import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import { Providers } from "./providers";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
    template: '%s | Caio Pereira',
    default: 'Caio Pereira'
  },
  description: "Caio's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >
          <Providers>
            <Menu/>
            <main className="mt-10" >
              {children}
            </main>
          </Providers>
      </body>
    </html>
  );
}
