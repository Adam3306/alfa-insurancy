import Link from "next/link";

export default function ASZF() {
  return (
    <div className="bg-primary-blue text-white min-h-screen pt-28 pb-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-antonio mb-8">
          ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK
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
            Jelen Általános Szerződési Feltételek (továbbiakban: ÁSZF)
            tartalmazza az Alfa Biztosítás (továbbiakban: Szolgáltató) által
            nyújtott biztosítási szolgáltatásokra vonatkozó feltételeket.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            1. Általános rendelkezések
          </h2>
          <p className="mb-4">
            1.1 Az Alfa Biztosítás (székhely: 1052 Budapest, Váci utca 12.,
            cégjegyzékszám: 01-10-123456, adószám: 12345678-2-41) által nyújtott
            szolgáltatásokat igénybe vevő Ügyfél (továbbiakban: Ügyfél) az ÁSZF
            rendelkezéseit a szolgáltatás igénybevételével elfogadja és magára
            nézve kötelezőnek ismeri el.
          </p>
          <p className="mb-4">
            1.2 A jelen ÁSZF hatálya kiterjed minden olyan szolgáltatásra,
            amelyet a Szolgáltató az Ügyfél részére nyújt.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            2. A szolgáltatás tárgya
          </h2>
          <p className="mb-4">
            2.1 A Szolgáltató biztosítási tanácsadást és közvetítést végez,
            különös tekintettel a Vezető Tisztségviselői Felelősségbiztosításra
            (D&O biztosítás).
          </p>
          <p className="mb-4">
            2.2 A Szolgáltató a biztosítási szolgáltatások közvetítését
            független biztosításközvetítőként végzi.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            3. A szerződés létrejötte
          </h2>
          <p className="mb-4">
            3.1 Az Ügyfél és a Szolgáltató között a szerződés a szolgáltatás
            igénybevételére vonatkozó nyilatkozat aláírásával jön létre.
          </p>
          <p className="mb-4">
            3.2 Az Ügyfél a szolgáltatás igénybevételével elfogadja a jelen
            ÁSZF-ben foglaltakat.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            4. Díjazás
          </h2>
          <p className="mb-4">
            4.1 A Szolgáltató szolgáltatásainak díjait az aktuális díjszabás
            tartalmazza, amely a Szolgáltató székhelyén és weboldalán elérhető.
          </p>
          <p className="mb-4">
            4.2 A Szolgáltató jogosult a díjakat egyoldalúan módosítani,
            amelyről az Ügyfeleket 30 nappal a módosítás hatályba lépése előtt
            tájékoztatja.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            5. Felelősség
          </h2>
          <p className="mb-4">
            5.1 A Szolgáltató a tevékenysége során az Ügyfél érdekeinek
            figyelembevételével, a biztosítási szakmai szabályok betartásával
            köteles eljárni.
          </p>
          <p className="mb-4">
            5.2 A Szolgáltató felelősséggel tartozik a nem megfelelő
            tanácsadásból eredő károkért.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            6. Záró rendelkezések
          </h2>
          <p className="mb-4">
            6.1 A jelen ÁSZF-ben nem szabályozott kérdésekben a Polgári
            Törvénykönyv, valamint a vonatkozó magyar jogszabályok rendelkezései
            irányadóak.
          </p>
          <p className="mb-4">
            6.2 Az ÁSZF módosítása esetén a Szolgáltató a módosított ÁSZF-et a
            weboldalán közzéteszi, és az Ügyfeleket értesíti.
          </p>

          <p className="mt-8 text-sm">Hatályos: 2023. január 1-től</p>
        </div>
      </div>
    </div>
  );
}
