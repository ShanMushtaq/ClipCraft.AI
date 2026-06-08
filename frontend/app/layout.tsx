import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "ClipCraft AI - Every second, perfectly framed.",
  description: "Turn hours of footage into viral-ready shorts with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetBrainsMono.variable} dark`}>
      <body className="font-sans bg-background text-foreground min-h-screen antialiased selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
