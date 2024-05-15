import type { Metadata } from "next";
import { Inter, Yellowtail } from "next/font/google";
import "./globals.css";

const yellowtail = Yellowtail({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Addy's Birthday",
  description: "Birthday celebration for Addy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={yellowtail.className}>{children}</body>
    </html>
  );
}
