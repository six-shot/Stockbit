import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const figTree = Figtree({
  variable: "--font-fig-tree",
  subsets: ["latin"],
});

const calSans = localFont({
  src: "../../public/fonts/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
});
const generalSans = localFont({
  src: "../../public/fonts/GeneralSans-Medium.ttf",
  variable: "--font-general-sans",
});
const neue = localFont({
  src: "../../public/fonts/ppneuemontreal-medium.otf",
  variable: "--font-neue",
});

export const metadata: Metadata = {
  title: "Stockbit",
  description: "Bridging rwa to Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figTree.variable} ${calSans.variable} ${generalSans.variable} ${neue.variable} antialiased`}>{children}</body>
    </html>
  );
}
