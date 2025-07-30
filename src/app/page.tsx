"use client";
import About from "./components/About";
import Footer from "./components/Footer";
import HomeContactForm from "./components/HomeContactForm";
import HeroImage from "./components/HeroImage";

export default function Home() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row min-h-[70vh] md:min-h-[60vh] items-center md:items-stretch relative bg-[#3A5D98] px-2 sm:px-4"
        id="hero"
      >
        {/* Left column - Image with blue border */}
        <HeroImage />

        {/* Right column - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 md:px-12 py-8 md:py-12">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-antonio text-white leading-tight">
              BIZTOSÍTÁSI MEGOLDÁSOK
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 font-telegraf text-light-blue leading-relaxed">
              Megbízható biztosítási tanácsadás vállalatoknak és vezetőknek.
              Szakértői segítség a biztosítási világban.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-highlight-blue rounded-full mr-3"></div>
                <span className="font-telegraf text-white">
                  Független alkusz - objektív tanácsadás
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-highlight-blue rounded-full mr-3"></div>
                <span className="font-telegraf text-white">
                  Piaci összehasonlítás és legjobb ajánlatok
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-highlight-blue rounded-full mr-3"></div>
                <span className="font-telegraf text-white">
                  Személyre szabott megoldások
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* D&O Insurance Section */}
      <section
        className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue"
        id="do-insurance"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-antonio text-white">
              ÜGYVEZETŐI FELELŐSSÉGBIZTOSÍTÁS (D&O)
            </h2>
            <p className="text-lg font-telegraf text-light-blue max-w-3xl mx-auto">
              Védje meg a személyes vagyonát! A 2014-es Ptk. szerint Ön, mint
              vezető, személyesen felel a döntéseiért.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-blue p-8 rounded-lg border border-highlight-blue">
              <h3 className="text-xl font-bold mb-4 font-antonio text-white">
                MIK AZOK A VEZETŐI KOCKÁZATOK?
              </h3>
              <ul className="space-y-3 text-white font-telegraf">
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Személyes felelősség a Ptk. szerint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Jogi eljárások költségei</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Hatósági bírságok</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Jó hírnév védelme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Felelősség időbeli terjedelme</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-blue p-8 rounded-lg border border-highlight-blue">
              <h3 className="text-xl font-bold mb-4 font-antonio text-white">
                MIBEN SEGÍT A D&O BIZTOSÍTÁS?
              </h3>
              <ul className="space-y-3 text-white font-telegraf">
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Jogi védekezés költségeinek fedezése</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Kártérítési összegek kifizetése</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Bizonyos bírságok fedezete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Jó hírnév helyreállításának támogatása</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight-blue mr-2">•</span>
                  <span>Védelem távozás után is</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-primary-blue p-6 rounded-lg border border-highlight-blue max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4 font-antonio text-white">
                TISZTELT ÜGYVEZETŐ, IGAZGATÓSÁGI TAG, DÖNTÉSHOZÓ!
              </h3>
              <p className="text-white font-telegraf mb-4">
                Tudjuk, hogy vezetőként nap, mint nap fontos döntéseket hoz.
                Ezek a döntések a cég jövőjét formálják. Ugyanakkor fontos
                tisztában lenni azzal is, hogy a 2014-es Polgári Törvénykönyv
                (Ptk.) értelmében, bizonyos helyzetekben személy szerint is
                felelhet a vezetői tevékenységével összefüggésben okozott
                károkért.
              </p>
              <p className="text-white font-telegraf">
                Ma már a károsultak közvetlenül Öntől is követelhetik a
                kártérítést. Ez a felelősség akár a magánvagyonát, az évek alatt
                felépített egzisztenciáját is érintheti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue"
        id="free-quote"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-antonio text-white">
              KÉRJE INGYENES AJÁNLATÁT
            </h2>
            <p className="text-lg font-telegraf text-light-blue">
              Töltse ki az alábbi űrlapot, és hamarosan felvesszük Önnel a
              kapcsolatot!
            </p>
          </div>

          <div className="bg-secondary-blue p-6 md:p-8 rounded-lg shadow-xl">
            <HomeContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
