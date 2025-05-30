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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 sm:px-12 lg:px-24 bg-primary-blue"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-antonio">
            KAPCSOLAT
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <div className="md:w-1/2">
              <div className="bg-secondary-blue p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 font-antonio">
                  IRODÁNK ELÉRHETŐSÉGEI
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-highlight-blue p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 font-telegraf">Cím</h4>
                      <p className="font-telegraf">
                        1052 Budapest, Váci utca 12.
                      </p>
                      <p className="font-telegraf">5. emelet</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-highlight-blue p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 font-telegraf">Telefon</h4>
                      <p className="font-telegraf">+36 1 123 4567</p>
                      <p className="font-telegraf">+36 30 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-highlight-blue p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 font-telegraf">Email</h4>
                      <p className="font-telegraf">info@alfabiztositas.hu</p>
                      <p className="font-telegraf">
                        ugyfelszolgalat@alfabiztositas.hu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-highlight-blue p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 font-telegraf">
                        Nyitvatartás
                      </h4>
                      <p className="font-telegraf">
                        Hétfő - Péntek: 9:00 - 17:00
                      </p>
                      <p className="font-telegraf">Hétvégén: Zárva</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="md:w-1/2">
              <div className="h-full rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-[400px] w-full bg-secondary-blue rounded-lg flex items-center justify-center">
                  <p className="text-center font-telegraf px-6">
                    Itt egy Google térkép található.
                    <br />
                    A beágyazáshoz szükséges a Google Maps API kulcs és
                    JavaScript kód.
                    <br />
                    <br />
                    <a
                      href="https://goo.gl/maps/yourlocation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button inline-block mt-4"
                    >
                      Mutasd a térképen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Column 1: Logo and Company */}
            <div>
              <div className="flex items-center mb-4">
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
              <p className="text-sm font-telegraf mt-4 text-gray-300">
                Megbízható biztosítási megoldások vezetőknek és vállalatoknak.
                Szakértői tanácsadás, személyre szabott ajánlatok.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 font-antonio">
                Gyors Linkek
              </h3>
              <ul className="space-y-2 font-telegraf">
                <li>
                  <a href="#about" className="hover:text-blue-300 transition">
                    Bemutatkozás
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-300 transition"
                  >
                    Szolgáltatások
                  </a>
                </li>
                <li>
                  <a
                    href="#free-quote"
                    className="hover:text-blue-300 transition"
                  >
                    Ajánlatkérés
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-300 transition">
                    Kapcsolat
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-lg font-bold mb-4 font-antonio">
                Jogi Információk
              </h3>
              <ul className="space-y-2 font-telegraf">
                <li>
                  <a href="/aszf" className="hover:text-blue-300 transition">
                    Általános Szerződési Feltételek
                  </a>
                </li>
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
              <h3 className="text-lg font-bold mb-4 font-antonio">Kapcsolat</h3>
              <ul className="space-y-2 font-telegraf">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-light-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1052 Budapest, Váci utca 12.</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-light-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.948.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+36 1 123 4567</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-light-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@alfabiztositas.hu</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  className="text-white hover:text-blue-300 transition"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-white hover:text-blue-300 transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-white hover:text-blue-300 transition"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright and certification */}
          <div className="pt-8 mt-8 border-t border-secondary-blue">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-telegraf text-sm text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Alfa Biztosítás. Minden jog
                fenntartva.
              </p>
              <div className="flex space-x-4 text-sm font-telegraf text-gray-400">
                <span>MNB engedély szám: H-EN-I-596/2018</span>
                <span>Adószám: 12345678-2-41</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
