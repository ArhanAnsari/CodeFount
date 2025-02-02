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
    "Next.js 15",
    "React 19",
    "web development",
    "AI-powered IDE",
    "Gemini AI integration",
  ],
  metadataBase: new URL("https://codefount.vercel.app"),
  openGraph: {
    title: "CodeFount - Online Code Editor & Compiler",
    description:
      "Run, share, and collaborate on code snippets in multiple languages with CodeFount.",
    url: "https://codefount.vercel.app",
    siteName: "CodeFount",
    images: [
      {
        url: "https://codefount.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeFount - Online Code Editor & Compiler",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeFount - Online Code Editor & Compiler",
    description:
      "Run, share, and collaborate on code snippets in multiple languages with CodeFount.",
    images: ["https://codefount.vercel.app/og-image.png"],
    site: "@codewitharhan",
  },
  alternates: {
    canonical: "https://codefount.vercel.app",
  },
  verification: {
    google: "yv5OwqcQnHndQ4dAqAQuQeCRAs_3KAyhsJiHSyHpUQ0",
    bing: "CAB236663CA687B7AE6F7F906D3DD14E",
    yandex: "91781b197f69fc93",
  },
  icons: {
    shortcut: "/favicon.ico", // Keeps the default Next.js favicon
  },
  manifest: "/site.webmanifest",
  other: {
    "robots": "index, follow",
    "theme-color": "#1e1e2e",
    "color-scheme": "dark",
    "author": "Arhan Ansari",
    "creator": "Arhan Ansari",
    "publisher": "CodeFount",
    "rating": "general",
    "og:updated_time": new Date().toISOString(),
    "language": "English",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <head>
      <meta name="google-site-verification" content="yv5OwqcQnHndQ4dAqAQuQeCRAs_3KAyhsJiHSyHpUQ0" />
      <meta name="msvalidate.01" content="CAB236663CA687B7AE6F7F906D3DD14E" />
      <meta name="yandex-verification" content="91781b197f69fc93">
      </head>
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
