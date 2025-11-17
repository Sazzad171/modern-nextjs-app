import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ToastProvider from "@/components/ui/toast/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A modern next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
