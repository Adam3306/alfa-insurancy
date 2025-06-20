"use client";

import { useState } from "react";

const FAQs = () => {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Mi az a Ptk. szerinti ügyvezetői felelősség, érthetően?",
      answer:
        "Egyszerűen fogalmazva, a 2014 óta érvényben lévő törvény (Ptk.) lehetővé teszi, hogy ha Ön, mint vezető, hibázik vagy mulaszt a munkája során, ami kárt okoz, akkor nem csak a cég, de akár Ön személyesen is felelhet érte a magánvagyonával. Ez egy fontos jogszabályi változás volt.",
    },
    {
      question: 'Miben más ez, mint a cégünk "normál" felelősségbiztosítása?',
      answer:
        "A cég általános felelősségbiztosítása a cég működésével kapcsolatos balesetekre, károkra (pl. valaki elesik az irodában) nyújt fedezetet. A D&O biztosítás viszont kifejezetten az Ön, mint vezető döntéseiből, munkájából eredő hibákra vonatkozik, és az azokból adódó személyes felelősségére.",
    },
    {
      question:
        "Mi történik, ha elhagyom a vezetői pozíciót? Vége a felelősségemnek?",
      answer:
        'Fontos tudni, hogy a korábbi vezetői döntéseiért való felelőssége nem szűnik meg automatikusan a távozással. A D&O biztosítások tartalmaznak egy "kiterjesztett jelentési időszakot", ami azt jelenti, hogy a biztosítás idején történt, de később felmerülő hibákra is vonatkozhat a fedezet a biztosítás megszűnése után még egy bizonyos ideig (jellemzően 12 hónapig).',
    },
    {
      question: "Mikor nem fizet a D&O biztosítás?",
      answer:
        "Ahogy más biztosításoknál, itt is vannak kivételek. Például, ha szándékosan okoz valamilyen kárt, arra a biztosítás nem vonatkozik. Büntetőjogi eljárásban kiszabott bírságokat vagy börtönbüntetést sem fedez (ez törvényileg tiltott lenne), de a védekezés jogi költségeit fedezi.",
    },
    {
      question: "Mi van, ha felszámolás alá kerül a cég?",
      answer:
        "Sajnos felszámolás esetén a hitelezők és a felszámoló is vizsgálhatják a vezetői tevékenységet, és felléphetnek a vezetővel szemben. A D&O biztosítás segíthet az ezzel járó jogi költségek és kártérítési kötelezettség kezelésében.",
    },
  ];

  return (
    <section
      className="py-12 px-4 sm:py-16 sm:px-12 lg:px-24 bg-primary-blue"
      id="faqs"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 font-antonio text-white">
          Kérdése Van?
          <br />
          Íme a Leggyakoribb Kérdések a D&O Biztosításról
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary-blue rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="p-4 sm:p-6 w-full flex justify-between items-start sm:items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQs.includes(index)}
              >
                <h3 className="text-base sm:text-xl font-bold font-antonio text-white pr-3">
                  {faq.question}
                </h3>
                <div className="text-white flex-shrink-0 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#3A5D98] mt-1 sm:mt-0">
                  {openFAQs.includes(index) ? (
                    <span
                      className="flex items-center justify-center w-full h-full text-lg sm:text-xl font-bold leading-none pb-0.5"
                      aria-hidden="true"
                    >
                      −
                    </span>
                  ) : (
                    <span
                      className="flex items-center justify-center w-full h-full text-lg sm:text-xl font-bold leading-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  )}
                </div>
              </button>

              {openFAQs.includes(index) && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="font-telegraf text-sm sm:text-base text-white">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
