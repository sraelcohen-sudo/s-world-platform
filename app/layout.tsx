import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "S-World Platform",
  description: "Medical exam preparation and question bank platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}