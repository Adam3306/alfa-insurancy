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
            A WEBOLDAL ÜZEMELTETŐJE
          </h2>
          <p className="mb-4">
            Cégnév: Alpha Trust Insurance Kft.<br />
            Székhely: 2120 Dunakeszi, Felsőtabán utca 11.<br />
            Cégjegyzékszám: 13 09 214126 <br />
            Adószám: 27181553-2-13 <br />
            Nyilvántartó hatóság: Budapest Környéki Törvényszék Cégbírósága <br />
            Képviselő neve: Szegő Zsombor
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            ELÉRHETŐSÉGEK
          </h2>
          <p className="mb-4">
            Levelezési cím: 2120 Dunakeszi, Felsőtabán utca 11<br />
            Telefonszám: +3630/18 18 047<br />
            E-mail cím: szego@premiumbiztositasok.hu<br />
            Webhely: www.alphabiztositas.hu
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            TÁRHELYSZOLGÁLTATÓ ADATAI
          </h2>
          <p className="mb-4">
            Név: .<br />
            Székhely:  <br />
            Elérhetőség:  <br />
            Telefon: 
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            FELÜGYELETI SZERV
          </h2>
          <p className="mb-4">
            Magyar Nemzeti Bank<br />
            Cím: 1054 Budapest, Szabadság tér 9.<br />
            Telefon: +36 1 428 2600<br />
            E-mail: info@mnb.hu<br />
            Webhely: www.mnb.hu<br />
            Természetes személy regisztrációs száma: 118030821790
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            SZAKMAI ÉRDEKKÉPVISELETI SZERVEZET
          </h2>
          <p className="mb-4">
            Független Biztosítási Alkuszok Magyarországi Szövetsége (FBAMSZ)<br />
            Cím: 1082 Budapest, Futó u. 37-45.<br />
            Telefon: +36 70 771 16 04<br />
            E-mail: titkarsag@fbamsz.hu<br />
            Webhely: www.fbamsz.hu
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            SZERZŐI JOGOK
          </h2>
          <p className="mb-4">
            A weboldalon megjelenő tartalmak - beleértve, de nem kizárólagosan a szövegeket, kialakítást, grafikákat, logókat, ikonokat, képeket, valamint ezek elrendezését - az Alpha Trust Insurance Kft. tulajdonát képezik. A weboldalról származó tartalmak a szerzői jogok tulajdonosának előzetes írásbeli engedélye nélkül csak hivatkozás megjelölésével használhatók fel.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            FELELŐSSÉG KIZÁRÁSA
          </h2>
          <p className="mb-4">
            Az Alpha Trust Insurance Kft. weboldalán található információk kizárólag tájékoztató jellegűek, és nem minősülnek ajánlattételnek. Az Alpha Trust Insurance Kft. törekszik a weboldalon található információk pontosságára és naprakészen tartására, de nem vállal felelősséget az esetleges pontatlanságokból eredő károkért.
          </p>

          <h2 className="text-2xl font-bold font-antonio mt-8 mb-4">
            ADATVÉDELEM
          </h2>
          <p className="mb-4">
            A weboldalon történő adatkezelésről az {" "}
            <Link
              href="/adatvedelem"
              className="text-light-blue hover:text-highlight-blue transition"
            >
              Adatvédelmi Tájékoztatóban
            </Link>{" "}
            olvashat részletesen.
          </p>

          <p className="mt-8 text-sm">Utolsó frissítés: 2025. június 6.</p>
        </div>
      </div>
    </div>
  );
}
