import type { Metadata } from "next";
import { Lora, Satisfy } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy",
  display: "swap",
});

const siteTitle = "Joe McLaughlin | Engineering Leader";
const siteDescription =
  "Professional portfolio of Joe McLaughlin - Engineering leader specializing in Cloud Infrastructure, SRE, and DevOps";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://jmclaughlin.dev",
    siteName: "Joe McLaughlin Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" className={`${lora.variable} ${satisfy.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
