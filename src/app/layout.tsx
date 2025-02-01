import type { Metadata } from "next";
import { Karla } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/CustomCursor";
import { Cursor } from "@/components/CursorFollower";
import { Analytics } from "@vercel/analytics/react";

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
const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const metadata: Metadata = {
  title: "CodeFount - Online Code Editor & Compiler",
  description:
    "CodeFount is a powerful online code editor and compiler supporting multiple languages. Share, run, and collaborate on code snippets easily.",
  keywords: [
    "online code editor",
    "code compiler",
    "JavaScript IDE",
    "code snippets",
    "programming",
    "code sharing",
  ],
  metadataBase: new URL("https://codefount.com"),
  openGraph: {
    title: "CodeFount - Online Code Editor & Compiler",
    description:
      "Run, share, and collaborate on code snippets in multiple languages with CodeFount.",
    url: "https://codefount.com",
    siteName: "CodeFount",
    images: [
      {
        url: "https://codefount.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeFount - Online Code Editor & Compiler",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeFount - Online Code Editor & Compiler",
    description:
      "Run, share, and collaborate on code snippets in multiple languages with CodeFount.",
    images: ["https://codefount.com/og-image.png"],
  },
  alternates: {
    canonical: "https://codefount.com",
  },
  other: {
    "robots": "index, follow",
    "theme-color": "#1e1e2e",
    "author": "Arhan Ansari",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} ${karla.className} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider>
            <CustomCursor />
            <Cursor />
            {children}
          </ConvexClientProvider>

          <Footer />
          <Toaster />
        </body>
      </html>
      <Analytics />
    </ClerkProvider>
  );
}
