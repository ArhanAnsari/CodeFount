import type { Metadata } from "next";
import { Karla } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/CustomCursor";
import { Cursor } from "@/components/CursorFollower";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const karla = Karla({ subsets: ['latin'], variable: "--font-karla" })

export const metadata: Metadata = {
  title: "CodeFount",
  description: "Share and run code snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
        suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} ${karla.className} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider><CustomCursor /><Cursor />{children}</ConvexClientProvider>

          <Footer />

          <Toaster />
        </body>
      </html>
      <Analytics />
    </ClerkProvider>
  );
}

// https://emkc.org/api/v2/piston/runtimes
