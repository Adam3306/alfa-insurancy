import Image from "next/image";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kötelező Kivitelezői Felelősségbiztosítás | Alpha Trust Insurance",
  description:
    "Kötelező felelősségbiztosítás az építőiparban. Kivitelezők és tervezők számára kötelező biztosítás a 2024-es kormányrendelet szerint. Ingyenes ajánlatkérés!",
  keywords: [
    "kötelező kivitelezői felelősségbiztosítás",
    "építőipari biztosítás",
    "kivitelezői biztosítás",
    "tervezői felelősségbiztosítás",
    "építőipari kivitelezés",
    "műszaki tervezés",
    "191/2009 kormányrendelet",
    "MKIK",
  ],
  alternates: {
    canonical: "/szolgaltatasok/kotelezo-kivitelezoi-felelossegbiztositas",
  },
  openGraph: {
    title: "Kötelező Kivitelezői Felelősségbiztosítás | Alpha Trust Insurance",
    description:
      "Kötelező felelősségbiztosítás az építőiparban. Kivitelezők és tervezők számára kötelező biztosítás.",
    url: "https://alphabiztositas.com/szolgaltatasok/kotelezo-kivitelezoi-felelossegbiztositas",
  },
};

export default function KotelezoKivitelezoifelelossegbiztositas() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row min-h-[70vh] md:min-h-[60vh] items-center md:items-stretch relative bg-[#3A5D98] px-2 sm:px-4"
        id="hero"
      >
        {/* Left column - Image with blue border */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#3A5D98] pt-6 md:pt-0 pb-4 md:pb-0">
          <div className="border-8 border-[#4592c6] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center mx-auto relative">
            <Image
              src="/Kötelező Kivitelezői (1).png"
              alt="Kötelező kivitelezői felelősségbiztosítás"
              fill
              className="object-cover"
              style={{ objectFit: "cover" }}
              priority
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
            <h1 className="hero-title font-antonio font-bold text-white text-center md:text-left text-xl sm:text-xl md:text-2xl lg:text-2xl leading-tight">
              JOGSZABÁLYI MEGFELELÉS:
              <br />
              <span className="hero-subtitle font-antonio font-bold block mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl">
                KÖTELEZŐ FELELŐSSÉGBIZTOSÍTÁS AZ ÉPÍTŐIPARBAN
              </span>
            </h1>
            <p className="text-base md:text-lg font-telegraf text-gray-200 mt-4 text-center md:text-left">
              Biztosítsa Cége Megfelelőségét a Frissített Kormányrendelet
              Szerint!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start mt-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScNfrCzGAdZlq-Ijq3P8GVRrrEyDidGS9V4r7tKFcfAxZY68w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-base md:text-lg border-2 border-highlight-blue text-center"
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
      </section>

      {/* Introduction Section */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-primary-blue"
        id="introduction"
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-base md:text-lg font-telegraf text-gray-200">
            <p>
              Az{" "}
              <strong className="text-highlight-blue">
                építőipari kivitelezési tevékenységről szóló 191/2009. (IX. 15.)
                Kormányrendelet
              </strong>{" "}
              módosítása 2024. október 1-jén hatályba lépett, és új
              kötelezettségeket ró az ágazat szereplőire.{" "}
              <strong className="text-highlight-blue">
                A teljes megfelelés határideje: 2025. január 15.
              </strong>
            </p>
            <p>
              Ez a jogszabályi változás immár{" "}
              <strong className="text-highlight-blue">
                kötelezővé teszi a megfelelő szakmai felelősségbiztosítás
                meglétét
              </strong>{" "}
              minden építőipari kivitelezést és műszaki tervezést végző cég
              számára.
            </p>
          </div>
        </div>
      </section>

      {/* Who is Affected Section */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-secondary-blue"
        id="who"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            Kikre vonatkozik a kötelezettség?
          </h2>
          <div className="bg-primary-blue border-2 border-highlight-blue p-6 md:p-8 rounded-lg mb-8">
            <p className="text-lg md:text-xl font-telegraf text-white leading-relaxed">
              Minden{" "}
              <strong className="text-highlight-blue">
                építészeti-műszaki tervezési tevékenységet
              </strong>{" "}
              végző vállalkozásnak és{" "}
              <strong className="text-highlight-blue">
                építőipari kivitelezési tevékenységet
              </strong>{" "}
              folytató vállalkozásnak kötelező felelősségbiztosítást kötnie,{" "}
              <strong className="text-highlight-blue">
                amennyiben a szakmáját gyakorolni akarja.
              </strong>
            </p>
          </div>

          {/* Kivitelezők Section with Image */}
          <div className="flex flex-col md:flex-row min-h-[50vh] items-stretch bg-primary-blue mb-8 rounded-lg overflow-hidden">
            {/* Left column - Image */}
            <div className="md:w-1/2 w-full h-[300px] md:h-auto relative">
              <Image
                src="/Main Contractor Facebook Image.jpg"
                alt="Kivitelezői felelősségbiztosítás"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="w-full h-full"
                loading="lazy"
                quality={80}
              />
            </div>
            {/* Right column - Text */}
            <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#0C1D3D] p-6 md:p-16">
              <h3 className="text-2xl md:text-3xl font-bold font-antonio mb-6 text-white uppercase tracking-wider">
                Kivitelezők
              </h3>
              <div className="space-y-4 text-base md:text-lg font-telegraf text-white">
                <p>
                  Minden{" "}
                  <strong className="text-highlight-blue">
                    építőipari kivitelezési tevékenységet
                  </strong>{" "}
                  folytató vállalkozásnak kötelező felelősségbiztosítást kell
                  kötnie, amennyiben a szakmáját gyakorolni akarja.
                </p>
                <p>
                  A biztosításnak ki kell terjednie a kivitelezési
                  tevékenységben okozott személyi sérüléses és dologi károkra,
                  valamint a szerződésben foglalt rendelkezések megszegésével
                  összefüggésben okozott károkra.
                </p>
              </div>
            </div>
          </div>

          {/* Tervezők Section with Image */}
          <div className="flex flex-col md:flex-row min-h-[50vh] items-stretch bg-primary-blue mb-8 rounded-lg overflow-hidden">
            {/* Left column - Text */}
            <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#0C1D3D] p-6 md:p-16 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold font-antonio mb-6 text-white uppercase tracking-wider">
                Tervezők
              </h3>
              <div className="space-y-4 text-base md:text-lg font-telegraf text-white">
                <p>
                  Minden{" "}
                  <strong className="text-highlight-blue">
                    építészeti-műszaki tervezési tevékenységet
                  </strong>{" "}
                  végző vállalkozásnak kötelező felelősségbiztosítást kell
                  kötnie, amennyiben a szakmáját gyakorolni akarja.
                </p>
                <p>
                  A tervezői felelősségbiztosítás védelmet nyújt a tervezési
                  hibákból eredő károkra, amelyek a tervezési tevékenység során
                  keletkezhetnek.
                </p>
              </div>
            </div>
            {/* Right column - Image */}
            <div className="md:w-1/2 w-full h-[300px] md:h-auto relative order-1 md:order-2">
              <Image
                src="/Designer Liability Insurance.png"
                alt="Tervezői felelősségbiztosítás"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="w-full h-full"
                loading="lazy"
                quality={80}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNfrCzGAdZlq-Ijq3P8GVRrrEyDidGS9V4r7tKFcfAxZY68w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-base md:text-lg border-2 border-highlight-blue text-center"
            >
              AJÁNLATKÉRÉS
            </a>
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-primary-blue"
        id="coverage"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            A Módosítás Lényege és a Fedezet Tartalma
          </h2>
          <p className="text-lg font-telegraf text-gray-200 mb-8 text-center max-w-4xl mx-auto">
            A Kormányrendelet pontosan meghatározza, hogy a
            felelősségbiztosításnak milyen károkra kell fedezetet nyújtania.
          </p>

          <div className="bg-secondary-blue border-2 border-highlight-blue p-6 md:p-8 rounded-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-antonio text-highlight-blue uppercase">
              A Kivitelezői Felelősségbiztosítás
            </h3>
            <p className="text-lg font-telegraf text-white mb-6">
              A kivitelezőnek az általa vállalt tevékenység körében okozott
              károk megtérítésére kell szerződést kötnie. A biztosításnak ki
              kell terjednie:
            </p>
            <ul className="space-y-4 text-white font-telegraf text-base md:text-lg">
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1 text-xl">✓</span>
                <span>
                  <strong>Személyi sérüléses és dologi károkra</strong>{" "}
                  egyaránt.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1 text-xl">✓</span>
                <span>
                  <strong>
                    Előírások, szabályok és a kivitelezési szerződésben foglalt
                    rendelkezések megszegésével összefüggésben okozott károkra
                  </strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1 text-xl">✓</span>
                <span>
                  <strong>Sérelemdíjakra</strong> (személyi sérüléses nem
                  vagyoni sérelmek tekintetében).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-blue mr-3 mt-1 text-xl">✓</span>
                <span>
                  A biztosított vállalkozóval munkaviszonyban álló személyek,
                  illetve az{" "}
                  <strong>
                    alvállalkozók tevékenységéből eredő olyan károkra,
                    amelyekért a vállalkozó kivitelezőt kártérítési felelősség
                    terheli.
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Limits Table Section */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-secondary-blue"
        id="limits"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-antonio text-white uppercase tracking-wider">
            Jövedelemhatárok és Minimális Kártérítési Limitek
          </h2>
          <p className="text-lg font-telegraf text-gray-200 mb-8 text-center max-w-4xl mx-auto">
            A jogszabály{" "}
            <strong className="text-highlight-blue">jövedelemhatárok</strong>{" "}
            (éves nettó árbevétel) alapján kategorizálja a kötelezetteket, és
            ezekhez rendel{" "}
            <strong className="text-highlight-blue">
              minimális kártérítési limiteket
            </strong>{" "}
            (káreseményenként és biztosítási időszakonként [évente]).
          </p>

          {/* Kivitelezők Table */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center font-antonio text-highlight-blue uppercase">
              Kivitelezők esetében (ld. 21/D. §)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-primary-blue border-2 border-highlight-blue rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-highlight-blue text-primary-blue">
                    <th className="border border-highlight-blue px-4 py-4 text-left font-antonio font-bold text-sm md:text-base">
                      Éves Nettó Árbevétel (M Ft)
                    </th>
                    <th className="border border-highlight-blue px-4 py-4 text-center font-antonio font-bold text-sm md:text-base">
                      Minimális Limit
                      <br />
                      (Biztosítási Eseményenként)
                    </th>
                    <th className="border border-highlight-blue px-4 py-4 text-center font-antonio font-bold text-sm md:text-base">
                      Minimális Limit
                      <br />
                      (Évente/Időszakonként)
                    </th>
                  </tr>
                </thead>
                <tbody className="font-telegraf text-white">
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      100 millió forintig
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      20 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      40 millió forint
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      100 és 500 millió forint között
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      50 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      100 millió forint
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      500 és 2 milliárd forint között
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      100 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      200 millió forint
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      2 és 10 milliárd forint között
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      150 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      300 millió forint
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      10 milliárd forint felett
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      200 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      400 millió forint
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tervezők Table */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center font-antonio text-highlight-blue uppercase">
              Tervezők esetében (ld. 15/H. §)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-primary-blue border-2 border-highlight-blue rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-highlight-blue text-primary-blue">
                    <th className="border border-highlight-blue px-4 py-4 text-left font-antonio font-bold text-sm md:text-base">
                      Éves Nettó Árbevétel (M Ft)
                    </th>
                    <th className="border border-highlight-blue px-4 py-4 text-center font-antonio font-bold text-sm md:text-base">
                      Minimális Limit
                      <br />
                      (Biztosítási Eseményenként)
                    </th>
                    <th className="border border-highlight-blue px-4 py-4 text-center font-antonio font-bold text-sm md:text-base">
                      Minimális Limit
                      <br />
                      (Évente/Időszakonként)
                    </th>
                  </tr>
                </thead>
                <tbody className="font-telegraf text-white">
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      &lt; 20 M Ft
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      10 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      20 millió forint
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      20 – 100 M Ft
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      20 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      40 millió forint
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      100 – 1.000 M Ft
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      50 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      100 millió forint
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-blue transition-colors">
                    <td className="border border-highlight-blue px-4 py-4">
                      1.000 M Ft &lt;
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      100 millió forint
                    </td>
                    <td className="border border-highlight-blue px-4 py-4 text-center">
                      200 millió forint
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNfrCzGAdZlq-Ijq3P8GVRrrEyDidGS9V4r7tKFcfAxZY68w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-base md:text-lg border-2 border-highlight-blue text-center"
            >
              AJÁNLATKÉRÉS
            </a>
          </div>
        </div>
      </section>

      {/* Legal Links Section */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-primary-blue"
        id="legal-links"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            A Jogszabályok
          </h2>
          <p className="text-lg font-telegraf text-gray-200 mb-8 text-center">
            A jogszabályok elérhetőek az alábbi linkeken:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://net.jogtar.hu/jogszabaly?docid=a0900191.kor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 text-center group"
            >
              <h3 className="text-xl font-bold font-antonio text-highlight-blue mb-3 uppercase group-hover:text-yellow-400 transition-colors">
                Kivitelezői
              </h3>
              <p className="text-white font-telegraf">
                191/2009. (IX. 15.) Kormányrendelet
              </p>
            </a>
            <a
              href="https://net.jogtar.hu/jogszabaly?docid=a1300266.kor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-blue border-2 border-highlight-blue p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 text-center group"
            >
              <h3 className="text-xl font-bold font-antonio text-highlight-blue mb-3 uppercase group-hover:text-yellow-400 transition-colors">
                Műszaki Tervező
              </h3>
              <p className="text-white font-telegraf">
                266/2013. (VII. 17.) Kormányrendelet
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section
        className="py-12 md:py-20 px-4 sm:px-12 lg:px-24 bg-secondary-blue"
        id="consequences"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-antonio text-white uppercase tracking-wider">
            Mi történik, ha a vállalkozás nem felel meg?
          </h2>
          <div className="bg-primary-blue border-2 border-highlight-blue p-6 md:p-8 rounded-lg">
            <p className="text-lg font-telegraf text-white mb-6 leading-relaxed">
              A felelősségbiztosítás meglétét és díjrendezettségét a{" "}
              <a
                href="https://mkik.hu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight-blue hover:text-yellow-400 underline font-bold"
              >
                Magyar Kereskedelmi és Iparkamara (MKIK)
              </a>{" "}
              ellenőrzi.
            </p>
            <p className="text-lg font-telegraf text-white mb-6 leading-relaxed">
              A biztosítás hiányában, a fedezet megszűnése vagy a díj nem
              fizetése esetén a kötelezett vállalkozást felszólítják,
              szankcionálják, végső esetben pedig{" "}
              <strong className="text-highlight-blue">
                szakmája gyakorlásától való eltiltás
              </strong>{" "}
              is bekövetkezhet. A biztosító a felelősségbiztosítási jogviszony
              megszűnéséről köteles tájékoztatni az MKIK-t.
            </p>
            <p className="text-lg font-telegraf text-white leading-relaxed">
              A biztosítás megkötése és a fedezet igazolása kötvény és
              fedezetigazolás kiállításával történik, melyet a kamara felé kell
              bemutatni.
            </p>
          </div>
          <div className="bg-highlight-blue bg-opacity-20 border-2 border-highlight-blue p-6 rounded-lg mt-8">
            <p className="text-xl font-bold font-antonio text-white text-center uppercase">
              Ne kockáztassa vállalkozása működését! Kérjen időben ajánlatot!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNfrCzGAdZlq-Ijq3P8GVRrrEyDidGS9V4r7tKFcfAxZY68w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight-blue text-primary-blue font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-lg border-2 border-highlight-blue text-center"
            >
              INGYENES AJÁNLATKÉRÉS
            </a>
            <a
              href="tel:+36301818047"
              className="border-2 border-highlight-blue text-highlight-blue font-bold py-4 px-8 rounded-lg hover:bg-highlight-blue hover:text-primary-blue transition-colors font-telegraf text-lg text-center"
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
