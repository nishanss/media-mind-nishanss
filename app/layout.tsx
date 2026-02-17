import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Media Mind | Data-Driven Marketing",
  description: "Performance Marketing & CRM Optimization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-black antialiased selection:bg-purple-500 selection:text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}