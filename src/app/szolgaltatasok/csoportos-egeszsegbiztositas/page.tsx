import Footer from "../../components/Footer";
import Image from "next/image";

export default function CsoportosEgeszsegbiztositas() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row min-h-[70vh] md:min-h-[60vh] items-center md:items-stretch relative bg-[#3A5D98] px-2 sm:px-4"
        id="hero"
      >
        {/* Left column - Image with blue border */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#3A5D98] pt-6 md:pt-0 pb-4 md:pb-0">
          <div className="border-8 border-[#4592c6] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center mx-auto">
            <Image
              src="/insurance-consultant.jpg"
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
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start bg-[#0C1D3D] px-4 py-6 md:p-16">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 font-antonio text-white uppercase tracking-wider leading-tight">
              CÉGES EGÉSZSÉGBIZTOSÍTÁS ÉS CSOPORTOS SZOLGÁLTATÁS-FINANSZÍROZÓ
              BIZTOSÍTÁS
            </h1>
            <p className="text-lg md:text-xl font-telegraf text-gray-200 mb-6 md:mb-8 leading-relaxed">
              Befektetés Munkavállalóiba, Hatékonyság Cégébe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/kapcsolat"
                className="bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-lg border-2 border-highlight-blue text-center"
              >
                AJÁNLATKÉRÉS
              </a>
              <a
                href="tel:+36301818047"
                className="border-2 border-highlight-blue text-highlight-blue font-bold py-3 px-6 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-lg text-center"
              >
                +36 30 18 18 047
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-antonio text-white text-center">
            Befektetés Munkavállalóiba, Hatékonyság Cégébe
          </h2>
          <div className="text-lg font-telegraf text-gray-200 leading-relaxed space-y-4 max-w-5xl mx-auto">
            <p>
              Cégvezetőként jól tudja, hogy a kiváló munkaerő megtartása és a
              munkavállalói elégedettség kulcsfontosságú a sikerhez. A{" "}
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
              <strong className="text-highlight-blue">humán CASCO-nak</strong>{" "}
              is nevezni), kiszámítható, szakszerű ellátást biztosít, és
              jelentősen hozzájárulhat a munkavállalók betegszabadságon töltött
              idejének csökkentéséhez, gyorsabb és stresszmentes gyógyulásukat
              segítve.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
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
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            Előnyök a cég számára: Miért válasszon vállalati
            egészségbiztosítást?
          </h2>

          <div className="space-y-6">
            <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg">
              <p className="text-lg font-telegraf text-gray-200 mb-6">
                A{" "}
                <strong className="text-highlight-blue">
                  csoportos egészségbiztosítás
                </strong>{" "}
                bevezetése számos kézzelfogható előnnyel jár az Ön vállalata
                számára:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                    Munkavállalói elégedettség és megtartás:
                  </h3>
                  <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        Versenyképes juttatásként növeli a dolgozók kötődését és
                        csökkenti a fluktuációt
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        A{" "}
                        <strong className="text-highlight-blue">
                          munkáltatói egészségbiztosítás
                        </strong>{" "}
                        vonzóbbá teszi a céget
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        Főleg a Z generációhoz tartozó fiatal munkaerőnek
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                    Csökkenő hiányzások:
                  </h3>
                  <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        A gyorsabb orvosi ellátás és a hatékony gyógyulás révén
                        kevesebb a táppénzen töltött nap
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>Nő a termelékenység</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                    Növekvő produktivitás:
                  </h3>
                  <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        Az egészségesebb és kiegyensúlyozottabb munkavállalók
                        hatékonyabban látják el feladataikat
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                    Vonzó munkáltatói imázs:
                  </h3>
                  <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        Megmutatja, hogy a cég törődik munkatársai egészségével
                        és jóllétével
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                    Adminisztrációs teher csökkentése:
                  </h3>
                  <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        Gyors és szakszerű ellátásszervezés révén kevesebb
                        adminisztráció hárul a HR-re
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                    Rugalmas csomagok:
                  </h3>
                  <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                    <li className="flex items-start">
                      <span className="text-highlight-blue mr-2 mt-1">•</span>
                      <span>
                        Lehetőség van a biztosítási védelem mértékét munkakörhöz
                        vagy pozícióhoz igazítani a{" "}
                        <strong className="text-highlight-blue">
                          vállalati egészségbiztosításon
                        </strong>{" "}
                        belül
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
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
                szolgáltatásfinanszírozó
              </strong>{" "}
              szerkezet különösen kézzelfogható előnyöket nyújt a
              munkavállalóknak a gyors és szervezett magánegészségügyi
              ellátáshoz való hozzáférés terén:
            </p>

            <div className="bg-highlight-blue bg-opacity-20 border border-highlight-blue p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2 font-antonio text-highlight-blue uppercase">
                Kiemelt előny:
              </h3>
              <p className="text-gray-200 font-telegraf">
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

            <div className="mt-6 bg-red-900 bg-opacity-30 border border-red-500 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2 font-antonio text-red-400 uppercase">
                Teljesen elkerülhető a paraszolvencia és hálapénz:
              </h3>
              <p className="text-gray-200 font-telegraf">
                A szolgáltatás keretében igénybe vett{" "}
                <strong className="text-highlight-blue">
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
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            Mit tartalmaz a szolgáltatásfinanszírozó egészségbiztosítás?
          </h2>

          <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg mb-8">
            <p className="text-lg font-telegraf text-gray-200 mb-6">
              <strong className="text-highlight-blue">
                Szolgáltatásfinanszírozó
              </strong>{" "}
              programok csomagjai széles körű szolgáltatásokat foglalnak
              magukban, biztosítva munkavállalóinak a szükséges orvosi
              segítséget:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Egészségügyi asszisztencia:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Egész héten elérhető telefonos segítség (24/7)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Egészségügyi tanácsadás</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Betegút-szervezés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Időpontfoglalás a partnerintézményekbe</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Járóbeteg-szakellátás:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Szakrendelések széles skálája</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Diagnosztikai vizsgálatok:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Laborvizsgálatok</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Képalkotó diagnosztika (ultrahang, CT, MR) – a választott
                      csomagtól függően
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Megelőző vizsgálatok:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Éves preventív{" "}
                      <strong className="text-highlight-blue">
                        szűrővizsgálatok
                      </strong>{" "}
                      (bizonyos csomagokban)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Műtétek és Kórházi ellátás:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Ambuláns műtétek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Egynapos sebészet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Fekvőbeteg-ellátás (akár emelt szintű elhelyezéssel
                      bizonyos csomagokban)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Onkológiai ellátás:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Kivizsgálás, szakvélemény, tanácsadás</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>
                      Összegbiztosítás rosszindulatú daganatos betegségekre
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Egyéb szolgáltatások:
                </h3>
                <ul className="space-y-2 text-gray-200 font-telegraf text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Gyógytorna (bizonyos csomagban)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Házivizit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Betegszállítás</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-blue mr-2 mt-1">•</span>
                    <span>Nemzetközi második orvosi vélemény</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-highlight-blue bg-opacity-20 border border-highlight-blue p-4 rounded-lg">
              <p className="text-gray-200 font-telegraf">
                Több különböző szolgáltatási csomag áll rendelkezésre, amelyek
                eltérő tartalommal bírnak, így kiválaszthatja a munkavállalói
                igényeinek és a cég lehetőségeinek leginkább megfelelőt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types and Differences Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            Miben más a céges (csoportos) egészségbiztosítás?
          </h2>

          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg mb-8">
            <p className="text-lg font-telegraf text-gray-200 mb-6">
              A{" "}
              <strong className="text-highlight-blue">
                céges egészségbiztosítás
              </strong>{" "}
              egy csoportos konstrukció, melynek leglényegesebb különbsége az
              egyéni biztosításokhoz képest, hogy a szerződő (a díjfizető) a
              munkaadó, míg a biztosítottak a munkavállalók.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary-blue border border-highlight-blue p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Kedvezőbb díjazásúak
                </h3>
                <p className="text-gray-200 font-telegraf text-sm">
                  (egy főre vetítve), különösen nagyobb létszámú csoportok
                  esetén
                </p>
              </div>

              <div className="bg-secondary-blue border border-highlight-blue p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Egyszerűbb szerződési feltételekkel
                </h3>
                <p className="text-gray-200 font-telegraf text-sm">
                  bírnak, gyakran nincs szükség orvosi vizsgálatra vagy
                  egészségügyi nyilatkozatra
                </p>
              </div>

              <div className="bg-secondary-blue border border-highlight-blue p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 font-antonio text-highlight-blue uppercase">
                  Rugalmasan alakíthatók
                </h3>
                <p className="text-gray-200 font-telegraf text-sm">
                  lehetővé téve akár a dolgozói csoportok közötti
                  differenciálást a szolgáltatások terén
                </p>
              </div>
            </div>

            <div className="mt-6 bg-highlight-blue bg-opacity-20 border border-highlight-blue p-4 rounded-lg">
              <p className="text-gray-200 font-telegraf">
                A{" "}
                <strong className="text-highlight-blue">
                  céges egészségbiztosítási
                </strong>{" "}
                védelem a munkaviszony fennállásáig tart.
              </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            Milyen típusú céges egészségbiztosítások léteznek?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-antonio text-highlight-blue uppercase">
                Szolgáltatásfinanszírozó egészségbiztosítás:
              </h3>
              <p className="text-gray-200 font-telegraf mb-4">
                Ebben az esetben a biztosító nem pénzbeli térítést nyújt, hanem
                megszervezi és finanszírozza a biztosított magánegészségügyi
                ellátását a szerződött partnereinél. A hangsúly itt a gyors és
                szervezett hozzáférésen van a privát ellátáshoz.
              </p>
            </div>

            <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-antonio text-highlight-blue uppercase">
                Összegtérítéses egészségbiztosítás:
              </h3>
              <p className="text-gray-200 font-telegraf mb-4">
                Ez a típus meghatározott egészségügyi események (pl. csonttörés,
                műtét, kritikus betegség) bekövetkezése esetén előre
                meghatározott összeget fizet ki a biztosítottnak utólagosan. A
                kifizetett összeg szabadon felhasználható. Céges konstrukciókban
                gyakran csoportos élet- vagy balesetbiztosítással kombinálva
                érhető el.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Costs and Tax Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            Költségek és Adózás: Mennyibe kerül a céges egészségbiztosítás?
          </h2>

          <div className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg mb-8 max-w-5xl mx-auto">
            <p className="text-lg font-telegraf text-gray-200 mb-6 leading-relaxed">
              Egy{" "}
              <strong className="text-highlight-blue">
                csoportos egészségbiztosítás
              </strong>{" "}
              díja kedvezőbb lehet, mint az egyéni konstrukcióké, és több
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

            <div className="bg-red-900 bg-opacity-30 border border-red-500 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2 font-antonio text-red-400 uppercase">
                Adózási tudnivalók ügyvezetőknek:
              </h3>
              <p className="text-gray-200 font-telegraf mb-4">
                Tisztelt Ügyvezető! Fontos tudni, hogy a{" "}
                <strong className="text-highlight-blue">
                  céges egészségbiztosítás
                </strong>{" "}
                2019 óta adóköteles{" "}
                <strong className="text-highlight-blue">
                  béren kívüli juttatásnak
                </strong>{" "}
                minősül. Ez azt jelenti, hogy a biztosítási díjon felül a cégnek
                további adó- és járulékterhe (közteher) keletkezik.
              </p>
              <p className="text-gray-200 font-telegraf">
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
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            A Megfelelő Megoldás Kiválasztása: Hogyan találja meg az optimális
            céges egészségbiztosítást?
          </h2>

          <div className="bg-primary-blue border-2 border-highlight-blue p-6 rounded-lg max-w-5xl mx-auto">
            <p className="text-lg font-telegraf text-gray-200 mb-6 leading-relaxed">
              A{" "}
              <strong className="text-highlight-blue">
                céges egészségbiztosítások
              </strong>{" "}
              kínálata széles, és a különböző szolgáltatók eltérő feltételeket
              és díjakat kínálhatnak. A munkavállalók igényeinek felmérése és a
              cégre szabott, költséghatékony{" "}
              <strong className="text-highlight-blue">
                szolgáltatásfinanszírozó
              </strong>{" "}
              vagy összegtérítéses megoldás megtalálása komplex feladat lehet.
            </p>

            <p className="text-lg font-telegraf text-gray-200 leading-relaxed">
              Éppen ezért érdemes lehet tapasztalt, független biztosítási
              szakértő segítségét kérni, aki átlátja a piaci kínálatot, bekéri
              az ajánlatokat, és segít kiválasztani az Ön cégének ideális{" "}
              <strong className="text-highlight-blue">
                csoportos egészségbiztosítási
              </strong>{" "}
              konstrukciót.
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
            csomagot! Kérje szakértőink visszahívását, akik segítenek a
            döntésben és az Ön cégére szabott ajánlat elkészítésében.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kapcsolat"
              className="bg-highlight-blue text-primary-blue font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-lg border-2 border-highlight-blue"
            >
              Kérek visszahívást a céges egészségbiztosításról
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
