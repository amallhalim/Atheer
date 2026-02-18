import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amal Halim - Frontend Engineer",
  description: "Frontend Engineer with 3+ years of experience building accessible, pixel-perfect digital experiences for the web using React and modern JavaScript.",
  keywords: ["Amal Halim", "Frontend Engineer", "React", "JavaScript", "Web Development", "UI/UX", "Portfolio"],
  authors: [{ name: "Amal Halim" }],
  creator: "Amal Halim",
  publisher: "Atheer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://atheer.dev/",
  },
  openGraph: {
    type: "website",
    title: "Amal Halim - Frontend Engineer",
    description: "Frontend Engineer with 3+ years of experience building accessible, pixel-perfect digital experiences for the web.",
    url: "https://atheer.dev/",
    siteName: "Atheer",
    locale: "en_US",
    images: [
      {
        url: "https://atheer.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amal Halim - Frontend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amalhalim",
    creator: "@amalhalim",
    title: "Amal Halim - Frontend Engineer",
    description: "Frontend Engineer with 3+ years of experience building accessible, pixel-perfect digital experiences for the web.",
    images: ["https://atheer.dev/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a192f" },
  ],
};

const Spotlight = dynamic(() => import("@/components/layout/Spotlight"), { loading: () => <p>Loading...</p> })
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="h-screen overflow-hidden" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full overflow-hidden">
            <Spotlight />
            <Header />
            <main className="flex-1 overflow-y-auto lg:overflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
