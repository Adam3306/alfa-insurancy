import Footer from "../../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Magán Egészségügyi Biztosítás | Magán Egészségbiztosítás Budapest | Alpha Trust Insurance",
  description:
    "Magán egészségügyi biztosítás Budapesten. Gyors hozzáférés magánorvosi ellátáshoz, szűrővizsgálatok, diagnosztika. Ingyenes ajánlatkérés!",
  keywords: [
    "magán egészségügyi biztosítás",
    "magán egészségbiztosítás",
    "magánorvosi ellátás",
    "egészségbiztosítás magánszemélyeknek",
    "magánkórház biztosítás",
    "egészségbiztosítás Budapest",
    "biztosítási alkusz",
  ],
  alternates: {
    canonical: "/szolgaltatasok/magan-egeszsegugy-biztositas",
  },
  openGraph: {
    title: "Magán Egészségügyi Biztosítás | Alpha Trust Insurance",
    description:
      "Magán egészségügyi biztosítás Budapesten. Gyors hozzáférés magánorvosi ellátáshoz, szűrővizsgálatok, diagnosztika.",
    url: "https://alphabiztositas.com/szolgaltatasok/magan-egeszsegugy-biztositas",
  },
};

export default function MaganEgeszsegugyBiztositas() {
  return (
    <div className="text-white bg-primary-blue">
      <Breadcrumb
        items={[
          { label: "Főoldal", href: "/" },
          { label: "Szolgáltatások", href: "/szolgaltatasok" },
          { label: "Magán Egészségügyi Biztosítás" },
        ]}
      />
      {/* Hero Section */}
      <header
        className="flex flex-col md:flex-row min-h-[60vh] md:min-h-[60vh] items-center md:items-stretch relative bg-[#3A5D98] px-2 sm:px-4"
        id="hero"
      >
        {/* Left column - Image with blue border */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#3A5D98] pt-4 md:pt-0 pb-4 md:pb-0">
          <div className="border-4 md:border-8 border-[#4592c6] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center mx-auto">
            <Image
              src="/health-insurance.png"
              alt="Magán egészségügyi biztosítás"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        {/* Right column - Logo and headline */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start bg-[#0C1D3D] px-4 py-4 md:p-16">
          <div className="text-center md:text-left">
            <h1 className="text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-3 md:mb-4 font-antonio text-white uppercase tracking-wide leading-tight">
              MAGÁN EGÉSZSÉGÜGYI BIZTOSÍTÁS
            </h1>
            <p className="text-base md:text-lg font-telegraf text-gray-200 mb-4 md:mb-6 leading-relaxed">
              Gyors Hozzáférés Minőségi Magánorvosi Ellátáshoz
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <a href="/kapcsolat" className="cta-button text-base md:text-lg">
                AJÁNLATKÉRÉS
              </a>
              <a
                href="tel:+36301818047"
                className="border-2 border-highlight-blue text-highlight-blue font-bold py-3 px-6 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-base md:text-lg text-center whitespace-nowrap"
              >
                +36 30 18 18 047
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-antonio text-white text-center lg:text-left">
                Miért Válasszon Magán Egészségügyi Biztosítást?
              </h2>
              <div className="text-lg font-telegraf text-gray-200 leading-relaxed space-y-4">
                <p>
                  Az egészségünk a legfontosabb befektetésünk. Azonban egy
                  váratlan betegség vagy egy szükséges kivizsgálás komoly,
                  hosszan elhúzódó nehézségeket okozhat a bizonytalanság, a
                  stressz és a kiszámíthatatlan költségek miatt.
                </p>
                <p>
                  A{" "}
                  <strong className="text-highlight-blue">
                    szolgáltatásfinanszírozó egészségbiztosítás
                  </strong>{" "}
                  pontosan erre kínál hatékony, előre tervezhető és átlátható
                  megoldást. Ez a termék a nyugalmat kínálja, garantálva a gyors
                  és professzionális magánegészségügyi ellátáshoz való azonnali
                  hozzáférést.
                </p>
                <p>
                  Ez a konstrukció kizárólag az{" "}
                  <strong className="text-highlight-blue">
                    egyéni igényekre fókuszál
                  </strong>
                  , garantálva a minőségi ellátást és a maximális kényelmet.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/3">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/handshake-business.jpg"
                  alt="Magán egészségügyi biztosítás előnyei"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                  loading="lazy"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary-blue border-2 border-highlight-blue p-6 md:p-8 rounded-lg">
            <p className="text-white font-telegraf text-base md:text-lg mb-6">
              Van már szerződése? Nézzük meg, van-e jobb! Küldje el a
              részleteket, én pedig összehasonlítom a legjobb piaci
              ajánlatokkal. A szolgáltatás ingyenes és kötelezettségmentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kapcsolat" className="cta-button text-base md:text-lg">
                Ajánlatok összehasonlítása
              </a>
              <a href="/kapcsolat" className="cta-button text-base md:text-lg">
                Meglévő szerződés felülvizsgálata
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Milyen problémákra nyújt megoldást a magán egészségügyi biztosítás?
          </h2>
          <div className="text-lg font-telegraf text-gray-200 leading-relaxed space-y-4 mb-8 max-w-5xl mx-auto">
            <p>
              Az állami egészségügyi rendszerben gyakran hosszú várólisták,
              korlátozott időpontok és hosszadalmas folyamatok jellemzőek. Ha
              egészségügyi problémája van, nem teheti meg, hogy heteket vagy
              hónapokat várjon egy vizsgálatra vagy kezelésre.
            </p>
            <p>
              A{" "}
              <strong className="text-highlight-blue">
                magán egészségügyi biztosítás
              </strong>{" "}
              pontosan az ilyen helyzetekre kínál gyors és hatékony megoldást,
              elkerülve a hosszas várakozást és a felmerülő költségeket.
            </p>
          </div>

          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 font-antonio text-highlight-blue uppercase">
              A magán egészségügyi biztosítás az alábbi problémákra is választ
              nyújt:
            </h3>
            <ul className="space-y-3 text-gray-200 font-telegraf">
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  Nincs felesleges idő- és energiaveszteség a megfelelő orvos
                  vagy rendelő megtalálásával
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  Elkerülhetőek a magánorvosi ellátás eseti, gyakran magas
                  költségei – a{" "}
                  <strong className="text-highlight-blue">
                    magán egészségbiztosítás
                  </strong>{" "}
                  díjáért cserébe kiszámítható a költség
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  Lerövidülnek a vizsgálatokra és beavatkozásokra szánt
                  várakozási idő
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  Panasz esetén tudja, kihez és hova forduljon segítségért
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  Hozzáférhet a legjobb orvosokhoz és szakrendelésekhez anélkül,
                  hogy hónapokat kellene várnia
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-highlight-blue">
                    Nincs paraszolvencia:
                  </strong>{" "}
                  A szerződött magánegészségügyi szolgáltatóknál az ellátásért
                  nem kell helyszínen fizetni
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-highlight-blue">
                    Időmenedzsment és tervezhetőség:
                  </strong>{" "}
                  Mivel előre tisztában van a pontos időponttal, a napja sokkal
                  tervezhetőbbé válik
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-highlight-blue">
                    Családi kedvezmény:
                  </strong>{" "}
                  Családtagok, a házastárs, pár és a gyermekek is bevonhatók a
                  szerződésbe, melynek köszönhetően a teljes díj kedvezőbb lehet
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-sm md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Előnyök: Miért válasszon magán egészségügyi biztosítást?
          </h2>

          <div className="space-y-8">
            {/* Bevezető szöveg */}
            <div className="text-center">
              <p className="text-lg font-telegraf text-gray-200 max-w-4xl mx-auto">
                A{" "}
                <strong className="text-highlight-blue">
                  magán egészségügyi biztosítás
                </strong>{" "}
                bevezetése számos kézzelfogható előnnyel jár:
              </p>
            </div>

            {/* Főbb előnyök kártyákban */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Személyes előnyök */}
              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      👤
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Személyes előnyök
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-200 font-telegraf">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      Gyors hozzáférés magánorvosi ellátáshoz, nincs várólista
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      Kiszámítható költségek, nincs váratlan magánorvosi számla
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      Minőségi ellátás korszerű magánrendelőkben és
                      magánkórházakban
                    </span>
                  </li>
                </ul>
              </div>

              {/* Egészségügyi előnyök */}
              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      🏥
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Egészségügyi előnyök
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-200 font-telegraf">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      Széles körű szolgáltatások: szakrendelések, diagnosztika,
                      műtétek
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      Éves szűrővizsgálatok a betegségek korai felismeréséhez
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Egészségügyi tanácsadás és betegút-szervezés</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* További előnyök */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    ⚡
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Gyors ellátás
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Nincs hosszú várólista, gyors időpontfoglalás és hozzáférés a
                  szükséges ellátáshoz
                </p>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    💰
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Költséghatékony
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Kiszámítható havi díj, nincs váratlan magánorvosi számla, a
                  biztosítási díj fejében korlátlan számú ellátás
                </p>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    🛡️
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Átfogó védelem
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Széles körű szolgáltatások a járóbeteg-ellátástól a műtétekig,
                  megelőző vizsgálatokkal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Mit tartalmaz a magán egészségügyi biztosítás?
          </h2>

          <div className="space-y-8">
            {/* Bevezető szöveg */}
            <div className="text-center mb-8">
              <p className="text-lg font-telegraf text-gray-200 max-w-4xl mx-auto">
                A{" "}
                <strong className="text-highlight-blue">
                  szolgáltatásfinanszírozó biztosítás
                </strong>{" "}
                a magán egészségügyi ellátás költségének részben vagy egészben
                történő megtérítését jelenti. A csomagok széles választéka teszi
                lehetővé, hogy a biztosított egyéni igényeihez igazítsa a
                fedezetet.
              </p>
            </div>

            {/* Flowchart Image */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden border-4 border-highlight-blue">
                <Image
                  src="/private-health-insurance-flowchart.png"
                  alt="Magán egészségügyi biztosítás folyamatábra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  loading="lazy"
                  quality={90}
                />
              </div>
            </div>

            {/* Főbb szolgáltatások */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Egészségügyi asszisztencia */}
              <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      📞
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Egészségügyi asszisztencia
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-200 font-telegraf">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Egész héten elérhető telefonos segítség (24/7)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Egészségügyi tanácsadás</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Betegút-szervezés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Időpontfoglalás a partnerintézményekbe</span>
                  </li>
                </ul>
              </div>

              {/* Orvosi ellátás */}
              <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      🏥
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Orvosi ellátás
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-200 font-telegraf">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      <strong className="text-highlight-blue">
                        Járóbeteg-szakellátás:
                      </strong>{" "}
                      Belgyógyászat, fül-orr-gégészet, szemészet, nőgyógyászat,
                      urológia, bőrgyógyászat. Bővített csomagokban elérhető
                      többek között allergológia, kardiológia, ortopédia,
                      onkológia is.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      Tervezhető műtétek: Ambuláns műtétek és egynapos sebészet
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Fekvőbeteg-ellátás (emelt szintű elhelyezéssel)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Diagnosztika és vizsgálatok */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    🔬
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Diagnosztikai vizsgálatok
                </h4>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li>Alapvető vizsgálatok (EKG, UH, röntgen)</li>
                  <li>Komplex képalkotó diagnosztika (CT, MRI, PET CT)</li>
                  <li>Laborvizsgálatok</li>
                </ul>
              </div>

              <div className="bg-secondary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    🛡️
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Megelőző vizsgálatok
                </h4>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li>Éves preventív szűrővizsgálatok</li>
                  <li>Betegségek korai felismerése</li>
                  <li>Egészségmegőrzés</li>
                </ul>
              </div>

              <div className="bg-secondary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    🎗️
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Onkológiai védelem
                </h4>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li>Onkológiai diagnosztika, kivizsgálás és szakvélemény</li>
                  <li>
                    Rosszindulatú daganatos betegségekre vonatkozó
                    összegbiztosítás
                  </li>
                  <li>Egyes csomagokban nagyobb összegű kártérítés</li>
                </ul>
              </div>
            </div>

            {/* Egyéb szolgáltatások */}
            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-antonio text-white uppercase text-center">
                Egyéb szolgáltatások
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-blue font-bold text-lg">
                      🏃
                    </span>
                  </div>
                  <p className="text-white font-telegraf text-sm">Gyógytorna</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-blue font-bold text-lg">
                      🏠
                    </span>
                  </div>
                  <p className="text-white font-telegraf text-sm">Házivizit</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-blue font-bold text-lg">
                      🚑
                    </span>
                  </div>
                  <p className="text-white font-telegraf text-sm">
                    Betegszállítás
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-blue font-bold text-lg">
                      🌍
                    </span>
                  </div>
                  <p className="text-white font-telegraf text-sm">
                    Nemzetközi második orvosi vélemény
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-blue font-bold text-lg">
                      💉
                    </span>
                  </div>
                  <p className="text-white font-telegraf text-sm">
                    Influenzavédőoltás (magasabb csomagokban)
                  </p>
                </div>
              </div>
            </div>

            {/* Fontos megjegyzés */}
            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-6 rounded-lg text-center">
              <p className="text-white font-telegraf font-bold">
                Több különböző szolgáltatási csomag áll rendelkezésre, amelyek
                eltérő tartalommal bírnak, így kiválaszthatja az igényeinek
                leginkább megfelelőt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types and Differences Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Milyen típusú magán egészségügyi biztosítás létezik?
          </h2>

          <div className="space-y-8">
            {/* Bevezető szöveg */}
            <div className="text-center mb-8">
              <p className="text-lg font-telegraf text-gray-200 max-w-4xl mx-auto">
                A{" "}
                <strong className="text-highlight-blue">
                  magán egészségügyi biztosítások
                </strong>{" "}
                többféle konstrukcióban érhetők el, amelyek eltérő módon
                működnek és különböző előnyöket kínálnak.
              </p>
            </div>

            {/* Biztosítási típusok */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      🏥
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Szolgáltatásfinanszírozó
                  </h3>
                </div>
                <p className="text-gray-200 font-telegraf mb-4">
                  A biztosító nem pénzbeli térítést nyújt, hanem megszervezi és
                  finanszírozza a biztosított magánegészségügyi ellátását a
                  szerződött partnereinél. Nincs vizsgálatonkénti fizetés, a
                  biztosítási díj fejében legtöbbször korlátlan számú (orvosilag
                  indokolt) ellátás vehető igénybe.
                </p>
                <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-3 rounded-lg">
                  <p className="text-white font-telegraf text-sm font-bold">
                    ✓ Gyors és szervezett hozzáférés a privát ellátáshoz
                  </p>
                </div>
              </div>

              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      💵
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Összegtérítéses
                  </h3>
                </div>
                <p className="text-gray-200 font-telegraf mb-4">
                  Meghatározott egészségügyi események bekövetkezése esetén
                  előre meghatározott összeget fizet ki a biztosítottnak
                  utólagosan. A kifizetett összeg szabadon felhasználható, így
                  Ön döntheti el, hogyan és hol szeretné igénybe venni az
                  ellátást.
                </p>
                <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-3 rounded-lg">
                  <p className="text-white font-telegraf text-sm font-bold">
                    ✓ A kifizetett összeg szabadon felhasználható
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Költségek: Mennyibe kerül a magán egészségügyi biztosítás?
          </h2>

          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg mb-8 max-w-5xl mx-auto">
            <p className="text-lg font-telegraf text-gray-200 mb-6 leading-relaxed">
              A{" "}
              <strong className="text-highlight-blue">
                magán egészségügyi biztosítás
              </strong>{" "}
              díja több tényezőtől függ:
            </p>

            <ul className="space-y-3 text-gray-200 font-telegraf mb-6">
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">•</span>
                <span>A választott biztosítási típus és csomag tartalma</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">•</span>
                <span>A biztosított életkora és egészségi állapota</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">•</span>
                <span>A fedezet mértéke és határai</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">•</span>
                <span>A választott önrész és önrész-kiegyenlítés mértéke</span>
              </li>
            </ul>

            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2 font-antonio text-white uppercase">
                Fontos tudnivaló:
              </h3>
              <p className="text-white font-telegraf">
                A magán egészségügyi biztosítás díja általában havi rendszerben
                fizetendő, és kiszámítható költségként jelentkezik. Ez sokkal
                előnyösebb, mint az eseti magánorvosi számlák, amelyek
                váratlanul és jelentős összegeket jelenthetnek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 font-antonio text-white uppercase">
              💼 Cégvezetőként gondoskodna kollégáiról?
            </h2>
            <p className="text-lg font-telegraf text-gray-200 mb-6 leading-relaxed">
              Ha Ön cégvezető, gondoskodhat kollégái egészségéről{" "}
              <strong className="text-highlight-blue">
                céges egészségbiztosítással
              </strong>
              , ami kiváló eszköz a munkavállalók megtartására és a
              termelékenység növelésére.
            </p>
            <a
              href="/szolgaltatasok/csoportos-egeszsegbiztositas"
              className="cta-button inline-block"
            >
              További információ a céges egészségbiztosításról
            </a>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Hogyan találja meg az optimális magán egészségügyi biztosítást?
          </h2>

          <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg max-w-5xl mx-auto">
            <p className="text-lg font-telegraf text-gray-200 mb-6 leading-relaxed">
              A{" "}
              <strong className="text-highlight-blue">
                magán egészségügyi biztosítások
              </strong>{" "}
              piaca rendkívül szerteágazó, a szolgáltatók pedig eltérő
              díjszabással és feltételekkel dolgoznak. Az igényeihez igazodó,
              egyedi és költséghatékony konstrukció megtalálása időigényes
              feladat.
            </p>

            <p className="text-lg font-telegraf text-gray-200 leading-relaxed">
              Egy tapasztalt, független biztosítási szakértő bevonása jelentősen
              megkönnyítheti a döntést. A szakember ismeri a teljes piaci
              palettát, bekéri és összehasonlítja az ajánlatokat, ezzel segítve
              az Ön számára legkedvezőbb{" "}
              <strong className="text-highlight-blue">
                magán egészségügyi biztosítás
              </strong>{" "}
              kiválasztását.
            </p>
          </div>

          {/* Mozaik Information */}
          <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-6 rounded-lg mt-8 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold mb-4 font-antonio text-white uppercase text-center">
              Mozaik: Magán Egészségbiztosítás
            </h3>
            <p className="text-white font-telegraf leading-relaxed">
              A privát egészségbiztosítás (szolgáltatásfinanszírozó konstrukció)
              a biztosított egészségével kapcsolatos váratlan események
              (betegségek, balesetek, kivizsgálások) esetén nyújt gyors és
              szervezett hozzáférést a magánegészségügyi ellátáshoz. Előnye,
              hogy a biztosítás a nagy összegű, váratlan egészségügyi kiadásokat
              kisebb, rendszeres díjakra osztja, ezzel pénzügyileg tervezhetővé
              teszi a minőségi ellátást.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-antonio text-white">
            Kérdése van a magán egészségügyi biztosítással kapcsolatban? Kérjen
            visszahívást!
          </h2>
          <p className="text-lg font-telegraf text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
            Találja meg az igényeinek megfelelő{" "}
            <strong className="text-highlight-blue">
              magán egészségügyi biztosítási
            </strong>{" "}
            csomagot! Keressen bizalommal érdemi tájékoztatás céljából!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="/kapcsolat"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Ajánlatkérés magán egészségügyi biztosításra
            </a>
            <a
              href="tel:+36301818047"
              className="border-2 border-highlight-blue text-highlight-blue font-bold py-4 px-8 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-lg whitespace-nowrap"
            >
              +36 30 18 18 047
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kapcsolat" className="cta-button">
              Kérek visszahívást a magán egészségügyi biztosításról
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
