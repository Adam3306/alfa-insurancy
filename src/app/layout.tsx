import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfa Biztosítás - D&O Felelősségbiztosítás",
  description:
    "Vezető tisztségviselők felelősségbiztosítása - D&O biztosítás, ami Önt védi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="antialiased">{children}</body>
    </html>
  );
}
