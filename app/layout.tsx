import type { Metadata } from "next";
import { Fraunces, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-fraunces",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joe McLaughlin | Engineering Leader",
  description: "Professional portfolio of Joe McLaughlin - Engineering leader specializing in Cloud Infrastructure, SRE, and DevOps",
  openGraph: {
    title: "Joe McLaughlin | Engineering Leader",
    description: "Professional portfolio of Joe McLaughlin - Engineering leader specializing in Cloud Infrastructure, SRE, and DevOps",
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
    <html lang="en" className={`${fraunces.variable} ${lora.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
