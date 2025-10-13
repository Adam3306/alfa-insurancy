import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Oldal nem található | Alpha Trust Insurance",
  description:
    "A keresett oldal nem található. Visszatérhet a főoldalra vagy böngészhet szolgáltatásaink között.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold font-antonio mb-4">404</h1>
        <h2 className="text-2xl font-bold font-antonio mb-6">
          Oldal nem található
        </h2>
        <p className="text-light-blue font-telegraf mb-8 max-w-md mx-auto">
          Sajnáljuk, a keresett oldal nem található. Lehet, hogy eltávolították,
          átnevezték, vagy ideiglenesen nem elérhető.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors font-telegraf text-center"
          >
            Vissza a főoldalra
          </Link>
          <Link
            href="/szolgaltatasok"
            className="border-2 border-highlight-blue text-highlight-blue font-bold py-3 px-6 rounded-md hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-center"
          >
            Szolgáltatásaink
          </Link>
        </div>
      </div>
    </div>
  );
}
