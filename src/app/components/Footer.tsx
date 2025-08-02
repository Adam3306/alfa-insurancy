import Image from "next/image";
import Link from "next/link";

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
                <Link href="/" className="hover:text-blue-300 transition">
                  Bemutatkozás
                </Link>
              </li>
              <li>
                <Link
                  href="/szolgaltatasok"
                  className="hover:text-blue-300 transition"
                >
                  Szolgáltatások
                </Link>
              </li>
              <li>
                <Link
                  href="/kapcsolat"
                  className="hover:text-blue-300 transition"
                >
                  Kapcsolat
                </Link>
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
                <Link
                  href="/adatvedelem"
                  className="hover:text-blue-300 transition"
                >
                  Adatvédelmi Tájékoztató
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="hover:text-blue-300 transition">
                  Cookie Szabályzat
                </Link>
              </li>
              <li>
                <Link
                  href="/impresszum"
                  className="hover:text-blue-300 transition"
                >
                  Impresszum
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio">
              Kapcsolat
            </h3>
            <ul className="space-y-1 md:space-y-2 font-telegraf text-sm md:text-base">
              <li>
                <Link
                  href="tel:+36301818047"
                  className="hover:text-blue-300 transition"
                >
                  +36 30 18 18 047
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:szego@premiumbiztositasok.hu"
                  className="hover:text-blue-300 transition"
                >
                  szego@premiumbiztositasok.hu
                </Link>
              </li>
              <li className="text-gray-300">
                2120 Dunakeszi, Felsőtabán utca 11.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-blue pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs md:text-sm font-telegraf text-gray-300 mb-4 md:mb-0">
              © 2021 Alpha Trust Insurance Kft. Minden jog fenntartva.
            </div>
            <div className="flex space-x-4">
              <div className="text-xs md:text-sm font-telegraf text-gray-300">
                Adószám: 27181553-2-13
              </div>
              <div className="text-xs md:text-sm font-telegraf text-gray-300">
                MNB engedély: H-EN-I-596/2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
