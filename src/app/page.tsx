"use client";

import Image from "next/image";
import About from "./components/About";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row py-16 px-6 sm:px-12 lg:px-24 min-h-[80vh] items-center">
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-antonio leading-tight">
            BIZTONSÁGBAN
            <br />
            ÜGYVEZETŐKÉNT IS:
            <br />
            A D&O
            <br />
            FELELŐSSÉGBIZTOSÍTÁS,
            <br />
            AMI ÖNT VÉDI
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#free-quote" className="cta-button">
              INGYENES AJÁNLATOT KÉREK
              <span className="arrow ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center relative h-96 md:h-[500px]">
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Image
                src="/alfa-insurance-logo.png"
                alt="Alfa Biztosítás"
                width={100}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <Image
            src="/executive-businessman.jpg"
            alt="Ügyvezetői felelősség biztosítás szükségessége, vagyonvédelem"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Executive Risk Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 mb-4 md:mb-0 relative aspect-square md:aspect-[4/3] h-72 md:h-auto">
                <Image
                  src="/stressed-executive.jpg"
                  alt="Ügyvezetői felelősség biztosítás szükségessége, vagyonvédelem"
                  className="rounded-lg shadow-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-6 font-antonio">
                  TISZTELT ÜGYVEZETŐ, IGAZGATÓSÁGI TAG, DÖNTÉSHOZÓ!
                </h2>
                <div className="space-y-4 font-telegraf">
                  <p className="text-lg">
                    Tudjuk, hogy vezetőként nap, mint nap fontos döntéseket hoz.
                    Ezek a döntések a cég jövőjét formálják. Ugyanakkor fontos
                    tisztában lenni azzal is, hogy a 2014-es Polgári
                    Törvénykönyv (Ptk.) értelmében, bizonyos helyzetekben
                    személy szerint is felelhet a vezetői tevékenységével
                    összefüggésben okozott károkért.
                  </p>
                  <p className="text-lg font-bold">
                    Ma már a károsultak (legyen szó vevőről, beszállítóról,
                    hitelezőről, vagy akár magáról a cégről) közvetlenül Öntől
                    is követelhetik a kártérítést.
                  </p>
                  <p className="text-lg">
                    Ez a felelősség akár a magánvagyonát, az évek alatt
                    felépített egzisztenciáját is érintheti.
                  </p>
                  <p className="text-lg">
                    Az Ügyvezetői Szakmai Felelősségbiztosítás (Directors &
                    Officers biztosítás) a személyes pénzügyi biztonságának
                    alapja ebben a megváltozott jogi környezetben. Ami pontosan
                    azért jött létre, hogy segítsen Önnek nyugodtan végezni a
                    munkáját, tudva, hogy a vezetői döntéseiből fakadó esetleges
                    jogi és anyagi következmények pénzügyi terheit átvállalja a
                    biztosító.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Areas Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-antonio">
            MIK AZOK A VEZETŐI KOCKÁZATOK, AMIKRE ÉRDEMES FELKÉSZÜLNI?
          </h2>
          <p className="text-lg font-telegraf text-center mb-12 max-w-3xl mx-auto">
            Vezetőként számos helyzet adódhat, amikor a Ptk. alapján személyes
            felelősség merülhet fel. Fontos, hogy ismerje ezeket, hogy
            felkészülhessen. Íme néhány példa a kockázatokra, amelyek
            kezelésében a D&O biztosítás segíthet:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-secondary-blue p-6 rounded-lg shadow-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                SZEMÉLYES FELELŐSSÉG A PTK. SZERINT
              </h3>
              <p className="font-interphases">
                A törvény lehetőséget ad arra, hogy a károsultak (pl. partnerek,
                munkavállalók, sőt a cég is) bizonyos esetekben közvetlenül
                Öntől követeljenek kártérítést, ami a magánvagyonát érintheti.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg shadow-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                JOGI ELJÁRÁSOK KÖLTSÉGEI
              </h3>
              <p className="font-interphases">
                Akár jogos, akár alaptalan az igény, egy jogi eljárás vagy
                hatósági vizsgálat jelentős költségekkel járhat a védekezés
                során (ügyvédi díjak, szakértők). A biztosítás éves díjának
                sokszorosa lehet.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg shadow-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                HATÓSÁGI BÍRSÁGOK
              </h3>
              <p className="font-interphases">
                Bizonyos esetekben a hatóságok nem csak a cégre, de közvetlenül
                a felelős vezetőre is szabhatnak ki bírságot.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg shadow-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                BÜNTETŐJOGI ELJÁRÁSOK VÉDEKEZÉSI KÖLTSÉGEI
              </h3>
              <p className="font-interphases">
                Bár a biztosítás nem fedezi a büntetést, a büntetőjogi
                eljárással kapcsolatos jogi védekezés költségei nagyon magasak
                lehetnek, ezek fedezésében segít a D&O biztosítás a bűnösség
                bizonyításáig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* D&O Insurance Benefits */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-antonio">
            MIBEN SEGÍT AZ ÜGYVEZETŐI FELELŐSSÉGBIZTOSÍTÁS?
          </h2>
          <p className="text-lg font-telegraf text-center mb-12 max-w-3xl mx-auto">
            Az Ügyvezetői Szakmai Felelősségbiztosítás az a pajzs, amire
            szüksége van a fent említett kockázatokkal szemben. Ez a biztosítás
            nem a hibákat akadályozza meg, hanem azok pénzügyi következményeitől
            véd meg.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden image-card h-80">
              <Image
                src="/legal-protection.jpg"
                alt="Jogi védekezés"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end card-content">
                <h3 className="text-2xl font-bold text-white mb-3 font-antonio">
                  JOGI VÉDEKEZÉS
                  <br />
                  KÖLTSÉGEINEK FEDEZÉSE
                </h3>
                <p className="text-white font-telegraf">
                  Átvállalja a jogi eljárások minden indokolt költségét (ügyvédi
                  díjak, bírósági költségek), akár a bűnösség jogerős
                  kimondásáig büntetőügyekben is.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden image-card h-80">
              <Image
                src="/claim-settlement.jpg"
                alt="Kártérítési összegek"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end card-content">
                <h3 className="text-2xl font-bold text-white mb-3 font-antonio">
                  KÁRTÉRÍTÉSI ÖSSZEGEK
                  <br />
                  KIFIZETÉSE
                </h3>
                <p className="text-white font-telegraf">
                  Segít a jogosan megítélt kártérítési összegek megfizetésében a
                  biztosítási limit erejéig.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden image-card h-80">
              <Image
                src="/reputation-damage.jpg"
                alt="Jó hírnév helyreállítása"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end card-content">
                <h3 className="text-2xl font-bold text-white mb-3 font-antonio">
                  BIZTONSÁG HIÁNYÁNAK
                  <br />
                  FEDEZÉSE
                </h3>
                <p className="text-white font-telegraf">
                  Segít a hírnév helyreállításában, szakértői tanácsadást
                  biztosít krízishelyzetekben, és anyagi támogatást nyújt a
                  nehéz időszakokban.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQs />

      {/* CTA Section */}
      <section
        className="py-16 px-6 sm:px-12 lg:px-24 bg-secondary-blue"
        id="free-quote"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-antonio">
                KÉRJEN INGYENES AJÁNLATOT!
              </h2>
              <p className="font-telegraf mb-8">
                Töltse ki az alábbi űrlapot, és 24 órán belül felveszem Önnel a
                kapcsolatot. Kérdés esetén keressen bizalommal!
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-telegraf">
                    Név*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue"
                    placeholder="Teljes név"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-telegraf">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue"
                    placeholder="email@pelda.hu"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1 font-telegraf">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue"
                    placeholder="+36 xx xxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-telegraf">
                    Üzenet
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue"
                    placeholder="Kérem írja le röviden, hogy miben segíthetek..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="cta-button w-full justify-center py-3"
                  >
                    KÉREM AZ INGYENES AJÁNLATOT
                  </button>
                </div>
              </form>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/handshake-business.jpg"
                  alt="Üzleti partnerek"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative h-10 w-10 mr-2">
                <Image
                  src="/alfa-insurance-logo.png"
                  alt="Alfa Biztosítás"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="text-xl font-bold font-antonio">
                ALFA BIZTOSÍTÁS
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <a
                href="#about"
                className="hover:text-blue-300 transition font-telegraf"
              >
                Bemutatkozás
              </a>
              <a
                href="#services"
                className="hover:text-blue-300 transition font-telegraf"
              >
                Szolgáltatások
              </a>
              <a
                href="#free-quote"
                className="hover:text-blue-300 transition font-telegraf"
              >
                Ajánlatkérés
              </a>
              <a
                href="#contact"
                className="hover:text-blue-300 transition font-telegraf"
              >
                Kapcsolat
              </a>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="font-telegraf text-sm">
                © 2023 Alfa Biztosítás. Minden jog fenntartva.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
