import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { seoConfig } from "@/lib/seo";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: "DeepVariance Research Lab" }],
  creator: "DeepVariance Research Lab",
  publisher: "DeepVariance Research Lab",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.url,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: seoConfig.siteName,
    images: [
      {
        url: `${seoConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: seoConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [`${seoConfig.url}/og-image.png`],
    creator: "@deepvariance",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
