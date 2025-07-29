"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 md:mb-10">
          {/* Column 1: Logo and Company */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-8 w-8 md:h-10 md:w-10 mr-2">
                <Image
                  src="/alfa-insurance-logo.png"
                  alt="Alpha Trust Insurance Kft."
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="text-lg md:text-xl font-bold font-antonio">
                ALPHA TRUST INSURANCE KFT.
              </span>
            </div>
            <p className="text-xs md:text-sm font-telegraf mt-3 md:mt-4 text-gray-300">
              Megbízható biztosítási megoldások vezetőknek és vállalatoknak.
              Szakértői tanácsadás, személyre szabott ajánlatok.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio">
              Gyors Linkek
            </h3>
            <ul className="space-y-1 md:space-y-2 font-telegraf text-sm md:text-base">
              <li>
                <a
                  href="/bemutatkozas"
                  className="hover:text-blue-300 transition"
                >
                  Bemutatkozás
                </a>
              </li>
              <li>
                <a
                  href="/szolgaltatasok"
                  className="hover:text-blue-300 transition"
                >
                  Szolgáltatások
                </a>
              </li>
              <li>
                <a href="/kapcsolat" className="hover:text-blue-300 transition">
                  Ajánlatkérés
                </a>
              </li>
              <li>
                <a href="/kapcsolat" className="hover:text-blue-300 transition">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio">
              Jogi Információk
            </h3>
            <ul className="space-y-1 md:space-y-2 font-telegraf text-sm md:text-base">
              <li>
                <a
                  href="/adatvedelem"
                  className="hover:text-blue-300 transition"
                >
                  Adatvédelmi Tájékoztató
                </a>
              </li>
              <li>
                <a href="/cookie" className="hover:text-blue-300 transition">
                  Cookie Szabályzat
                </a>
              </li>
              <li>
                <a
                  href="/impresszum"
                  className="hover:text-blue-300 transition"
                >
                  Impresszum
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio">
              Kapcsolat
            </h3>
            <ul className="space-y-1 md:space-y-2 font-telegraf text-sm md:text-base">
              <li className="flex items-start md:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 mr-2 text-light-blue flex-shrink-0 mt-0.5 md:mt-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>2120 Dunakeszi, Felsőtabán utca 11.</span>
              </li>
              <li className="flex items-start md:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 mr-2 text-light-blue flex-shrink-0 mt-0.5 md:mt-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.948.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+36301818047"
                  className="hover:text-highlight-blue transition"
                >
                  +36 30 18 18 047
                </a>
              </li>
              <li className="flex items-start md:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 mr-2 text-light-blue flex-shrink-0 mt-0.5 md:mt-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:szego@premiumbiztositasok.hu"
                  className="hover:text-highlight-blue transition"
                >
                  szego@premiumbiztositasok.hu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and certification */}
        <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-secondary-blue">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-telegraf text-xs md:text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Alpha Trust Insurance Kft. Minden jog
              fenntartva.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs md:text-sm font-telegraf text-gray-400 text-center md:text-left">
              <span>MNB engedély szám: H-EN-I-596/2018</span>
              <span className="hidden md:inline">|</span>
              <span>Adószám: 27181553-2-13</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
