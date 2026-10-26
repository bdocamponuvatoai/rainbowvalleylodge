import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isIndexable, siteUrl } from "@/config/deployment";
import { site } from "@/config/site";
import "@/styles/globals.css";

const inter = localFont({
  src: "../assets/fonts/inter.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
  // Glyphs Inter lacks (arrows) must fall back to plain Arial, as in the original
  // stack, not to a metric-adjusted fallback face.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body id="top">
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
