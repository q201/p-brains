import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Programming Brains - Your Journey to Better Development",
  description: "Empowering developers with knowledge and skills for the future. Learn React, TypeScript, Next.js and more with our comprehensive tutorials and blog posts.",
  keywords: ["programming", "tutorials", "React", "TypeScript", "Next.js", "web development", "coding", "JavaScript"],
  authors: [{ name: "Programming Brains Team" }],
  creator: "Programming Brains",
  publisher: "Programming Brains",
  openGraph: {
    title: "Programming Brains - Your Journey to Better Development",
    description: "Empowering developers with knowledge and skills for the future. Learn React, TypeScript, Next.js and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Brains - Your Journey to Better Development",
    description: "Empowering developers with knowledge and skills for the future.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
