"use client";
import Image from "next/image";
import About from "./components/About";
import FAQs from "./components/FAQs";
import ScrollControls from "./components/ScrollControls";
import { Suspense, useState } from "react";

// Preload hero image
const preload = () => {
  // This URL must match the src attribute of the Image component
  const imageUrl = "/executive-businessman.jpg";
  // Create a new Image object with proper type
  const img = new window.Image();
  // Set the src attribute to trigger the load
  img.src = imageUrl;
};

export default function Home() {
  // Preload is client-side only
  if (typeof window !== "undefined") {
    preload();
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Hiba történt az ajánlatkérés küldése során."
        );
      }

      // Reset form on success
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormStatus({ submitting: false, submitted: true, error: null });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Hiba történt az ajánlatkérés küldése során.";
      setFormStatus({
        submitting: false,
        submitted: false,
        error: errorMessage,
      });
    }
  };

  return (
    <div className="text-white bg-primary-blue">
      {/* Scroll Controls */}
      <ScrollControls />

      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row min-h-[90vh] md:min-h-screen items-stretch relative"
        id="hero"
      >
        {/* Left column - Image */}
        <div className="md:w-1/2 relative flex flex-col h-[50vh] md:h-auto">
          <div className="h-full w-full relative flex-grow">
            <Suspense
              fallback={<div className="bg-[#3A5D98] w-full h-full"></div>}
            >
              <Image
                src="/executive-businessman.jpg"
                alt="Ajánlatkérés"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-95 mix-blend-soft-light"
                loading="eager"
                fetchPriority="high"
                quality={90}
              />
            </Suspense>
          </div>
        </div>

        {/* Right column - Text and logo */}
        <div className="md:w-1/2 bg-[#0C1D3D] p-5 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="mb-6 md:mb-14 w-full overflow-hidden">
            {/* Placeholder logo */}
            <div className="mb-6 md:mb-14">
              <div className="text-white text-xl md:text-3xl font-bold font-antonio tracking-widest">
                <div className="flex flex-col items-start">
                  <div className="relative">
                    <div className="bg-white text-[#0C1D3D] px-4 py-1.5">
                      ALPHA
                    </div>
                  </div>
                  <div className="mt-0.5">TRUST</div>
                </div>
              </div>
            </div>

            <h1 className="text-[1.35rem] sm:text-2xl md:text-5xl lg:text-6xl font-bold text-white font-antonio leading-tight tracking-wide break-words hyphens-auto">
              Biztonságban Ügyvezetőként is:
              <br />
              <span className="text-[1.15rem] sm:text-xl md:text-4xl lg:text-5xl">
                A D&O Felelősségbiztosítás, ami Önt Védi
              </span>
            </h1>
          </div>

          <div className="mt-5 md:mt-10">
            <a
              href="#free-quote"
              className="cta-button inline-block text-xs sm:text-sm md:text-base px-4 sm:px-6 py-3 md:py-3 whitespace-normal"
            >
              Kérek Ingyenes Ajánlatot Kockázatmentesen!
              <span className="arrow ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Executive Risk Section */}
      <section
        className="py-10 md:py-16 px-4 sm:px-12 lg:px-24 bg-[#3A5D98]"
        id="risks"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 md:mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-1/3 mb-4 md:mb-0 relative aspect-[3/2] h-80 md:h-[28rem]">
                <Suspense
                  fallback={<div className="bg-[#0C1D3D] w-full h-full"></div>}
                >
                  <Image
                    src="/do_ceo.jpg"
                    alt="Ügyvezetői felelősség biztosítás szükségessége, vagyonvédelem"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "contain", backgroundColor: "transparent" }} // changed here
                    loading="lazy"
                    quality={80}
                  />
                </Suspense>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-antonio tracking-wide">
                  TISZTELT ÜGYVEZETŐ, IGAZGATÓSÁGI TAG, DÖNTÉSHOZÓ!
                </h2>
                <div className="space-y-3 md:space-y-4 font-telegraf">
                  <p className="text-base md:text-lg">
                    Tudjuk, hogy vezetőként nap, mint nap fontos döntéseket hoz.
                    Ezek a döntések a cég jövőjét formálják. Ugyanakkor fontos
                    tisztában lenni azzal is, hogy a 2014-es Polgári
                    Törvénykönyv (Ptk.) értelmében, bizonyos helyzetekben
                    személy szerint is felelhet a vezetői tevékenységével
                    összefüggésben okozott károkért.
                  </p>
                  <p className="text-base md:text-lg font-bold">
                    Ma már a károsultak (legyen szó vevőről, beszállítóról,
                    hitelezőről, vagy akár magáról a cégről) közvetlenül Öntől
                    is követelhetik a kártérítést.
                  </p>
                  <p className="text-base md:text-lg">
                    Ez a felelősség akár a magánvagyonát, az évek alatt
                    felépített egzisztenciáját is érintheti.
                  </p>
                  <p className="text-base md:text-lg">
                    Az Ügyvezetői Szakmai Felelősségbiztosítás (Directors &
                    Officers biztosítás) a személyes pénzügyi biztonságának
                    alapja ebben a megváltozott jogi környezetben. Ami pontosan
                    azért jött létre, hogy segítsen Önnek nyugodtan végezni a
                    munkáját, tudva, hogy a vezetői döntéseiből fakadó esetleges
                    jogi és anyagi következmények pénzügyi terheit átvállalja a
                    biztosító.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Areas Section */}
      <section
        className="py-10 md:py-16 px-4 sm:px-12 lg:px-24 bg-[#0C1D3D]"
        id="areas"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-antonio tracking-wide">
            Mik azok a Vezetői Kockázatok, Amikre Érdemes Felkészülni?
          </h2>
          <p className="text-base md:text-lg font-telegraf text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            Vezetőként számos helyzet adódhat, amikor a Ptk. alapján személyes
            felelősség merülhet fel. Fontos, hogy ismerje ezeket, hogy
            felkészülhessen. Íme néhány példa a kockázatokra, amelyek
            kezelésében a D&O biztosítás segíthet:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Személyes Felelősség a Ptk. Szerint
              </h3>
              <p className="text-sm md:text-base font-interphases">
                A törvény lehetőséget ad arra, hogy a károsultak (pl. partnerek,
                munkavállalók, sőt a cég is) bizonyos esetekben közvetlenül
                Öntől követeljenek kártérítést, ami a magánvagyonát érintheti.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Jogi Eljárások Költségei
              </h3>
              <p className="text-sm md:text-base font-interphases">
                Akár jogos, akár alaptalan az igény, egy jogi eljárás vagy
                hatósági vizsgálat jelentős költségekkel járhat a védekezés
                során (ügyvédi díjak, szakértők). A a biztosítás éves díjának
                sokszorosa lehet.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Hatósági Bírságok
              </h3>
              <p className="text-sm md:text-base font-interphases">
                Bizonyos esetekben a hatóságok nem csak a cégre, de közvetlenül
                a felelős vezetőre is szabhatnak ki bírságot.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Büntetőjogi Eljárások Védekezési Költségei
              </h3>
              <p className="text-sm md:text-base font-interphases">
                Bár a biztosítás nem fedezi a büntetést, a büntetőjogi
                eljárással kapcsolatos jogi védekezés költségei nagyon magasak
                lehetnek, ezek fedezésében segít a D&O biztosítás a bűnösség
                bizonyításáig.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Jó Hírnév Védelme
              </h3>
              <p className="text-sm md:text-base font-interphases">
                Egy per vagy vizsgálat rossz sajtót generálhat. Az ügyvezető
                szakmai felelősségbiztosítása segíthet a hírnév
                helyreállításával kapcsolatos költségekben.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Védekezés Alaptalan Vádak Ellen
              </h3>
              <p className="text-sm md:text-base font-interphases">
                Sajnos előfordulhatnak alaptalan követelések is, amelyekkel
                szemben szintén védekezni kell, ami időbe és pénzbe kerül.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Felelősség Időbeli Terjedelme
              </h3>
              <p className="text-sm md:text-base font-interphases">
                Fontos tudni, hogy a korábbi vezetői döntéseiért való
                felelőssége nem szűnik meg azonnal a pozíció elhagyásával.
                Sajnos a halála után a hagyatéka is perelhető a korábbi hibák
                miatt.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Csődhelyzet és Hitelezői Követelések
              </h3>
              <p className="text-sm md:text-base font-interphases">
                Csőd esetén a hitelezők és a felszámoló is felléphetnek a
                vezetővel szemben, ami anyagi következményekkel járhat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D&O Insurance Benefits */}
      <section
        className="py-10 md:py-16 px-4 sm:px-12 lg:px-24 bg-[#3A5D98] border-t border-[#0C1D3D]"
        id="benefits"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-antonio tracking-wide">
            Miben Segít Az Ügyvezetői Felelősségbiztosítás? A D&O Biztosítás
            Létfontosságú Fedezetei
          </h2>
          <p className="text-base md:text-lg font-telegraf text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            Az Ügyvezetői Szakmai Felelősségbiztosítás az a pajzs, amire
            szüksége van a fent említett kockázatokkal szemben. Ez a biztosítás
            nem a hibákat akadályozza meg, hanem azok pénzügyi következményeitől
            véd meg. Főbb fedezetek (mindig a konkrét kötvény a mérvadó):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Jogi Védekezés Költségeinek Fedezése
              </h3>
              <p className="text-sm md:text-base font-interphases flex-grow">
                Átvállalja a jogi eljárások minden indokolt költségét (ügyvédi
                díjak, bírósági költségek), akár a bűnösség jogerős kimondásáig
                büntetőügyekben is.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Kártérítési Összegek Kifizetése
              </h3>
              <p className="text-sm md:text-base font-interphases flex-grow">
                Segít a jogosan megítélt kártérítési összegek megfizetésében a
                biztosítási limit erejéig.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Bizonyos Bírságok Fedezete
              </h3>
              <p className="text-sm md:text-base font-interphases flex-grow">
                Fedezetet nyújthat bizonyos hatósági bírságokra.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Jó Hírnév Helyreállításának Támogatása
              </h3>
              <p className="text-sm md:text-base font-interphases flex-grow">
                Hozzájárulhat a hírnév visszaállításával kapcsolatos
                költségekhez.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Múltbeli Tevékenység Fedezete
              </h3>
              <p className="text-sm md:text-base font-interphases flex-grow">
                Gyakran kiterjed a korábbi vezetői döntésekkel kapcsolatos
                igényekre is.
              </p>
            </div>
            <div className="bg-[#183762] p-4 md:p-6 border-t-4 border-white shadow-lg faq-card flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 font-antonio tracking-wide">
                Védelem Távozás Után is
              </h3>
              <p className="text-sm md:text-base font-interphases flex-grow">
                Fontos tudni, hogy a vezetői döntések következményei akár
                évekkel a pozíció elhagyása után is előkerülhetnek. a biztosítás
                lejárta után is fedezetet nyújt azokra a kárigényekre, amelyeket
                ebben a meghosszabbított időszakban jelentenek be, feltéve, hogy
                a károkozó cselekmény a biztosítási időszak alatt történt. Ez
                nyugalmat biztosít a távozó vezetők számára a múltbéli
                tevékenységükkel kapcsolatban.
              </p>
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
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-antonio">
                KÉRJEN INGYENES AJÁNLATOT!
              </h2>
              <p className="font-telegraf text-sm md:text-base mb-6 md:mb-8">
                Töltse ki az alábbi űrlapot, és 24 órán belül felveszem Önnel a
                kapcsolatot. Kérdés esetén keressen bizalommal!
              </p>

              <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 font-telegraf text-sm md:text-base"
                  >
                    Név*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 md:p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue text-sm md:text-base"
                    placeholder="Teljes név"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-telegraf text-sm md:text-base"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 md:p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue text-sm md:text-base"
                    placeholder="email@pelda.hu"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-telegraf text-sm md:text-base"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 md:p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue text-sm md:text-base"
                    placeholder="+36 xx xxx xxxx"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-telegraf text-sm md:text-base"
                  >
                    Üzenet
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 md:p-3 rounded-md bg-primary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue text-sm md:text-base"
                    placeholder="Kérem írja le röviden, hogy miben segíthetek..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <div className="bg-green-800 text-white p-3 rounded-md">
                    Az ajánlatkérés sikeresen elküldve! Hamarosan felvesszük
                    Önnel a kapcsolatot.
                  </div>
                )}

                {formStatus.error && (
                  <div className="bg-red-800 text-white p-3 rounded-md">
                    {formStatus.error}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="cta-button w-full justify-center py-2 md:py-3 text-sm md:text-base"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting
                      ? "Küldés folyamatban..."
                      : "KÉREM AZ INGYENES AJÁNLATOT"}
                  </button>
                </div>
              </form>
            </div>

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
      <footer className="py-8 md:py-12 px-4 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 md:mb-10">
            {/* Column 1: Logo and Company */}
            <div>
              <div className="flex items-center mb-4">
                <div className="relative h-8 w-8 md:h-10 md:w-10 mr-2">
                  <Image
                    src="/alfa-insurance-logo.png"
                    alt="Alpha Trust Insurance Kft."
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="text-lg md:text-xl font-bold font-antonio">
                  ALPHA TRUST INSURANCE KFT.
                </span>
              </div>
              <p className="text-xs md:text-sm font-telegraf mt-3 md:mt-4 text-gray-300">
                Megbízható biztosítási megoldások vezetőknek és vállalatoknak.
                Szakértői tanácsadás, személyre szabott ajánlatok.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio">
                Gyors Linkek
              </h3>
              <ul className="space-y-1 md:space-y-2 font-telegraf text-sm md:text-base">
                <li>
                  <a href="#about" className="hover:text-blue-300 transition">
                    Bemutatkozás
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-300 transition"
                  >
                    Szolgáltatások
                  </a>
                </li>
                <li>
                  <a
                    href="#free-quote"
                    className="hover:text-blue-300 transition"
                  >
                    Ajánlatkérés
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-300 transition">
                    Kapcsolat
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio">
                Jogi Információk
              </h3>
              <ul className="space-y-1 md:space-y-2 font-telegraf text-sm md:text-base">
                <li>
                  <a
                    href="/adatvedelem"
                    className="hover:text-blue-300 transition"
                  >
                    Adatvédelmi Tájékoztató
                  </a>
                </li>
                <li>
                  <a href="/cookie" className="hover:text-blue-300 transition">
                    Cookie Szabályzat
                  </a>
                </li>
                <li>
                  <a
                    href="/impresszum"
                    className="hover:text-blue-300 transition"
                  >
                    Impresszum
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 font-antonio">
                Kapcsolat
              </h3>
              <ul className="space-y-1 md:space-y-2 font-telegraf text-sm md:text-base">
                <li className="flex items-start md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 mr-2 text-light-blue flex-shrink-0 mt-0.5 md:mt-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>2120 Dunakeszi, Felsőtabán utca 11.</span>
                </li>
                <li className="flex items-start md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 mr-2 text-light-blue flex-shrink-0 mt-0.5 md:mt-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.948.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+36 30 18 18 047</span>
                </li>
                <li className="flex items-start md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 mr-2 text-light-blue flex-shrink-0 mt-0.5 md:mt-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>szego@premiumbiztositasok.hu</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  className="text-white hover:text-blue-300 transition"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-white hover:text-blue-300 transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-white hover:text-blue-300 transition"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright and certification */}
          <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-secondary-blue">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-telegraf text-xs md:text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-left">
                © {new Date().getFullYear()} Alpha Trust Insurance Kft. Minden
                jog fenntartva.
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs md:text-sm font-telegraf text-gray-400 text-center md:text-left">
                <span>MNB engedély szám: H-EN-I-596/2018</span>
                <span className="hidden md:inline">|</span>
                <span>Adószám: 27181553-2-13</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
