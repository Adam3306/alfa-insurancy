import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="bg-primary-blue text-white min-h-screen pt-28 pb-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-antonio mb-8">
          COOKIE SZABÁLYZAT
        </h1>

        <div className="mb-8">
          <Link
            href="/"
            className="text-light-blue hover:text-highlight-blue transition font-telegraf flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Vissza a főoldalra
          </Link>
        </div>

        <div className="prose prose-lg prose-invert max-w-none font-telegraf">
          <p className="mb-4">
            Jelen Cookie Szabályzat célja, hogy az Alpha Biztosítás (a
            továbbiakban: Adatkezelő) által üzemeltetett weboldal (a
            továbbiakban: Weboldal) cookie-k használatával kapcsolatos
            tájékoztatást nyújtson a látogatók számára.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            1. Mi az a cookie?
          </h2>
          <p className="mb-4">
            A cookie (magyarul: süti) egy kisméretű adatcsomag, amit a böngésző
            ment el a felhasználó eszközén a weboldalak kérésére. A cookiek
            segítségével a weboldal emlékezni tud a látogató beállításaira, így
            nem kell azokat újra beállítania minden alkalommal, amikor
            meglátogatja az oldalt.
          </p>
          <p className="mb-4">
            A cookiek számos funkcióval rendelkeznek, többek között információt
            gyűjtenek, megjegyzik a felhasználói beállításokat, lehetőséget
            adnak a weboldal tulajdonosának a felhasználói szokások
            megismerésére és a weboldal minőségének javítására.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            2. Milyen cookie-kat használunk?
          </h2>
          <p className="mb-4">
            Weboldalunkon az alábbi típusú cookie-kat használjuk:
          </p>

          <h3 className="text-xl font-bold font-antonio mt-6 mb-3">
            2.1. Feltétlenül szükséges cookie-k
          </h3>
          <p className="mb-4">
            Ezek a cookie-k szükségesek a weboldal működéséhez, és nem
            kapcsolhatók ki a rendszereinkben. Ezek a cookie-k nem gyűjtenek
            olyan információkat, amelyek alkalmasak lennének a felhasználó
            azonosítására, és általában csak a weboldal látogatásának
            eredményeként jönnek létre.
          </p>

          <h3 className="text-xl font-bold font-antonio mt-6 mb-3">
            2.2. Funkcionális cookie-k
          </h3>
          <p className="mb-4">
            Ezek a cookie-k lehetővé teszik, hogy a weboldal fejlett funkciókat
            és személyre szabott funkciókat biztosítson. Ezeket mi vagy olyan
            harmadik felek helyezhetik el, akiknek szolgáltatásait a
            weboldalunkhoz adtuk.
          </p>

          <h3 className="text-xl font-bold font-antonio mt-6 mb-3">
            2.3. Teljesítményt mérő cookie-k
          </h3>
          <p className="mb-4">
            Ezek a cookie-k lehetővé teszik számunkra, hogy számoljuk a
            látogatásokat és a forgalmi forrásokat, hogy mérni és javítani
            tudjuk az oldalunk teljesítményét. Segítenek nekünk annak
            megismerésében, hogy mely oldalak a legnépszerűbbek és a legkevésbé
            népszerűek, és hogy lássuk, hogyan mozognak a látogatók az oldalon.
          </p>

          <h3 className="text-xl font-bold font-antonio mt-6 mb-3">
            2.4. Célzott cookie-k
          </h3>
          <p className="mb-4">
            Ezeket a cookie-kat a hirdetési partnereink helyezhetik el a
            weboldalunkon. Ezek a vállalatok felhasználhatják őket arra, hogy
            profilt készítsenek az Ön érdeklődési köréről és releváns
            hirdetéseket jelenítsenek meg más webhelyeken.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            3. Hogyan kezelhetem a cookie-kat?
          </h2>
          <p className="mb-4">
            A legtöbb böngésző lehetővé teszi, hogy a felhasználók kontrollálják
            a cookie-kat a böngésző beállításaiban. A böngészőben általában
            lehetőség van:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Az összes cookie megtekintésére és törlésére</li>
            <li>
              Minden cookie elutasítására, kivéve a megbízható webhelyekről
              származókat
            </li>
            <li>
              Annak beállítására, hogy a böngésző jelezze, ha egy weboldal
              cookie-t kíván elhelyezni
            </li>
          </ul>

          <p className="mb-4">
            A különböző böngészők cookie beállítási lehetőségei az alábbi
            linkeken érhetők el:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Google Chrome:{" "}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue hover:text-highlight-blue"
              >
                https://support.google.com/chrome/answer/95647
              </a>
            </li>
            <li>
              Mozilla Firefox:{" "}
              <a
                href="https://support.mozilla.org/hu/kb/sutik-engedelyezese-es-tiltasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue hover:text-highlight-blue"
              >
                https://support.mozilla.org/hu/kb/sutik-engedelyezese-es-tiltasa
              </a>
            </li>
            <li>
              Safari:{" "}
              <a
                href="https://support.apple.com/hu-hu/guide/safari/sfri11471"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue hover:text-highlight-blue"
              >
                https://support.apple.com/hu-hu/guide/safari/sfri11471
              </a>
            </li>
            <li>
              Microsoft Edge:{" "}
              <a
                href="https://support.microsoft.com/hu-hu/microsoft-edge/cookie-k-t%C3%B6rl%C3%A9se-a-microsoft-edge-ben-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue hover:text-highlight-blue"
              >
                https://support.microsoft.com/hu-hu/microsoft-edge/cookie-k-t%C3%B6rl%C3%A9se-a-microsoft-edge-ben-63947406-40ac-c3b8-57b9-2a946a29ae09
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            4. Kapcsolódó jogszabályok
          </h2>
          <p className="mb-4">
            A cookie-k használatára vonatkozó szabályozás az alábbi
            jogszabályokon alapul:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR)
            </li>
            <li>
              Az információs önrendelkezési jogról és az információszabadságról
              szóló 2011. évi CXII. törvény
            </li>
            <li>Az elektronikus hírközlésről szóló 2003. évi C. törvény</li>
          </ul>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            5. A Cookie Szabályzat módosítása
          </h2>
          <p className="mb-4">
            Az Adatkezelő fenntartja a jogot, hogy jelen Cookie Szabályzatot
            bármikor, egyoldalúan módosítsa. A módosításokról az Adatkezelő a
            Weboldalon tájékoztatja a látogatókat.
          </p>

          <p className="mt-8 text-sm">
            Jelen Cookie Szabályzat 2023. január 1. napjától hatályos.
          </p>
        </div>
      </div>
    </div>
  );
}
