import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Biztosítási Szolgáltatások | D&O, Céges Egészségbiztosítás, Magán Egészségügyi Biztosítás, Társasházbiztosítás",
  description:
    "Teljes körű biztosítási szolgáltatások Budapesten. D&O biztosítás, céges egészségbiztosítás, magán egészségügyi biztosítás, társasházbiztosítás, üzemzünet és építési szerelési biztosítás. Független alkusz.",
  keywords: [
    "biztosítási szolgáltatások",
    "D&O biztosítás",
    "céges egészségbiztosítás",
    "magán egészségügyi biztosítás",
    "magán egészségbiztosítás",
    "társasházbiztosítás",
    "üzemzünet biztosítás",
    "építési szerelési biztosítás",
    "biztosítási alkusz Budapest",
    "független biztosítási tanácsadó",
  ],
  alternates: {
    canonical: "/szolgaltatasok",
  },
  openGraph: {
    title: "Biztosítási Szolgáltatások | Alpha Trust Insurance",
    description:
      "Teljes körű biztosítási szolgáltatások Budapesten. D&O biztosítás, céges egészségbiztosítás, társasházbiztosítás.",
    url: "https://alphabiztositas.com/szolgaltatasok",
  },
};

export default function Szolgaltatasok() {
  return (
    <div className="text-white bg-primary-blue min-h-screen">
      {/* Services Grid */}
      <main className="py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-center font-antonio text-white mb-4">
              BIZTOSÍTÁSI SZOLGÁLTATÁSAINK
            </h1>
            <p className="text-center text-yellow-400 font-telegraf text-base md:text-lg max-w-3xl mx-auto mb-6">
              Teljes körű biztosítási megoldásokat kínálunk vállalatoknak és
              magánszemélyeknek. Független alkuszként a legjobb ajánlatokat
              találjuk meg Önnek.
            </p>
            {/* CTA Section at top */}
            <div className="bg-secondary-blue border-2 border-highlight-blue p-6 md:p-8 rounded-lg max-w-4xl mx-auto mb-8">
              <p className="text-white font-telegraf text-base md:text-lg mb-6 text-center">
                Van már szerződése? Nézzük meg, van-e jobb! Küldje el a
                részleteket, én pedig összehasonlítom a legjobb piaci
                ajánlatokkal. A szolgáltatás ingyenes és kötelezettségmentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kapcsolat"
                  className="cta-button text-base md:text-lg"
                >
                  Ajánlatok összehasonlítása
                </a>
                <a
                  href="/kapcsolat"
                  className="cta-button text-base md:text-lg"
                >
                  Meglévő szerződés felülvizsgálata
                </a>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Társasházbiztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-4 md:p-4 md:p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full shadow-lg">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-white uppercase">
                Társasházbiztosítás
              </h3>
              <p className="text-white font-telegraf text-sm md:text-sm mb-4 md:mb-4 md:mb-6 leading-relaxed">
                A társasház tulajdonában lévő épületrészeket, szerkezeteket és
                berendezéseket védi a káreseményektől, mint például tűz, vihar
                vagy csőtörés, illetve a lakók egymásnak okozott káraitól.
                Előnye, hogy egységes védelmet biztosít az egész épületnek,
                megóvva a tulajdonosokat a váratlan, nagy összegű javítási
                költségektől.
              </p>
            </div>

            {/* Csoportos egészségbiztosítás - CLICKABLE */}
            <Link href="/szolgaltatasok/csoportos-egeszsegbiztositas">
              <div className="bg-highlight-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 h-full cursor-pointer group shadow-lg">
                <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-primary-blue uppercase">
                  Csoportos egészségbiztosítás
                </h3>
                <p className="text-primary-blue font-telegraf text-sm mb-4 md:mb-6 leading-relaxed">
                  Ez a biztosítás a munkavállalók számára nyújt széles körű
                  egészségügyi szolgáltatásokat, mint például magánorvosi
                  ellátás, szűrővizsgálatok térítése. Előnye, hogy növeli a
                  munkavállalói elégedettséget és hűséget, miközben hozzájárul
                  az egészségesebb és produktívabb munkaerőhöz.
                </p>
                <div className="text-primary-blue font-telegraf font-bold text-sm">
                  Részletek →
                </div>
              </div>
            </Link>

            {/* Magán egészségügyi biztosítás - CLICKABLE */}
            <Link href="/szolgaltatasok/magan-egeszsegugy-biztositas">
              <div className="bg-highlight-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 h-full cursor-pointer group shadow-lg">
                <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-primary-blue uppercase">
                  Magán egészségügyi biztosítás
                </h3>
                <p className="text-primary-blue font-telegraf text-sm mb-4 md:mb-6 leading-relaxed">
                  Gyors hozzáférés minőségi magánorvosi ellátáshoz,
                  szűrővizsgálatok, diagnosztika és műtétek térítése. Előnye,
                  hogy kiszámítható költségekkel biztosítja a szakszerű
                  magánorvosi ellátást, nincs várólista, és hozzáférhet a
                  legjobb orvosokhoz és magánkórházakhoz.
                </p>
                <div className="text-primary-blue font-telegraf font-bold text-sm">
                  Részletek →
                </div>
              </div>
            </Link>

            {/* Üzemszünet-biztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full shadow-lg">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-white uppercase">
                Üzemszünet-biztosítás
              </h3>
              <p className="text-white font-telegraf text-sm mb-4 md:mb-6 leading-relaxed">
                Pénzügyi védelmet nyújt a vállalkozásoknak abban az esetben, ha
                egy káresemény (pl. tűz, árvíz) miatt ideiglenesen leáll a
                működésük. Előnye, hogy fedezi az üzemszünet alatt kieső
                bevételt és a fix költségeket, segítve a gyors talpra állást.
              </p>
            </div>

            {/* Építési- szerelési biztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full shadow-lg">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-white uppercase">
                Építési- szerelési biztosítás (ÉPSZER, C.A.R.)
              </h3>
              <p className="text-white font-telegraf text-sm mb-4 md:mb-6 leading-relaxed">
                Ez a biztosítás az építési-szerelési munkálatok során
                bekövetkező károkra nyújt &quot;All Risk&quot; fedezetet, legyen
                szó anyagkárról, balesetről vagy harmadik félnek okozott kárról.
                Előnye, hogy teljes körű védelmet biztosít a projekt során,
                minimalizálva a pénzügyi kockázatokat.
              </p>
            </div>

            {/* Ügyvezetői felelősségbiztosítás - CLICKABLE */}
            <Link href="/szolgaltatasok/d&o">
              <div className="bg-highlight-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 h-full cursor-pointer group shadow-lg">
                <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-primary-blue uppercase">
                  Ügyvezetői felelősségbiztosítás (D&O, Directors & Officers)
                </h3>
                <p className="text-primary-blue font-telegraf text-sm mb-4 md:mb-6 leading-relaxed">
                  Alapvető védelmet nyújt a cégvezetőknek és vezető
                  tisztségviselőknek a vállalkozás irányításával kapcsolatos
                  döntésekből és mulasztásokból eredő jogi és anyagi
                  követelésekkel szemben. Egy jól biztosított vezetői pozíció
                  vonzóbbá válhat a tehetséges szakemberek számára, mivel
                  csökkenti a személyes kockázatot, ami egy vezetői szereppel
                  jár.
                </p>
                <div className="text-primary-blue font-telegraf font-bold text-sm">
                  Részletek →
                </div>
              </div>
            </Link>

            {/* Kötelező kivitelezői felelősségbiztosítás - CLICKABLE */}
            <Link href="/szolgaltatasok/kotelezo-kivitelezoi-felelossegbiztositas">
              <div className="bg-highlight-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 h-full cursor-pointer group shadow-lg">
                <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-primary-blue uppercase">
                  Kötelező kivitelezői felelősségbiztosítás
                </h3>
                <p className="text-primary-blue font-telegraf text-sm mb-4 md:mb-6 leading-relaxed">
                  A törvény által előírt biztosítás, amely a kivitelezési
                  tevékenység során okozott károkra nyújt fedezetet. Előnye,
                  hogy védi a kivitelezőt a váratlan anyagi terhektől, és
                  biztosítja a megrendelők számára az esetleges károk
                  megtérítését.
                </p>
                <div className="text-primary-blue font-telegraf font-bold text-sm">
                  Részletek →
                </div>
              </div>
            </Link>

            {/* Orvos szakmai felelősségbiztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full shadow-lg">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-white uppercase">
                Orvos szakmai felelősségbiztosítás
              </h3>
              <p className="text-white font-telegraf text-sm mb-4 md:mb-6 leading-relaxed">
                Az orvosok és egészségügyi szakemberek számára nyújt védelmet az
                esetleges szakmai hibákból eredő kártérítési igényekkel szemben.
                Előnye, hogy fedezi a jogi költségeket és a megítélt kártérítési
                összegeket.
              </p>
            </div>

            {/* CTA Card - Meglévő szerződés átnézetése */}
            <div className="bg-secondary-blue border-2 border-highlight-blue p-4 md:p-6 rounded-lg h-full shadow-lg flex flex-col justify-center">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio text-white uppercase text-center">
                Van már szerződése?
              </h3>
              <p className="text-white font-telegraf text-sm mb-4 md:mb-6 leading-relaxed text-center">
                Nézzük meg, van-e jobb! A meglévő szerződés felülvizsgálata
                ingyenes és kötelezettségmentes.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="/kapcsolat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button text-sm"
                >
                  Meglévő szerződés felülvizsgálata
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 font-antonio text-white">
            Kérdése van a szolgáltatásainkról?
          </h2>
          <p className="text-base md:text-lg font-telegraf text-light-blue mb-6 md:mb-8">
            Keressen meg bizalommal, és együtt megtaláljuk a legjobb megoldást!
          </p>
          {/* Comparison CTA */}
          <div className="bg-primary-blue border-2 border-highlight-blue p-6 md:p-8 rounded-lg mb-8">
            <p className="text-white font-telegraf text-base md:text-lg mb-6">
              Van már szerződése? Nézzük meg, van-e jobb! Küldje el a
              részleteket, én pedig összehasonlítom a legjobb piaci
              ajánlatokkal. A szolgáltatás ingyenes és kötelezettségmentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kapcsolat"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-base md:text-lg"
              >
                Ajánlatok összehasonlítása
              </a>
              <a
                href="/kapcsolat"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-base md:text-lg"
              >
                Meglévő szerződés felülvizsgálata
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kapcsolat"
              className="bg-highlight-blue text-primary-blue font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-base md:text-lg border-2 border-highlight-blue"
            >
              KAPCSOLATFELVÉTEL
            </a>
            <a
              href="tel:+36301818047"
              className="border-2 border-highlight-blue text-highlight-blue font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-base md:text-lg"
            >
              +36 30 18 18 047
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
