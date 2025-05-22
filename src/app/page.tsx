"use client";

export default function Home() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row py-12 px-6 sm:px-12 lg:px-24">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/executive-businessman.jpg"
            alt="Ügyvezetői felelősség biztosítás szükségessége, vagyonvédelem"
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
                  alt="Ügyvezetői felelősség biztosítás szükségessége, vagyonvédelem"
                  className="rounded-lg max-h-72 object-cover"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold mb-4 font-antonio">
                  TISZTELT ÜGYVEZETŐ, IGAZGATÓSÁGI TAG, DÖNTÉSHOZÓ!
                </h2>
                <p className="text-lg mb-2 font-telegraf">
                  Tudjuk, hogy vezetőként nap, mint nap fontos döntéseket hoz.
                  Ezek a döntések a cég jövőjét formálják. Ugyanakkor fontos
                  tisztában lenni azzal is, hogy a 2014-es Polgári Törvénykönyv
                  (Ptk.) értelmében, bizonyos helyzetekben személy szerint is
                  felelhet a vezetői tevékenységével összefüggésben okozott
                  károkért.
                </p>
                <p className="text-lg mb-2 font-telegraf">
                  Ma már a károsultak (legyen szó vevőről, beszállítóról,
                  hitelezőről, vagy akár magáról a cégről) közvetlenül Öntől is
                  követelhetik a kártérítést.
                </p>
                <p className="text-lg mb-2 font-telegraf">
                  Ez a felelősség akár a magánvagyonát, az évek alatt felépített
                  egzisztenciáját is érintheti.
                </p>
                <p className="text-lg font-telegraf">
                  Az Ügyvezetői Szakmai Felelősségbiztosítás (Directors &
                  Officers biztosítás) a személyes pénzügyi biztonságának alapja
                  ebben a megváltozott jogi környezetben. Ami pontosan azért
                  jött létre, hogy segítsen Önnek nyugodtan végezni a munkáját,
                  tudva, hogy a vezetői döntéseiből fakadó esetleges jogi és
                  anyagi következmények pénzügyi terheit átvállalja a biztosító.
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
            MIK AZOK A VEZETŐI KOCKÁZATOK, AMIKRE ÉRDEMES FELKÉSZÜLNI?
          </h2>
          <p className="text-lg font-telegraf text-center mb-8 max-w-3xl mx-auto">
            Vezetőként számos helyzet adódhat, amikor a Ptk. alapján személyes
            felelősség merülhet fel. Fontos, hogy ismerje ezeket, hogy
            felkészülhessen. Íme néhány példa a kockázatokra, amelyek
            kezelésében a D&O biztosítás segíthet:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                SZEMÉLYES FELELŐSSÉG A PTK. SZERINT
              </h3>
              <p className="font-interphases">
                A törvény lehetőséget ad arra, hogy a károsultak (pl. partnerek,
                munkavállalók, sőt a cég is) bizonyos esetekben közvetlenül
                Öntől követeljenek kártérítést, ami a magánvagyonát érintheti.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
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
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                HATÓSÁGI BÍRSÁGOK
              </h3>
              <p className="font-interphases">
                Bizonyos esetekben a hatóságok nem csak a cégre, de közvetlenül
                a felelős vezetőre is szabhatnak ki bírságot.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                JÓ HÍRNÉV VÉDELME
              </h3>
              <p className="font-interphases">
                Egy per vagy vizsgálat rossz sajtót generálhat. Az ügyvezető
                szakmai felelősségbiztosítása segíthet a hírnév
                helyreállításával kapcsolatos költségekben.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                VÉDEKEZÉS ALAPTALAN VÁDAK ELLEN
              </h3>
              <p className="font-interphases">
                Sajnos előfordulhatnak alaptalan követelések is, amelyekkel
                szemben szintén védekezni kell, ami időbe és pénzbe kerül.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                FELELŐSSÉG IDŐBELI TERJEDELME
              </h3>
              <p className="font-interphases">
                Fontos tudni, hogy a korábbi vezetői döntéseiért való
                felelőssége nem szűnik meg azonnal a pozíció elhagyásával.
                Sajnos a halála után a hagyatéka is perelhető a korábbi hibák
                miatt.
              </p>
            </div>
            <div className="bg-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold mb-3 font-antonio">
                CSŐDHELYZET ÉS HITELEZŐI KÖVETELÉSEK
              </h3>
              <p className="font-interphases">
                Csőd esetén a hitelezők és a felszámoló is felléphetnek a
                vezetővel szemben, ami anyagi következményekkel járhat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D&O Insurance Benefits - Main Title */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-antonio">
            MIBEN SEGÍT AZ ÜGYVEZETŐI FELELŐSSÉGBIZTOSÍTÁS?
          </h2>
          <p className="text-lg font-telegraf text-center mb-8 max-w-3xl mx-auto">
            Az Ügyvezetői Szakmai Felelősségbiztosítás az a pajzs, amire
            szüksége van a fent említett kockázatokkal szemben. Ez a biztosítás
            nem a hibákat akadályozza meg, hanem azok pénzügyi következményeitől
            véd meg. Főbb fedezetek:
            <br />
            (mindig a konkrét kötvény a mérvadó)
          </p>
        </div>
      </section>

      {/* D&O Insurance Benefits - First Row */}
      <section className="pb-8 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden image-card">
              <img
                src="/legal-protection.jpg"
                alt="Jogi védekezés"
                className="w-full h-72 object-cover"
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
            <div className="relative rounded-lg overflow-hidden image-card">
              <img
                src="/claim-settlement.jpg"
                alt="Kártérítési összegek"
                className="w-full h-72 object-cover"
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
            <div className="relative rounded-lg overflow-hidden image-card">
              <img
                src="/businessman-presses-face-emoji-concept-evaluating-customer-service.jpg"
                alt="Bírságok fedezete"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end card-content">
                <h3 className="text-2xl font-bold text-white mb-3 font-antonio">
                  BIZONYOS BÍRSÁGOK
                  <br />
                  FEDEZETE
                </h3>
                <p className="text-white font-telegraf">
                  Fedezetet nyújthat bizonyos hatósági bírságokra a biztosítási
                  szerződés feltételei szerint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D&O Insurance Benefits - Second Row */}
      <section className="pt-8 pb-16 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden image-card">
              <img
                src="/reputation-defense.jpg"
                alt="Jó hírnév helyreállítása"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end card-content">
                <h3 className="text-2xl font-bold text-white mb-3 font-antonio">
                  JÓ HÍRNÉV
                  <br />
                  HELYREÁLLÍTÁSÁNAK
                  <br />
                  TÁMOGATÁSA
                </h3>
                <p className="text-white font-telegraf">
                  Hozzájárulhat a hírnév visszaállításával kapcsolatos
                  költségekhez, beleértve a PR és kommunikációs szakértők
                  díjait.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden image-card">
              <img
                src="/man-stands-front-cross-that-says-word-it.jpg"
                alt="Múltbeli tevékenység"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end card-content">
                <h3 className="text-2xl font-bold text-white mb-3 font-antonio">
                  MÚLTBELI TEVÉKENYSÉG
                  <br />
                  FEDEZETE
                </h3>
                <p className="text-white font-telegraf">
                  Gyakran kiterjed a korábbi vezetői döntésekkel kapcsolatos
                  igényekre is, amelyek a biztosítási időszak alatt történtek.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden image-card">
              <img
                src="/close-up-man-hand-holding-crystal-ball.jpg"
                alt="Védelem távozás után"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end card-content">
                <h3 className="text-2xl font-bold text-white mb-3 font-antonio">
                  VÉDELEM TÁVOZÁS
                  <br />
                  UTÁN IS
                </h3>
                <p className="text-white font-telegraf">
                  A biztosítás lejárta után is fedezetet nyújt azokra a
                  kárigényekre, amelyeket a meghosszabbított időszakban
                  jelentenek be, feltéve, hogy a károkozó cselekmény a
                  biztosítási időszak alatt történt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-antonio">
            MIÉRT ÉRDEMES ENGEM VÁLASZTANIA D&O BIZTOSÍTÁSI PARTNERÉÜL? KEDVESEN
            SEGÍTÜNK!
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
                Tudjuk, hogy a biztosítás világa néha bonyolultnak tűnhet.
                Különösen igaz ez a szakmai felelősségbiztosításokra, amelynek
                feltételei sokfélék lehetnek. Azt is tudom, hogy a
                döntéshozóként kevés ideje marad foglalkozni egyéb ügyekkel.
              </p>
              <p className="text-lg mb-4 font-telegraf">
                Én, mint független biztosítási alkusz, azért vagyok, hogy
                segítsek Önnek eligazodni a lehetőséges labirintusában. Nem egy
                biztosító termékét kínálom, hanem megértem az Ön helyzetét, a
                specifikus kockázatait (beleértve a Ptk. szerinti szempontokat),
                és összehasonlítom a piacon elérhető legjobb ajánlatokat.
              </p>
              <p className="text-lg mb-4 font-telegraf">
                Célom, hogy személyre szabott, érthető és valóban megfelelő D&O
                biztosítást találjunk Önnek, ami illeszkedik az igényeihez és a
                költségvetéséhez.
              </p>
              <p className="text-lg font-telegraf">
                Bízza rám a keresést és az összehasonlítást! Ne aggódjon az
                ügyintézés hossza miatt. Lépjen velem kapcsolatba, és együtt
                megtaláljuk a legjobb védelmet!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0 font-antonio">
              KÉRJEN INGYENES
              <br />
              AJÁNLATOT!
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#contact"
                className="bg-light-blue hover:bg-highlight-blue text-white py-4 px-8 rounded-full flex items-center justify-between min-w-[320px] cta-button"
              >
                <span className="font-antonio text-lg">
                  INGYENES AJÁNLATOT KÉREK
                </span>
                <span className="text-2xl arrow">&raquo;</span>
              </a>
              <a
                href="#contact"
                className="bg-light-blue hover:bg-highlight-blue text-white py-4 px-8 rounded-full flex items-center justify-between min-w-[320px] cta-button"
              >
                <span className="font-antonio text-lg">
                  KÉRDÉSEM VAN / KONZULTÁCIÓT KÉREK!
                </span>
                <span className="text-2xl arrow">&raquo;</span>
              </a>
            </div>
          </div>

          <div className="mt-12">
            <img
              src="/handshake-business.jpg"
              alt="Business handshake"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-antonio">
            KÉRDÉSE VAN?
          </h2>
          <h3 className="text-2xl font-bold mb-12 text-center font-antonio">
            ÍME A LEGGYAKORIBB KÉRDÉSEK A D&O BIZTOSÍTÁSRÓL
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold text-center mb-4 font-antonio">
                MI AZ A PTK. SZERINTI ÜGYVEZETŐI FELELŐSSÉG, ÉRTHETŐEN?
              </h3>
              <p className="font-telegraf">
                Egyszerűen fogalmazva, a 2014 óta érvényben lévő törvény (Ptk.)
                lehetővé teszi, hogy ha Ön, mint vezető, hibázik vagy mulaszt a
                munkája során, ami kárt okoz, akkor nem csak a cég, de akár Ön
                személyesen is felelhet érte a magánvagyonával. Ez egy fontos
                jogszabályi változás volt.
              </p>
            </div>

            <div className="border border-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold text-center mb-4 font-antonio">
                MIBEN MÁS EZ, MINT A CÉGÜNK "NORMÁL" FELELŐSSÉGBIZTOSÍTÁSA?
              </h3>
              <p className="font-telegraf">
                A cég általános felelősségbiztosítása a cég működésével
                kapcsolatos balesetekre, károkra (pl. valaki elesik az irodában)
                nyújt fedezetet. A D&O biztosítás viszont kifejezetten az Ön,
                mint vezető döntéseiből, munkájából eredő hibákra vonatkozik, és
                az azokból adódó személyes felelősségére.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold text-center mb-4 font-antonio">
                MI TÖRTÉNIK, HA ELHAGYOM A VEZETŐI POZÍCIÓT? VÉGE A
                FELELŐSSÉGEMNEK?
              </h3>
              <p className="font-telegraf">
                Fontos tudni, hogy a korábbi vezetői döntéseiért való
                felelőssége nem szűnik meg automatikusan a távozással. A D&O
                biztosítások tartalmaznak egy "kiterjesztett jelentési
                időszakot", ami azt jelenti, hogy a biztosítás idején történt,
                de később felmerülő hibákra is vonatkozhat a fedezet a
                biztosítás megszűnése után még egy bizonyos ideig (jellemzően 12
                hónapig).
              </p>
            </div>

            <div className="border border-secondary-blue p-6 rounded-lg faq-card">
              <h3 className="text-xl font-semibold text-center mb-4 font-antonio">
                MIKOR NEM FIZET A D&O BIZTOSÍTÁS?
              </h3>
              <p className="font-telegraf">
                Ahogy más biztosításoknál, itt is vannak kivételek. Például, ha
                szándékosan okoz valamilyen kárt, arra a biztosítás nem
                vonatkozik. Büntetőjogi eljárásban kiszabott bírságokat vagy
                börtönbüntetést sem fedez (ez törvényileg tiltott lenne), de a
                védekezés jogi költségeit fedezi.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="border border-secondary-blue p-6 rounded-lg w-full md:w-1/2 faq-card">
              <h3 className="text-xl font-semibold text-center mb-4 font-antonio">
                MI TÖRTÉNIK, HA FELSZÁMOLÁS ALÁ KERÜL A CÉG?
              </h3>
              <p className="font-telegraf">
                Sajnos felszámolás esetén a hitelezők és a felszámoló is
                vizsgálhatják a vezetői tevékenységet, és felléphetnek a
                vezetővel szemben. A D&O biztosítás segíthet az ezzel járó jogi
                költségek és kártérítési kötelezettség kezelésében.
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
                className="bg-highlight-blue hover:bg-light-blue text-white py-3 px-6 rounded-lg font-medium text-lg font-antonio cta-button"
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
