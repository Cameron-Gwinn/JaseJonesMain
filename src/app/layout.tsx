import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jasejones.com"),
  title: {
    default: "Jase Jones & Associates — Interior Design",
    template: "%s | Jase Jones & Associates",
  },
  description:
    "Award-winning interior design firm based in Texas. New construction, remodeling, and furnishing of spaces across the US and internationally.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jasejones.com",
    siteName: "Jase Jones & Associates",
    title: "Jase Jones & Associates — Interior Design",
    description:
      "Award-winning interior design firm based in Texas. New construction, remodeling, and furnishing of spaces across the US and internationally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jase Jones & Associates — Interior Design",
    description:
      "Award-winning interior design firm based in Texas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
