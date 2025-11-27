import Footer from "../../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Céges Egészségbiztosítás és Csoportos Szolgáltatás-Finanszírozó Biztosítás | Alpha Trust Insurance",
  description:
    "Céges egészségbiztosítás Budapesten. Csoportos konstrukciók, szolgáltatás-finanszírozó biztosítás, kedvezőbb díjak nagyobb létszámú csoportoknak. Ingyenes ajánlatkérés!",
  keywords: [
    "céges egészségbiztosítás",
    "csoportos egészségbiztosítás",
    "szolgáltatás-finanszírozó biztosítás",
    "vállalati egészségbiztosítás",
    "csoportos konstrukció",
    "munkavállalói egészségbiztosítás",
    "céges biztosítás Budapest",
    "biztosítási alkusz",
  ],
  alternates: {
    canonical: "/szolgaltatasok/csoportos-egeszsegbiztositas",
  },
  openGraph: {
    title: "Céges Egészségbiztosítás | Alpha Trust Insurance",
    description:
      "Céges egészségbiztosítás Budapesten. Csoportos konstrukciók, szolgáltatás-finanszírozó biztosítás, kedvezőbb díjak.",
    url: "https://alphabiztositas.com/szolgaltatasok/csoportos-egeszsegbiztositas",
  },
};

export default function CsoportosEgeszsegbiztositas() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Hero Section */}
      <header
        className="flex flex-col md:flex-row min-h-[60vh] md:min-h-[60vh] items-center md:items-stretch relative bg-[#3A5D98] px-2 sm:px-4"
        id="hero"
      >
        {/* Left column - Image with blue border */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#3A5D98] pt-4 md:pt-0 pb-4 md:pb-0">
          <div className="border-4 md:border-8 border-[#4592c6] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center mx-auto">
            <Image
              src="/egbizt.jpg"
              alt="Csoportos egészségbiztosítás"
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
              CÉGES EGÉSZSÉGBIZTOSÍTÁS ÉS CSOPORTOS SZOLGÁLTATÁS-FINANSZÍROZÓ
              BIZTOSÍTÁS
            </h1>
            <p className="text-base md:text-lg font-telegraf text-gray-200 mb-4 md:mb-6 leading-relaxed">
              Befektetés Munkavállalóiba, Hatékonyság Cégébe
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="https://docs.google.com/forms/d/1XD6RLoYR_u5C_KI46Zx2ZZwB1hFgmfxvSoUgWRjDU8Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-base md:text-lg"
              >
                AJÁNLATKÉRÉS
              </a>
              <a
                href="tel:+36301818047"
                className="border-2 border-highlight-blue text-highlight-blue font-bold py-3 px-6 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-base md:text-lg text-center"
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
                Befektetés Munkavállalóiba, Hatékonyság Cégébe
              </h2>
              <div className="text-lg font-telegraf text-gray-200 leading-relaxed space-y-4">
                <p>
                  Cégvezetőként jól tudja, hogy a kiváló munkaerő megtartása és
                  a munkavállalói elégedettség kulcsfontosságú a sikerhez. A{" "}
                  <strong className="text-highlight-blue">
                    béren kívüli juttatások
                  </strong>
                  , mint például a{" "}
                  <strong className="text-highlight-blue">
                    csoportos egészségbiztosítás
                  </strong>
                  , hatékony eszközt jelentenek dolgozói megbecsülésének
                  kifejezésére, életminőségük javítására és a{" "}
                  <strong className="text-highlight-blue">
                    cég iránti lojalitás fokozására
                  </strong>
                  .
                </p>
                <p>
                  Egy jól megválasztott{" "}
                  <strong className="text-highlight-blue">
                    céges egészségbiztosítás
                  </strong>
                  , különösen egy{" "}
                  <strong className="text-highlight-blue">
                    szolgáltatásfinanszírozó
                  </strong>{" "}
                  konstrukció (amit szoktak{" "}
                  <strong className="text-highlight-blue">
                    humán CASCO-nak
                  </strong>{" "}
                  is nevezni), kiszámítható, szakszerű ellátást biztosít, és
                  jelentősen hozzájárulhat a munkavállalók betegszabadságon
                  töltött idejének csökkentéséhez, gyorsabb és stresszmentes
                  gyógyulásukat segítve.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/3">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/handshake-business.jpg"
                  alt="Céges egészségbiztosítás és munkavállalói elégedettség"
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
              <a
                href="https://docs.google.com/forms/d/1XD6RLoYR_u5C_KI46Zx2ZZwB1hFgmfxvSoUgWRjDU8Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-base md:text-lg"
              >
                Ajánlatok összehasonlítása
              </a>
              <a
                href="https://docs.google.com/forms/d/1XD6RLoYR_u5C_KI46Zx2ZZwB1hFgmfxvSoUgWRjDU8Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-base md:text-lg"
              >
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
            Milyen problémákra nyújt megoldást a céges egészségbiztosítás?
          </h2>
          <div className="text-lg font-telegraf text-gray-200 leading-relaxed space-y-4 mb-8 max-w-5xl mx-auto">
            <p>
              A munkavállaló betegsége egy cég életében olyan, mint egy{" "}
              <strong className="text-highlight-blue">humán üzemszünet</strong>:
              a termelőképesség csökken, miközben a fix költségek megmaradnak.
              Gondoljon bele: ha egy{" "}
              <strong className="text-highlight-blue">kulcsember</strong>{" "}
              kényszerül hetekre{" "}
              <strong className="text-highlight-blue">betegállományba</strong>{" "}
              egy fájó térd miatt, csak azért, mert az MR-vizsgálatra heteket
              kell várnia az állami ellátásban, az a cégnek nem csupán emberi,
              de komoly anyagi veszteség is.
            </p>
            <p>
              A{" "}
              <strong className="text-highlight-blue">
                céges egészségbiztosítás
              </strong>{" "}
              pontosan az ilyen helyzetekre kínál gyors és hatékony megoldást,
              elkerülve a hosszas kiesést és a felmerülő költségeket.
            </p>
          </div>

          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 font-antonio text-highlight-blue uppercase">
              Ezen túlmenően a vállalati egészségbiztosítás az alábbi
              problémákra is választ nyújt:
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
                    csoportos egészségbiztosítás
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
                  Panasz esetén a munkavállaló tudja, kihez és hova forduljon
                  segítségért
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
            Előnyök a cég számára: Miért válasszon vállalati
            egészségbiztosítást?
          </h2>

          <div className="space-y-8">
            {/* Bevezető szöveg */}
            <div className="text-center">
              <p className="text-lg font-telegraf text-gray-200 max-w-4xl mx-auto">
                A{" "}
                <strong className="text-highlight-blue">
                  csoportos egészségbiztosítás
                </strong>{" "}
                bevezetése számos kézzelfogható előnnyel jár az Ön vállalata
                számára:
              </p>
            </div>

            {/* Főbb előnyök kártyákban */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Munkavállalói előnyök */}
              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      👥
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Munkavállalói előnyök
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-200 font-telegraf">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>
                      Versenyképes juttatásként növeli a dolgozók kötődését
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Csökkenti a fluktuációt, főleg a Z generációnál</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Vonzóbbá teszi a céget új munkaerő számára</span>
                  </li>
                </ul>
              </div>

              {/* Üzleti előnyök */}
              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-highlight-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-blue font-bold text-xl">
                      📈
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-antonio text-highlight-blue uppercase">
                    Üzleti előnyök
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-200 font-telegraf">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Csökkennek a betegszabadságok és hiányzások</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Nő a termelékenység és hatékonyság</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Csökken az adminisztrációs teher</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* További előnyök */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    🏆
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Vonzó imázs
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Megmutatja, hogy a cég törődik munkatársai egészségével és
                  jóllétével
                </p>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    ⚙️
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Rugalmas csomagok
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Lehetőség van a biztosítási védelem mértékét munkakörhöz
                  igazítani
                </p>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    💡
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Szakszerű szervezés
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Gyors és szakszerű ellátásszervezés révén kevesebb
                  adminisztráció
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Employee Benefits Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-sm md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Előnyök a munkavállalók számára: Mit nyújt a céges
            egészségbiztosítás a dolgozóknak?
          </h2>

          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg mb-8">
            <p className="text-lg font-telegraf text-gray-200 mb-6">
              A munkavállalók számos közvetlen előnyét élvezhetik a{" "}
              <strong className="text-highlight-blue">
                céges egészségbiztosításnak
              </strong>{" "}
              köszönhetően. Egy{" "}
              <strong className="text-highlight-blue">
                szolgáltatás finanszírozó
              </strong>{" "}
              szerkezet különösen kézzelfogható előnyöket nyújt a
              munkavállalóknak a gyors és szervezett magánegészségügyi
              ellátáshoz való hozzáférés terén:
            </p>

            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2 font-antonio text-white uppercase">
                Kiemelt előny:
              </h3>
              <p className="text-white font-telegraf">
                Bizonyos csomagokban a már meglévő (előzmény) betegségekből
                eredő későbbi szövődmények, egészségügyi problémák ellátására is
                kiterjedhet a fedezet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Gyors hozzáférés:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Nincs várólista, gyors időpontfoglalás és hozzáférés
                      magánorvosi szakrendelésekhez
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Minőségi ellátás:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Szakszerű orvosi ellátás korszerű, színvonalas
                      magánrendelőkben és magánkórházakban
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Pénzügyi biztonság:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Nincs vizsgálatonkénti fizetés, a biztosítási díj fejében
                      legtöbbször korlátlan számú (orvosilag indokolt) ellátás
                      vehető igénybe
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Kényelem:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Egészségügyi tanácsadás és betegút-szervezés segíti az
                      ellátások koordinálását
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Átfogó gondoskodás:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Hozzáférés széles körű szolgáltatásokhoz a
                      járóbeteg-ellátástól a diagnosztikán át a műtétekig
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Megelőzés:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Éves{" "}
                      <strong className="text-highlight-blue">
                        szűrővizsgálatok
                      </strong>{" "}
                      segítenek a betegségek korai felismerésében és
                      megelőzésében
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-highlight-blue bg-opacity-20 border border-highlight-blue p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2 font-antonio text-white uppercase">
                Teljesen elkerülhető a paraszolvencia és hálapénz:
              </h3>
              <p className="text-white font-telegraf">
                A szolgáltatás keretében igénybe vett{" "}
                <strong className="text-white">
                  magánegészségügyi ellátásért
                </strong>{" "}
                nem kell külön, nem hivatalos térítést fizetnie, ami anyagi és
                morális szempontból is megkönnyebbülést jelent.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Coverage Details Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Mit tartalmaz a szolgáltatásfinanszírozó egészségbiztosítás?
          </h2>

          <div className="space-y-8">
            {/* Bevezető szöveg */}
            <div className="text-center mb-8">
              <p className="text-lg font-telegraf text-gray-200 max-w-4xl mx-auto">
                <strong className="text-highlight-blue">
                  Szolgáltatásfinanszírozó
                </strong>{" "}
                programok csomagjai széles körű szolgáltatásokat foglalnak
                magukban, biztosítva munkavállalóinak a szükséges orvosi
                segítséget.
              </p>
            </div>

            {/* Főbb szolgáltatások */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Alapvető szolgáltatások */}
              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
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
              <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
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
                    <span>Szakrendelések széles skálája</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Ambuláns műtétek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-3 mt-1">✓</span>
                    <span>Egynapos sebészet</span>
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
              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    🔬
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Diagnosztikai vizsgálatok
                </h4>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li>Laborvizsgálatok</li>
                  <li>Képalkotó diagnosztika</li>
                  <li>Ultrahang, CT, MR</li>
                </ul>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
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
                  <li>Bizonyos csomagokban</li>
                </ul>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    🎗️
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Onkológiai ellátás
                </h4>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li>Kivizsgálás, szakvélemény</li>
                  <li>Tanácsadás</li>
                  <li>Összegbiztosítás</li>
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
              </div>
            </div>

            {/* Fontos megjegyzés */}
            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-6 rounded-lg text-center">
              <p className="text-white font-telegraf font-bold">
                Több különböző szolgáltatási csomag áll rendelkezésre, amelyek
                eltérő tartalommal bírnak, így kiválaszthatja a munkavállalói
                igényeinek és a cég lehetőségeinek leginkább megfelelőt.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Types and Differences Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Miben más a céges (csoportos) egészségbiztosítás?
          </h2>

          <div className="space-y-8">
            {/* Bevezető szöveg */}
            <div className="text-center mb-8">
              <p className="text-lg font-telegraf text-gray-200 max-w-4xl mx-auto">
                A{" "}
                <strong className="text-highlight-blue">
                  céges egészségbiztosítás
                </strong>{" "}
                egy csoportos konstrukció, melynek leglényegesebb különbsége az
                egyéni biztosításokhoz képest, hogy a szerződő (a díjfizető) a
                munkaadó, míg a biztosítottak a munkavállalók.
              </p>
            </div>

            {/* Főbb előnyök */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    💰
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Kedvezőbb díjazás
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Egy főre vetítve kedvezőbb, különösen nagyobb létszámú
                  csoportok esetén
                </p>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    📋
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Egyszerűbb feltételek
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Gyakran nincs szükség orvosi vizsgálatra vagy egészségügyi
                  nyilatkozatra
                </p>
              </div>

              <div className="bg-primary-blue border border-highlight-blue p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-highlight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">
                    ⚙️
                  </span>
                </div>
                <h4 className="text-lg font-bold font-antonio text-highlight-blue uppercase mb-3">
                  Rugalmas alakítás
                </h4>
                <p className="text-gray-200 font-telegraf text-sm">
                  Lehetővé teszi a dolgozói csoportok közötti differenciálást
                </p>
              </div>
            </div>

            {/* Biztosítási típusok */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
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
                  szerződött partnereinél.
                </p>
                <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-3 rounded-lg">
                  <p className="text-white font-telegraf text-sm font-bold">
                    ✓ Gyors és szervezett hozzáférés a privát ellátáshoz
                  </p>
                </div>
              </div>

              <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
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
                  utólagosan.
                </p>
                <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-3 rounded-lg">
                  <p className="text-white font-telegraf text-sm font-bold">
                    ✓ A kifizetett összeg szabadon felhasználható
                  </p>
                </div>
              </div>
            </div>

            {/* Fontos megjegyzés */}
            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-6 rounded-lg text-center">
              <p className="text-white font-telegraf font-bold">
                A{" "}
                <strong className="text-white">
                  céges egészségbiztosítási
                </strong>{" "}
                védelem a munkaviszony fennállásáig tart.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Costs and Tax Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Költségek és Adózás: Mennyibe kerül a céges egészségbiztosítás?
          </h2>

          <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg mb-8 max-w-5xl mx-auto">
            <p className="text-lg font-telegraf text-gray-200 mb-6 leading-relaxed">
              Egy{" "}
              <strong className="text-highlight-blue">
                csoportos egészségbiztosítás
              </strong>{" "}
              díja kedvezőbb lehet, mint az egyéni konstrukcióké, ez több
              tényezőtől függ:
            </p>

            <ul className="space-y-3 text-gray-200 font-telegraf mb-6">
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">•</span>
                <span>
                  A{" "}
                  <strong className="text-highlight-blue">
                    vállalati egészségbiztosítás
                  </strong>{" "}
                  típusa és a választott csomag tartalma
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">•</span>
                <span>
                  A biztosított munkavállalók száma (nagyobb létszám általában
                  kedvezőbb egy főre jutó díjat jelent)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1">•</span>
                <span>A biztosított csoport átlagéletkora</span>
              </li>
            </ul>

            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2 font-antonio text-white uppercase">
                Adózási tudnivalók ügyvezetőknek:
              </h3>
              <p className="text-white font-telegraf mb-4">
                Tisztelt Ügyvezető! Fontos tudni, hogy a{" "}
                <strong className="text-white">céges egészségbiztosítás</strong>{" "}
                2019 óta adóköteles{" "}
                <strong className="text-white">béren kívüli juttatásnak</strong>{" "}
                minősül. Ez azt jelenti, hogy a biztosítási díjon felül a cégnek
                további adó- és járulékterhe (közteher) keletkezik.
              </p>
              <p className="text-white font-telegraf">
                Bár a jogszabályi változás növelte a ráfordítást, a
                munkavállalók elégedettségéből és a betegszabadságok
                csökkenéséből fakadó üzleti előnyök miatt a legtöbb cég számára
                továbbra is stratégiailag előnyös ez a befektetés.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Implementation Section */}
      <section className="py-6 md:py-10 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            A Megfelelő Megoldás Kiválasztása: Hogyan találja meg az optimális
            céges egészségbiztosítást?
          </h2>

          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg max-w-5xl mx-auto">
            <p className="text-lg font-telegraf text-gray-200 mb-6 leading-relaxed">
              A{" "}
              <strong className="text-highlight-blue">
                vállalati egészségbiztosítások
              </strong>{" "}
              piaca rendkívül szerteágazó, a szolgáltatók pedig eltérő
              díjszabással és feltételekkel dolgoznak. A munkavállalói
              igényekhez igazodó, egyedi és költséghatékony – akár{" "}
              <strong className="text-highlight-blue">
                szolgáltatásfinanszírozó
              </strong>
              , akár összegtérítéses – konstrukció megtalálása időigényes
              feladat.
            </p>

            <p className="text-lg font-telegraf text-gray-200 leading-relaxed">
              Egy tapasztalt, független biztosítási szakértő bevonása jelentősen
              megkönnyítheti a döntést. A szakember ismeri a teljes piaci
              palettát, bekéri és összehasonlítja az ajánlatokat, ezzel segítve
              az Ön cége számára legkedvezőbb{" "}
              <strong className="text-highlight-blue">
                csoportos egészségbiztosítás
              </strong>{" "}
              kiválasztását.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-antonio text-white">
            Kérdése van a céges egészségbiztosítással kapcsolatban? Kérjen
            visszahívást!
          </h2>
          <p className="text-lg font-telegraf text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
            Találja meg az igényeinek megfelelő{" "}
            <strong className="text-highlight-blue">
              céges egészségbiztosítási
            </strong>{" "}
            csomagot! Keressen bizalommal érdemi tájékoztatás céljából!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://docs.google.com/forms/d/1XD6RLoYR_u5C_KI46Zx2ZZwB1hFgmfxvSoUgWRjDU8Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Ajánlatkérés csoportos egészségbiztosításra
            </a>
            <a
              href="tel:+36301818047"
              className="border-2 border-highlight-blue text-highlight-blue font-bold py-4 px-8 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-lg"
            >
              +36 30 18 18 047
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kapcsolat" className="cta-button">
              Kérek visszahívást a céges egészségbiztosításról
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
