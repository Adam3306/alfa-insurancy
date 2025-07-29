import Footer from "../components/Footer";

export default function Szolgaltatasok() {
  return (
    <div className="text-white bg-primary-blue min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-antonio text-white">
            SZOLGÁLTATÁSAINK
          </h1>
          <p className="text-lg md:text-xl font-telegraf text-light-blue mb-8 md:mb-12">
            Szakértői segítség a biztosítási világban
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Társasházbiztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full">
              <h3 className="text-lg font-bold mb-4 font-antonio text-white uppercase">
                Társasházbiztosítás
              </h3>
              <p className="text-white font-telegraf text-sm mb-6 leading-relaxed">
                A társasház tulajdonában lévő épületrészeket, szerkezeteket és
                berendezéseket védi a káreseményektől, mint például tűz, vihar
                vagy csőtörés, illetve a lakók egymásnak okozott káraitól.
                Előnye, hogy egységes védelmet biztosít az egész épületnek,
                megóvva a tulajdonosokat a váratlan, nagy összegű javítási
                költségektől.
              </p>
            </div>

            {/* Csoportos egészségbiztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full">
              <h3 className="text-lg font-bold mb-4 font-antonio text-white uppercase">
                Csoportos egészségbiztosítás
              </h3>
              <p className="text-white font-telegraf text-sm mb-6 leading-relaxed">
                Ez a biztosítás a munkavállalók számára nyújt széles körű
                egészségügyi szolgáltatásokat, mint például magánorvosi ellátás,
                szűrővizsgálatok térítése. Előnye, hogy növeli a munkavállalói
                elégedettséget és hűséget, miközben hozzájárul az egészségesebb
                és produktívabb munkaerőhöz.
              </p>
            </div>

            {/* Üzemszünet-biztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full">
              <h3 className="text-lg font-bold mb-4 font-antonio text-white uppercase">
                Üzemszünet-biztosítás
              </h3>
              <p className="text-white font-telegraf text-sm mb-6 leading-relaxed">
                Pénzügyi védelmet nyújt a vállalkozásoknak abban az esetben, ha
                egy káresemény (pl. tűz, árvíz) miatt ideiglenesen leáll a
                működésük. Előnye, hogy fedezi az üzemszünet alatt kieső
                bevételt és a fix költségeket, segítve a gyors talpra állást.
              </p>
            </div>

            {/* Építési- szerelési biztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full">
              <h3 className="text-lg font-bold mb-4 font-antonio text-white uppercase">
                Építési- szerelési biztosítás (ÉPSZER, C.A.R.)
              </h3>
              <p className="text-white font-telegraf text-sm mb-6 leading-relaxed">
                Ez a biztosítás az építési-szerelési munkálatok során
                bekövetkező károkra nyújt &ldquo;All Risk&rdquo; fedezetet,
                legyen szó anyagkárról, balesetről vagy harmadik félnek okozott
                kárról. Előnye, hogy teljes körű védelmet biztosít a projekt
                során, minimalizálva a pénzügyi kockázatokat.
              </p>
            </div>

            {/* Ügyvezetői felelősségbiztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full">
              <h3 className="text-lg font-bold mb-4 font-antonio text-white uppercase">
                Ügyvezetői felelősségbiztosítás (D&O, Directors & Officers)
              </h3>
              <p className="text-white font-telegraf text-sm mb-6 leading-relaxed">
                Alapvető védelmet nyújt a cégvezetőknek és vezető
                tisztségviselőknek a vállalkozás irányításával kapcsolatos
                döntésekből és mulasztásokból eredő jogi és anyagi
                követelésekkel szemben. Egy jól biztosított vezetői pozíció
                vonzóbbá válhat a tehetséges szakemberek számára, mivel
                csökkenti a személyes kockázatot, ami egy vezetői szereppel jár.
              </p>
            </div>

            {/* Kötelező kivitelezői felelősségbiztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full">
              <h3 className="text-lg font-bold mb-4 font-antonio text-white uppercase">
                Kötelező kivitelezői felelősségbiztosítás
              </h3>
              <p className="text-white font-telegraf text-sm mb-6 leading-relaxed">
                A törvény által előírt biztosítás, amely a kivitelezési
                tevékenység során okozott károkra nyújt fedezetet. Előnye, hogy
                védi a kivitelezőt a váratlan anyagi terhektől, és biztosítja a
                megrendelők számára az esetleges károk megtérítését.
              </p>
            </div>

            {/* Orvos szakmai felelősségbiztosítás */}
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 h-full">
              <h3 className="text-lg font-bold mb-4 font-antonio text-white uppercase">
                Orvos szakmai felelősségbiztosítás
              </h3>
              <p className="text-white font-telegraf text-sm mb-6 leading-relaxed">
                Az orvosok és egészségügyi szakemberek számára nyújt védelmet az
                esetleges szakmai hibákból eredő kártérítési igényekkel szemben.
                Előnye, hogy fedezi a jogi költségeket és a megítélt kártérítési
                összegeket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-antonio text-white">
            Kérdése van a szolgáltatásainkról?
          </h2>
          <p className="text-lg font-telegraf text-light-blue mb-8">
            Keressen meg bizalommal, és együtt megtaláljuk a legjobb megoldást!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kapcsolat"
              className="bg-highlight-blue text-primary-blue font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-lg border-2 border-highlight-blue"
            >
              KAPCSOLATFELVÉTEL
            </a>
            <a
              href="tel:+36301818047"
              className="border-2 border-highlight-blue text-highlight-blue font-bold py-4 px-8 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-lg"
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
