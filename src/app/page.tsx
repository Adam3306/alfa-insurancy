"use client";

import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row py-12 px-6 sm:px-12 lg:px-24">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/executive-businessman.jpg"
            alt="Executive businessman"
            className="max-h-96 object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-antonio">
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
        </div>
      </section>

      {/* Executive Risk Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src="/stressed-executive.jpg"
                  alt="Stressed executive"
                  className="rounded-lg max-h-72 object-cover"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold mb-4 font-antonio">
                  TISZTELT ÜGYVEZETŐ, IGAZGATÓSÁGI TAG, DÖNTÉSHOZÓ!
                </h2>
                <p className="text-lg mb-2 font-telegraf">
                  Tudta Ön, hogy az ügyvezetők és igazgatósági tagok a vállalat
                  tevékenységével kapcsolatban személyes és korlátlan
                  felelősséggel tartoznak?
                </p>
                <p className="text-lg font-telegraf">
                  Mindez azt jelenti, hogy a vállalat üzleti tevékenységével,
                  vagyonával kapcsolatosan okozott károk esetén a saját
                  magánvagyonával felelhet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Areas Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-antonio">
            MIK AZOK A VEZETŐI KOCKÁZATOK, AMELYEK SZEMÉLYES FELELŐSSÉGGEL
            JÁRNAK?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-secondary-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                SZEMÉLYES FELELŐSSÉG A PÉL. SZERINT
              </h3>
              <p className="font-interphases">
                Az ügyvezető a társaság ügyvezetését az ilyen tisztséget betöltő
                személyektől elvárható gondossággal köteles ellátni.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                BÜNTETŐJOGI KÖVETKEZMÉNYEK
              </h3>
              <p className="font-interphases">
                Az ügyvezetőt akár büntetőjogi felelősség is terhelheti bizonyos
                jogszabálysértések esetén.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg text-center flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                BŐVEBB INFÓ
              </h3>
              <button className="bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg mt-auto font-telegraf">
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg text-center flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                BŐVEBB INFÓ
              </h3>
              <button className="bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg mt-auto font-telegraf">
                TUDJ MEG TÖBBET
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between">
              <h3 className="text-xl font-semibold mb-3 text-center font-antonio">
                EVENT GYANÚS
              </h3>
              <p className="text-center mb-4 font-telegraf">
                Ön egy vezetőként felelős a vállalat eseményeiért és azok
                következményeiért.
              </p>
              <button className="bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf">
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className="bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between">
              <h3 className="text-xl font-semibold mb-3 text-center font-antonio">
                SPECIÁLIS ESETEK
              </h3>
              <p className="text-center mb-4 font-telegraf">
                Speciális esetek, amelyek vezetői felelősséget vonnak maguk
                után.
              </p>
              <button className="bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf">
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className="bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between">
              <h3 className="text-xl font-semibold mb-3 text-center font-antonio">
                BŐVEBB INFÓ
              </h3>
              <p className="text-center mb-4 font-telegraf">
                További információk a vezetői felelősségről és kockázatokról.
              </p>
              <button className="bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf">
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className="bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between">
              <h3 className="text-xl font-semibold mb-3 text-center font-antonio">
                BŐVEBB INFÓ
              </h3>
              <p className="text-center mb-4 font-telegraf">
                További információk a D&O felelősségbiztosításról.
              </p>
              <button className="bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf">
                TUDJ MEG TÖBBET
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* When Needed Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-antonio">
            MIBEN SEGÍT AZ ÜGYVEZETŐ FELELŐSSÉGBIZTOSÍTÁS?
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-full md:w-3/4 text-center">
              <p className="text-lg font-telegraf">
                A D&O biztosítás (Vezetői Felelősségbiztosítás) finanszírozza a
                jogi védekezést és a kártérítést
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-12">
            <img
              src="/handshake.jpg"
              alt="Business handshake"
              className="rounded-lg max-h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-antonio">
            MIBEN SEGÍT AZ ÜGYVEZETŐ FELELŐSSÉGBIZTOSÍTÁS?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-blue p-6 rounded-lg">
              <img
                src="/legal-protection.jpg"
                alt="Legal protection"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 font-antonio">
                JOGI VÉDELEM FINANSZÍROZÁSA
              </h3>
              <p className="font-interphases">
                A biztosító átvállalja a jogi védekezéssel kapcsolatos
                költségeket, beleértve az ügyvédi díjakat és perköltségeket.
              </p>
            </div>
            <div className="bg-primary-blue p-6 rounded-lg">
              <img
                src="/claim-settlement.jpg"
                alt="Claim settlement"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 font-antonio">
                KÁRTÉRÍTÉSI IGÉNYEK RENDEZÉSE
              </h3>
              <p className="font-interphases">
                Fedezetet nyújt a jogos kártérítési igények kifizetésére,
                megvédve az Ön személyes vagyonát.
              </p>
            </div>
            <div className="bg-primary-blue p-6 rounded-lg">
              <img
                src="/reputation-defense.jpg"
                alt="Reputation defense"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 font-antonio">
                REPUTÁCIÓ VÉDELME
              </h3>
              <p className="font-interphases">
                Segít helyreállítani az Ön és a vállalat hírnevét
                krízishelyzetben, szakértői támogatással.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-antonio">
            MIÉRT ÉRDEMES IGÉNYBE VENNI A D&O BIZTOSÍTÁST VÁLLALATÁNÁL?
          </h2>

          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img
                src="/executive-smiling.jpg"
                alt="Smiling executive"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4 font-telegraf">
                A modern üzleti környezetben elengedhetetlen a vezetők védelme a
                személyes felelősségre vonás kockázataival szemben. A D&O
                biztosítás segít Önnek:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-interphases">
                <li>Jogi védelem és szakértői támogatás biztosítása</li>
                <li>Személyes vagyon védelmének garantálása</li>
                <li>Nyugodt döntéshozatal lehetővé tétele</li>
                <li>Vonzóbb munkahely teremtése a vezetők számára</li>
                <li>A vállalat stabilitásának növelése</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 font-antonio">
            KÉRJEN INGYENES AJÁNLATOT!
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="bg-highlight-blue hover:bg-light-blue text-white py-3 px-6 rounded-lg flex items-center justify-center font-telegraf"
            >
              <span className="mr-2">INGYENES AJÁNLATKÉRÉS</span> &gt;&gt;
            </a>
            <a
              href="#contact"
              className="bg-light-blue hover:bg-highlight-blue text-white py-3 px-6 rounded-lg flex items-center justify-center font-telegraf"
            >
              <span className="mr-2">KÉRDÉSE VAN?</span> &gt;&gt;
            </a>
          </div>

          <div className="mt-12">
            <img
              src="/handshake-business.jpg"
              alt="Business handshake"
              className="mx-auto rounded-lg max-h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-antonio">
            KÉRDÉSE VAN?
            <br />
            ÍME A LEGGYAKORIBB KÉRDÉSEK A D&O BIZTOSÍTÁSRÓL
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-secondary-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 font-antonio">
                MI AZ A D&O SZERINTI ÜGYVEZETŐI FELELŐSSÉG?
              </h3>
              <p className="font-interphases">
                A D&O (Directors and Officers) biztosítás védelmet nyújt a
                vezetők személyes vagyona számára olyan kárigényekkel szemben,
                amelyeket a vállalat működésével kapcsolatban támasztanak velük
                szemben.
              </p>
            </div>

            <div className="bg-secondary-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 font-antonio">
                MIKOR MÁS EZ, MINT A VÁLLALATI FELELŐSSÉGBIZTOSÍTÁS?
              </h3>
              <p className="font-interphases">
                Míg a vállalati felelősségbiztosítás a céget védi, a D&O
                biztosítás kifejezetten a vezetők személyes vagyonát védi az
                ellenük indított perek és eljárások esetén.
              </p>
            </div>

            <div className="bg-secondary-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 font-antonio">
                MIKOR VÁLIK SZÜKSÉGESSÉ EZ A BIZTOSÍTÁS?
              </h3>
              <p className="font-interphases">
                A biztosítás akkor válik szükségessé, amikor a vezetőt
                személyesen vonják felelősségre egy üzleti döntés vagy mulasztás
                miatt, és a vállalat nem téríti meg a kárt vagy nem fizeti a
                jogi védekezés költségeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center font-antonio">
            KÉRJEN INGYENES AJÁNLATOT!
          </h2>
          <form className="bg-primary-blue p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 font-telegraf"
                >
                  Név
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
                  placeholder="Teljes neve"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 font-telegraf"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
                  placeholder="Email címe"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1 font-telegraf"
                >
                  Telefonszám
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
                  placeholder="+36 XX XXX XXXX"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1 font-telegraf"
                >
                  Cég
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
                  placeholder="Cég neve"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 font-telegraf"
              >
                Üzenet
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
                placeholder="Üzenete itt..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-highlight-blue hover:bg-light-blue text-white py-3 px-6 rounded-lg font-medium text-lg font-antonio"
              >
                AJÁNLATKÉRÉS KÜLDÉSE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
