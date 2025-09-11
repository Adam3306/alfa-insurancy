import Image from "next/image";

import { Suspense } from "react";
import About from "../../components/About";
import FAQs from "../../components/FAQs";
import Footer from "../../components/Footer";

// Preload hero image
const preload = () => {
  // This URL must match the src attribute of the Image component
  const imageUrl = "/executive-businessman.jpg";
  // Create a new Image object with proper type
  const img = new window.Image();
  // Set the src attribute to trigger the load
  img.src = imageUrl;
};

export default function DAndO() {
  // Preload is client-side only
  if (typeof window !== "undefined") {
    preload();
  }

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
            <img
              src="/executive-businessman.jpg"
              alt="Kézfogás, bizalom"
              className="object-cover w-full h-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Right column - Logo and headline */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start bg-[#0C1D3D] px-4 py-6 md:p-16">
          <div className="flex flex-col items-center md:items-start w-full">
            <div className="mb-6 md:mb-8 flex justify-center md:justify-start w-full">
              <Image
                src="/alpha-insurance-logo.png"
                alt="Alpha Trust Insurance Kft. logó"
                width={120}
                height={120}
                className="w-24 md:w-32"
                style={{
                  maxWidth: "180px",
                  height: "auto",
                  background: "transparent",
                }}
              />
            </div>
            <h1 className="hero-title font-antonio font-bold text-white text-center md:text-left text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
              BIZTONSÁGBAN
              <br />
              ÜGYVEZETŐKÉNT IS:
              <br />
              <span className="hero-subtitle font-antonio font-bold block mt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                A D&O FELELŐSSÉGBIZTOSÍTÁS,
                <br />
                AMI ÖNT VÉDI
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Executive Risk Section */}
      <section
        className="flex flex-col md:flex-row min-h-[60vh] items-stretch bg-[#3A5D98] p-0 m-0"
        id="risks"
      >
        {/* Left column - Image */}
        <div className="md:w-1/2 w-full h-[320px] md:h-auto relative">
          <Suspense
            fallback={<div className="bg-[#3A5D98] w-full h-full"></div>}
          >
            <Image
              src="/do_ceo.jpg"
              alt="Ügyvezetői felelősség biztosítás szükségessége, vagyonvédelem"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="w-full h-full"
              loading="lazy"
              quality={80}
            />
          </Suspense>
        </div>
        {/* Right column - Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#0C1D3D] p-6 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold font-antonio mb-8 text-white text-left uppercase tracking-wider">
            TISZTELT ÜGYVEZETŐ, IGAZGATÓSÁGI TAG, DÖNTÉSHOZÓ!
          </h2>
          <div className="space-y-5 text-base md:text-lg font-telegraf text-white">
            <p>
              Tudjuk, hogy vezetőként nap, mint nap fontos döntéseket hoz. Ezek
              a döntések a cég jövőjét formálják.
            </p>
            <p>
              Ugyanakkor fontos tisztában lenni azzal is, hogy a{" "}
              <span className="font-bold">
                2014–es Polgári Törvénykönyv (Ptk.)
              </span>{" "}
              értelmében, bizonyos helyzetekben személy szerint is felelhet a
              vezetői tevékenységével összefüggésben okozott károkért.
            </p>
            <p>
              Ma már a károsultak (legyen szó vevőről, beszállítóról,
              hitelezőről, vagy akár magáról a cégről){" "}
              <span className="font-bold">
                közvetlenül Öntől is követelhetik a kártérítést.
              </span>
            </p>
            <p>
              Ez a felelősség akár{" "}
              <span className="font-bold">
                a magánvagyonát, az évek alatt felépített egzisztenciáját is
                érintheti.
              </span>
            </p>
            <p>
              Az{" "}
              <span className="font-bold">
                Ügyvezetői Szakmai Felelősségbiztosítás
              </span>{" "}
              (Directors & Officers biztosítás){" "}
              <span className="font-bold">
                a személyes pénzügyi biztonságának alapja ebben a megváltozott
                jogi környezetben.
              </span>
            </p>
            <p>
              Ami pontosan azért jött létre, hogy segítsen Önnek nyugodtan
              végezni a munkáját, tudva, hogy a vezetői döntéseiből fakadó
              esetleges jogi és anyagi következmények pénzügyi terheit
              átvállalja a biztosító.
            </p>
          </div>
        </div>
      </section>

      {/* Protected Areas Section */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-[#0C1D3D]"
        id="areas"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center font-antonio tracking-wider uppercase">
            MIK AZOK A VEZETŐI KOCKÁZATOK, AMIKRE ÉRDEMES FELKÉSZÜLNI?
          </h2>
          <p className="text-base md:text-lg font-telegraf text-center mb-10 md:mb-14 max-w-3xl mx-auto">
            Vezetőként számos helyzet adódhat, amikor a Ptk. alapján személyes
            felelősség merülhet fel. Fontos, hogy ismerje ezeket, hogy
            felkészülhessen.
            <br />
            <span className="font-bold">
              Íme néhány példa a kockázatokra, amelyek kezelésében a D&O
              biztosítás segíthet:
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                SZEMÉLYES FELELŐSSÉG A PTK. SZERINT:
              </h3>
              <p className="text-base md:text-lg font-interphases">
                A törvény lehetőséget ad arra, hogy a károsultak (pl. partnerek,
                munkavállalók, sőt a cég is) bizonyos esetekben{" "}
                <strong>közvetlenül Öntől követeljenek kártérítést</strong>, ami
                a <strong>magánvagyonát érintheti</strong>.
              </p>
            </div>
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                JOGI ELJÁRÁSOK KÖLTSÉGEI:
              </h3>
              <p className="text-base md:text-lg font-interphases">
                Akár jogos, akár alaptalan az igény, egy jogi eljárás vagy
                hatósági vizsgálat <strong>jelentős költségekkel járhat</strong>{" "}
                a védekezés során (ügyvédi díjak, szakértők). A biztosítás éves
                díjának sokszorosa lehet.
              </p>
            </div>
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                HATÓSÁGI BÍRSÁGOK
              </h3>
              <p className="text-base md:text-lg font-interphases">
                Bizonyos esetekben a hatóságok nem csak a cégre, de{" "}
                <strong>
                  közvetlenül a felelős vezetőre is szabhatnak ki bírságot
                </strong>
                .
              </p>
            </div>
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                BÜNTETŐJOGI ELJÁRÁSOK VÉDEKEZÉSI KÖLTSÉGEI
              </h3>
              <p className="text-base md:text-lg font-interphases">
                Bár a biztosítás nem fedezi a büntetést, a büntetőjogi
                eljárással kapcsolatos{" "}
                <strong>
                  jogi védekezés költségei nagyon magasak lehetnek
                </strong>
                , ezek fedezésében segít a D&O biztosítás a bűnösség
                bizonyításáig.
              </p>
            </div>
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                JÓ HÍRNÉV VÉDELME
              </h3>
              <p className="text-base md:text-lg font-interphases">
                Egy per vagy vizsgálat <strong>rossz sajtót generálhat</strong>.
                Az ügyvezető szakmai felelősségbiztosítása segíthet a{" "}
                <strong>
                  hírnév helyreállításával kapcsolatos költségekben
                </strong>
                .
              </p>
            </div>
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                VÉDEKEZÉS ALAPTALAN VÁDAK ELLEN
              </h3>
              <p className="text-base md:text-lg font-interphases">
                Sajnos előfordulhatnak <strong>alaptalan követelések is</strong>
                , amelyekkel szemben szintén védekezni kell, ami{" "}
                <strong>időbe és pénzbe kerül</strong>.
              </p>
            </div>
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                FELELŐSSÉG IDŐBELI TERJEDELME
              </h3>
              <p className="text-base md:text-lg font-interphases">
                Fontos tudni, hogy a{" "}
                <strong>
                  korábbi vezetői döntéseiért való felelőssége nem szűnik meg
                  azonnal
                </strong>{" "}
                a pozíció elhagyásával. Sajnos a halála után a hagyatéka is
                perelhető a korábbi hibák miatt.
              </p>
            </div>
            <div className="bg-[#183762] p-6 md:p-8 border border-gold border-[1px] shadow-lg faq-card">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-antonio tracking-wider uppercase">
                CSŐDHELYZET ÉS HITELEZŐI KÖVETELÉSEK
              </h3>
              <p className="text-base md:text-lg font-interphases">
                Csőd esetén a hitelezők és a felszámoló is felléphetnek a
                vezetővel szemben, ami{" "}
                <strong>anyagi következményekkel járhat</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D&O Insurance Explanation Section */}
      <section className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-primary-blue border-t border-gold">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center font-antonio tracking-wider uppercase">
            MIBEN SEGÍT AZ ÜGYVEZETŐI FELELŐSSÉGBIZTOSÍTÁS?
          </h2>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center font-antonio">
            A D&O Biztosítás Létfontosságú Fedezetei
          </h3>
          <p className="text-base md:text-lg font-telegraf text-center mb-4 md:mb-6 max-w-2xl mx-auto">
            Az Ügyvezetői Szakmai Felelősségbiztosítás az a pajzs, amire
            szüksége van a fent említett kockázatokkal szemben.
          </p>
          <p className="text-base md:text-lg font-telegraf text-center mb-8 md:mb-10 max-w-2xl mx-auto">
            Ez a biztosítás nem a hibákat akadályozza meg, hanem azok pénzügyi
            következményeitől véd meg.
          </p>
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] border-4 border-gold rounded-lg overflow-hidden shadow-lg">
              <img
                src="/guard.jpg"
                alt="Ügyvezetői felelősségbiztosítás védelme"
                className="object-cover w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* D&O Insurance Benefits */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-primary-blue border-t border-gold"
        id="benefits"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center font-antonio tracking-wider uppercase">
            MIBEN SEGÍT AZ ÜGYVEZETŐI FELELŐSSÉGBIZTOSÍTÁS?
          </h2>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center font-antonio">
            A D&O Biztosítás Létfontosságú Fedezetei
          </h3>
          <div className="text-center text-base md:text-lg font-telegraf text-gray-200 mb-6 md:mb-8">
            (mindig a konkrét kötvény a mérvadó)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Card 1 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group h-[420px] flex flex-col justify-end">
              <img
                src="/legal-protection.jpg"
                alt="Jogi védekezés"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl md:text-2xl font-bold font-antonio mb-2 uppercase text-white text-left">
                  JOGI VÉDEKEZÉS KÖLTSÉGEINEK FEDEZÉSE
                </h4>
                <p className="text-base md:text-lg font-telegraf text-white text-left">
                  Átvállalja a jogi eljárások minden indokolt költségét (ügyvédi
                  díjak, bírósági költségek),{" "}
                  <span className="font-bold">
                    akár a bűnösség jogerős kimondásáig büntetőügyekben is.
                  </span>
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group h-[420px] flex flex-col justify-end">
              <img
                src="/claim-settlement.jpg"
                alt="Kártérítési összegek"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl md:text-2xl font-bold font-antonio mb-2 uppercase text-white text-left">
                  KÁRTÉRÍTÉSI ÖSSZEGEK KIFIZETÉSE
                </h4>
                <p className="text-base md:text-lg font-telegraf text-white text-left">
                  Segít a jogosan megítélt kártérítési összegek megfizetésében a
                  biztosítási limit erejéig.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group h-[420px] flex flex-col justify-end">
              <img
                src="/reputation-defense.jpg"
                alt="Bizonyos bírságok"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl md:text-2xl font-bold font-antonio mb-2 uppercase text-white text-left">
                  BIZONYOS BÍRSÁGOK FEDEZETE
                </h4>
                <p className="text-base md:text-lg font-telegraf text-white text-left">
                  Fedezetet nyújthat bizonyos hatósági bírságokra.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 4 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group h-[420px] flex flex-col justify-end">
              <img
                src="/businessman-presses-face-emoji-concept-evaluating-customer-service.jpg"
                alt="Jó hírnév helyreállítása"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl md:text-2xl font-bold font-antonio mb-2 uppercase text-white text-left">
                  JÓ HÍRNÉV HELYREÁLLÍTÁSÁNAK TÁMOGATÁSA
                </h4>
                <p className="text-base md:text-lg font-telegraf text-white text-left">
                  Átvállalja a jogi eljárások minden indokolt költségét (ügyvédi
                  díjak, bírósági költségek),{" "}
                  <span className="font-bold">
                    akár a bűnösség jogerős kimondásáig büntetőügyekben is.
                  </span>
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group h-[420px] flex flex-col justify-end">
              <img
                src="/man-stands-front-cross-that-says-word-it.jpg"
                alt="Múltbeli tevékenység fedezete"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl md:text-2xl font-bold font-antonio mb-2 uppercase text-white text-left">
                  MÚLTBELI TEVÉKENYSÉG FEDEZETE
                </h4>
                <p className="text-base md:text-lg font-telegraf text-white text-left">
                  Segít a jogosan megítélt kártérítési összegek megfizetésében a
                  biztosítási limit erejéig.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group h-[420px] flex flex-col justify-end">
              <img
                src="/close-up-man-hand-holding-crystal-ball.jpg"
                alt="Védelem távozás után is"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl md:text-2xl font-bold font-antonio mb-2 uppercase text-white text-left">
                  VÉDELEM TÁVOZÁS UTÁN IS
                </h4>
                <p className="text-base md:text-lg font-telegraf text-white text-left">
                  Fontos tudni, hogy a vezetői döntések következményei akár
                  évekkel a pozíció elhagyása után is előkerülhetnek. A
                  biztosítás lejárta után is fedezetet nyújt azokra a
                  kárigényekre, amelyeket ebben a meghosszabbított időszakban
                  jelentenek be, feltéve, hogy a károkozó cselekmény a
                  biztosítási időszak alatt történt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* FAQs Section */}
      <FAQs />

      {/* CTA Section */}
      <section
        className="py-10 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue"
        id="free-quote"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden">
                <Suspense
                  fallback={
                    <div className="bg-secondary-blue rounded-lg w-full h-full"></div>
                  }
                >
                  <Image
                    src="/handshake-business.jpg"
                    alt="Üzleti partnerek"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-xl"
                    loading="lazy"
                    quality={75}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
