import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title:
    "Ügyvezetői Felelősségbiztosítás: Nyugodt döntéshozatal vezető pozícióban! | D&O Biztosítás - Alfa Biztosítás",
  description:
    "Ügyvezetőként személyes vagyonával felel a 2014-es Ptk. alapján hozott döntéseiért. Tudjon meg többet D&O biztosítással kapcsolatban! Kérjen ajánlatot vezető tisztségviselő felelősségbiztosításra!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="antialiased">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
