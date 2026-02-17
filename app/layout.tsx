import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-black antialiased selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}