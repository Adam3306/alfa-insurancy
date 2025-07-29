import Image from "next/image";
import Footer from "../components/Footer";

export default function Bemutatkozas() {
  return (
    <div className="text-white bg-primary-blue min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-antonio text-white">
            BEMUTATKOZÁS
          </h1>
          <p className="text-lg md:text-xl font-telegraf text-light-blue mb-8 md:mb-12">
            Ismerje meg a szakértőt, aki Ön mellett áll
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Text Content */}
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-antonio text-white">
                MIÉRT ÉRDEMES ENGEM MEGBÍZNIA AZ ÜGYINTÉZÉSSEL?
              </h2>

              <div className="space-y-6 font-telegraf text-white">
                <p className="text-base md:text-lg">
                  Tudom, hogy a biztosítási ügyek világa bonyolultnak tűnhet.
                  Különösen igaz ez a szakmai felelősségbiztosításokra. Illetve
                  döntéshozóként nem a különböző biztosítók ügyfélszolgálataival
                  szeretne harcolni.
                </p>

                <p className="text-base md:text-lg">
                  Én, mint független biztosítási alkusz, azért vagyok, hogy
                  segítsek Önnek eligazodni a lehetőségek labirintusában. Nem
                  egy biztosító termékét kínálom, hanem megértem az Ön
                  helyzetét, a specifikus kockázatait (beleértve a Ptk. szerinti
                  szempontokat), és összehasonlítom a piacon elérhető legjobb
                  ajánlatokat.
                </p>

                <p className="text-base md:text-lg">
                  Célom, hogy személyre szabott, érthető megoldást találjunk a
                  vállalkozásának, ami illeszkedik az igényeihez és a
                  költségvetéséhez.
                </p>

                <div className="bg-primary-blue p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 font-antonio text-highlight-blue">
                    MIÉRT ÉRDEMES ENGEM VÁLASZTANIA?
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2">•</span>
                      <span>Független alkusz - objektív tanácsadás</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2">•</span>
                      <span>Szakértő a D&O biztosítások területén</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2">•</span>
                      <span>Piaci összehasonlítás és legjobb ajánlatok</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2">•</span>
                      <span>Személyre szabott megoldások</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2">•</span>
                      <span>Folyamatos támogatás és ügyintézés</span>
                    </li>
                  </ul>
                </div>

                <p className="text-base md:text-lg font-bold text-highlight-blue">
                  Bízza rám a keresést és az összehasonlítást!
                </p>

                <p className="text-base md:text-lg">
                  Ne aggódjon az ügyintézés hossza miatt. Lépjen velem
                  kapcsolatba, és együtt megtaláljuk a legjobb védelmet!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="/kapcsolat"
                    className="bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors font-telegraf text-center"
                  >
                    Kérek Ingyenes Ajánlatot Kockázatmentesen!
                  </a>
                  <a
                    href="/kapcsolat"
                    className="border-2 border-highlight-blue text-highlight-blue font-bold py-3 px-6 rounded-md hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-center"
                  >
                    Kérdésem Van / Konzultációt Kérek
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/3">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/ceo.jpg"
                  alt="Szegő Zsombor - Ügyvezető"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 bg-primary-blue p-4 rounded-lg">
                <h4 className="font-bold text-lg font-antonio text-white mb-2">
                  Cégadatok
                </h4>
                <div className="space-y-1 text-sm font-telegraf text-light-blue">
                  <p>
                    <span className="text-white">
                      Prémium Biztosítási Alkusz Kft.
                    </span>
                  </p>
                  <p>Adószám: 27181553-2-13</p>
                  <p>MNB engedély: H-EN-I-596/2018</p>
                  <p className="text-highlight-blue font-bold mt-2">
                    A Prémium Biztosítási Alkusz Kft. csoport tagja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-antonio text-white">
            ÉRTÉKEINK
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-highlight-blue p-4 rounded-lg mb-4 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-antonio text-white">
                Megbízhatóság
              </h3>
              <p className="text-light-blue font-telegraf">
                Hosszú távú partnerség és bizalmi kapcsolat minden ügyfelünkkel.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-highlight-blue p-4 rounded-lg mb-4 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-antonio text-white">
                Szakértelem
              </h3>
              <p className="text-light-blue font-telegraf">
                Mély szakmai tudás és folyamatos képzés a legjobb
                szolgáltatásért.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-highlight-blue p-4 rounded-lg mb-4 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-antonio text-white">
                Egyéni megközelítés
              </h3>
              <p className="text-light-blue font-telegraf">
                Minden ügyfél egyedi, és minden megoldás személyre szabott.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
