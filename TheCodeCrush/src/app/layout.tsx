import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-cc-sans",
  subsets: ["latin"],
  weight: ["600","700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-cc-body",
  subsets: ["latin"],
  weight: ["400","500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The CodeCrush — Learn to Love Logic",
  description:
    "Learn DSA, System Design, and Mock Interviews with mentors from Google, Amazon, and D.E. Shaw — The CodeCrush.",
  metadataBase: new URL("https://thecodecrush.in"),
  icons: {
    icon: "/cc-monogram.svg",
  },
  openGraph: {
    title: "The CodeCrush — Learn to Love Logic",
    description:
      "Mentorship by engineers at Google, Amazon, Microsoft, and D.E. Shaw. Learn to Love Logic.",
    url: "https://thecodecrush.in",
    siteName: "The CodeCrush",
    images: [
      {
        url: "/cc-og.svg",
        width: 1200,
        height: 630,
        alt: "The CodeCrush — Learn to Love Logic",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cc-scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
