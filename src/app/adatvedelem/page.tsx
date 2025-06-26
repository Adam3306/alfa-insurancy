import Link from "next/link";

export default function Adatvedelem() {
  return (
    <div className="bg-primary-blue text-white min-h-screen pt-28 pb-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-antonio mb-8">
          ADATVÉDELMI TÁJÉKOZTATÓ
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
            Jelen Adatvédelmi Tájékoztató (a továbbiakban: Tájékoztató) célja,
            hogy az Alpha Trust Insurance Kft. (a továbbiakban: Adatkezelő) által végzett
            adatkezelési tevékenységekről tájékoztatást nyújtson az érintettek
            számára.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            1. AZ ADATKEZELŐ ADATAI
          </h2>
          <p className="mb-4">
            Név: Alpha Trust Insurance Kft.
            <br />
            Székhely: 2120 Dunakeszi, Felsőtabán utca 11.
            <br />
            Cégjegyzékszám: 2120 Dunakeszi, Felsőtabán utca 11.
            <br />
            Adószám: 27181553-2-13
            <br />
            E-mail: szego@premiumbiztositasok.hu
            <br />
            Telefon: +36 30 18 18 047
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            2. AZ ADATKEZELÉS ALAPELVEI
          </h2>
          <p className="mb-4">
            Az Adatkezelő a személyes adatok kezelése során a következő
            alapelveket tartja szem előtt:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Jogszerűség, tisztességes eljárás és átláthatóság</li>
            <li>Célhoz kötöttség</li>
            <li>Adattakarékosság</li>
            <li>Pontosság</li>
            <li>Integritás és bizalmas jelleg</li>
            <li>Elszámoltathatóság</li>
          </ul>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            3. A KEZELT ADATOK KÖRE ÉS AZ ADATKEZELÉS CÉLJA
          </h2>
          <p className="mb-4">3.1 Ajánlatkérés során kezelt adatok:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Név - azonosítás céljából</li>
            <li>E-mail cím - kapcsolattartás céljából</li>
            <li>Telefonszám - kapcsolattartás céljából</li>
            <li>Cég neve - azonosítás céljából</li>
            <li>Üzenet tartalma - ajánlat elkészítése céljából</li>
          </ul>

          <p className="mb-4">3.2 Szerződéskötés során kezelt adatok:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Név - szerződés teljesítése céljából</li>
            <li>Születési hely és idő - azonosítás céljából</li>
            <li>Lakcím - szerződés teljesítése céljából</li>
            <li>E-mail cím - kapcsolattartás céljából</li>
            <li>Telefonszám - kapcsolattartás céljából</li>
            <li>
              Adóazonosító jel - jogszabályi kötelezettség teljesítése céljából
            </li>
          </ul>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            4. AZ ADATKEZELÉS JOGALAPJA
          </h2>
          <p className="mb-4">
            Az adatkezelés jogalapja az alábbiak szerint alakul:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Ajánlatkérés esetén: az érintett hozzájárulása (GDPR 6. cikk (1)
              bekezdés a) pont)
            </li>
            <li>
              Szerződéskötés esetén: szerződés teljesítése (GDPR 6. cikk (1)
              bekezdés b) pont)
            </li>
            <li>
              Számviteli bizonylatok esetén: jogi kötelezettség teljesítése
              (GDPR 6. cikk (1) bekezdés c) pont)
            </li>
          </ul>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            6. AZ ÉRINTETTEK JOGAI
          </h2>
          <p className="mb-4">Az érintetteket a következő jogok illetik meg:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Tájékoztatáshoz való jog</li>
            <li>Hozzáféréshez való jog</li>
            <li>Helyesbítéshez való jog</li>
            <li>Törléshez való jog</li>
            <li>Korlátozáshoz való jog</li>
            <li>Adathordozhatósághoz való jog</li>
            <li>Tiltakozáshoz való jog</li>
          </ul>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            7. ADATFELDOLGOZÓK
          </h2>
          <p className="mb-4">
            Az Adatkezelő az alábbi adatfeldolgozókat veszi igénybe:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Tárhelyszolgáltató: Példa Kft. (1111 Budapest, Példa utca 1.)
            </li>
            <li>
              Könyvelő iroda: Könyvelő Kft. (1111 Budapest, Könyvelő utca 2.)
            </li>
          </ul>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            8. ADATBIZTONSÁG
          </h2>
          <p className="mb-4">
            Az Adatkezelő az adatok biztonságáról megfelelő technikai és
            szervezési intézkedésekkel gondoskodik. Az Adatkezelő az
            informatikai rendszereit tűzfallal védi, és vírusvédelemmel látja
            el.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            9. Jogorvoslati lehetőségek
          </h2>
          <p className="mb-4">
            Az érintett az adatkezeléssel kapcsolatos panaszával közvetlenül a
            Nemzeti Adatvédelmi és Információszabadság Hatósághoz (cím: 1055
            Budapest, Falk Miksa utca 9-11.; telefon: +36-1-391-1400; e-mail:
            ugyfelszolgalat@naih.hu; honlap: www.naih.hu) fordulhat.
          </p>

          <p className="mt-8 text-sm">
            Jelen Adatvédelmi Tájékoztató 2025. június 6. napjától hatályos.
          </p>
        </div>
      </div>
    </div>
  );
}
