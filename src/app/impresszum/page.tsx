import Link from "next/link";

export default function Impresszum() {
  return (
    <div className="bg-primary-blue text-white min-h-screen pt-28 pb-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-antonio mb-8">
          IMPRESSZUM
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
          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            A weboldal üzemeltetője
          </h2>
          <p className="mb-4">
            <strong>Cégnév:</strong> Alfa Biztosítás
            <br />
            <strong>Székhely:</strong> 1052 Budapest, Váci utca 12.
            <br />
            <strong>Cégjegyzékszám:</strong> 01-10-123456
            <br />
            <strong>Adószám:</strong> 12345678-2-41
            <br />
            <strong>Nyilvántartó hatóság:</strong> Fővárosi Törvényszék
            Cégbírósága
            <br />
            <strong>Képviselő neve:</strong> Minta Péter
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            Elérhetőségek
          </h2>
          <p className="mb-4">
            <strong>Levelezési cím:</strong> 1052 Budapest, Váci utca 12.
            <br />
            <strong>Telefonszám:</strong> +36 1 123 4567
            <br />
            <strong>E-mail cím:</strong> info@alfabiztositas.hu
            <br />
            <strong>Webhely:</strong> www.alfabiztositas.hu
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            Tárhelyszolgáltató adatai
          </h2>
          <p className="mb-4">
            <strong>Név:</strong> Példa Tárhelyszolgáltató Kft.
            <br />
            <strong>Székhely:</strong> 1111 Budapest, Példa utca 1.
            <br />
            <strong>Elérhetőség:</strong> info@peldatarhely.hu
            <br />
            <strong>Telefon:</strong> +36 1 987 6543
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            Felügyeleti szerv
          </h2>
          <p className="mb-4">
            <strong>Magyar Nemzeti Bank</strong>
            <br />
            Cím: 1054 Budapest, Szabadság tér 9.
            <br />
            Telefon: +36 1 428 2600
            <br />
            E-mail: info@mnb.hu
            <br />
            Webhely: www.mnb.hu
            <br />
            <strong>Engedély szám:</strong> H-EN-I-596/2018
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            Szakmai érdekképviseleti szervezet
          </h2>
          <p className="mb-4">
            <strong>
              Független Biztosítási Alkuszok Magyarországi Szövetsége (FBAMSZ)
            </strong>
            <br />
            Cím: 1096 Budapest, Vendel utca 11.
            <br />
            Telefon: +36 1 815 9795
            <br />
            E-mail: fbamsz@fbamsz.hu
            <br />
            Webhely: www.fbamsz.hu
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            Szerzői jogok
          </h2>
          <p className="mb-4">
            A weboldalon megjelenő tartalmak - beleértve, de nem kizárólagosan a
            szövegeket, kialakítást, grafikákat, logókat, ikonokat, képeket,
            valamint ezek elrendezését - az Alfa Biztosítás tulajdonát képezik.
            A weboldalról származó tartalmak a szerzői jogok tulajdonosának
            előzetes írásbeli engedélye nélkül csak hivatkozás megjelölésével
            használhatók fel.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            Felelősség kizárása
          </h2>
          <p className="mb-4">
            Az Alfa Biztosítás weboldalán található információk kizárólag
            tájékoztató jellegűek, és nem minősülnek ajánlattételnek. Az Alfa
            Biztosítás törekszik a weboldalon található információk pontosságára
            és naprakészen tartására, de nem vállal felelősséget az esetleges
            pontatlanságokból eredő károkért.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            Adatvédelem
          </h2>
          <p className="mb-4">
            A weboldalon történő adatkezelésről az{" "}
            <Link
              href="/adatvedelem"
              className="text-light-blue hover:text-highlight-blue transition"
            >
              Adatvédelmi Tájékoztatóban
            </Link>{" "}
            olvashat részletesen.
          </p>

          <p className="mt-8 text-sm">Utolsó frissítés: 2023. január 1.</p>
        </div>
      </div>
    </div>
  );
}
