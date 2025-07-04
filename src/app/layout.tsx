import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title:
    "Alfa Trust Insurance Kft.",
  description:
    "Ügyvezetőként személyes vagyonával felel a 2014-es Ptk. alapján hozott döntéseiért. Tudjon meg többet D&O biztosítással kapcsolatban! Kérjen ajánlatot vezető tisztségviselő felelősségbiztosításra!",
    icons: {
      icon: "/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        <link
          rel="preload"
          href="/fonts/Antonio-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Antonio-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Telegraf-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Telegraf-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TTInterphases-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="//favicon.ico" sizes="any" />
      </head>
      <body className="antialiased font-telegraf">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
