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
      question: "MI AZ A PTK. SZERINTI ÜGYVEZETŐI FELELŐSSÉG, ÉRTHETŐEN?",
      answer:
        "A 2014-es Polgári Törvénykönyv szerint a vezető tisztségviselők kötelesek a társaság érdekeinek elsődlegessége szerint eljárni. Ha ezt megszegik, akkor a társaságnak okozott károkért személyesen felelnek. Sőt, bizonyos esetekben akár harmadik személyek felé is közvetlenül felelősséggel tartozhatnak, ami a magánvagyonukat is érintheti.",
    },
    {
      question: 'MIBEN MÁS EZ, MINT A CÉGÜNK "NORMÁL" FELELŐSSÉGBIZTOSÍTÁSA?',
      answer:
        "A cég általános felelősségbiztosítása a társaság által okozott károkat fedezi, míg a D&O biztosítás kifejezetten a vezető tisztségviselők személyes felelősségére vonatkozik. Ez lényeges különbség, hiszen a vezető magánvagyonát védi, nem pedig a cég vagyonát.",
    },
    {
      question:
        "MI TÖRTÉNIK, HA ELHAGYOM A VEZETŐI POZÍCIÓT? VÉGE A FELELŐSSÉGEMNEK?",
      answer:
        'Nem, a felelősség nem szűnik meg automatikusan a pozíció elhagyásával. A korábbi döntéseiért való felelősség akár évekig fennmaradhat. Ezért fontos, hogy a biztosítás kiterjedjen a pozíció elhagyása utáni időszakra is (ezt hívják "extended reporting period"-nak).',
    },
    {
      question: "MIKOR NEM FIZET A D&O BIZTOSÍTÁS?",
      answer:
        "A biztosítás nem fizet szándékos károkozás, bűncselekmények, jogszabályok szándékos megsértése, vagy ha a vezető személyes haszonszerzésre használta pozícióját. Fontos a kötvény pontos feltételeit ismerni, mert biztosítónként eltérések lehetnek a kizárásokban.",
    },
    {
      question: "MI TÖRTÉNIK, HA FELSZÁMOLÁS ALÁ KERÜL A CÉG?",
      answer:
        'Ez különösen kockázatos helyzet a vezetők számára, hiszen ilyenkor kerülnek leginkább célkeresztbe. A jó D&O biztosítás tartalmaz "run-off" fedezetet, ami a cég megszűnése után is védi a vezetőket egy meghatározott ideig. Fontos, hogy a biztosítást még a felszámolási eljárás megindítása előtt megkössük, mert utána már nem vagy csak speciális feltételekkel lehetséges.',
    },
  ];

  return (
    <section
      className="py-12 px-4 sm:py-16 sm:px-12 lg:px-24 bg-primary-blue"
      id="faqs"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 font-antonio text-white">
          KÉRDÉSE VAN?
          <br />
          ÍME A LEGGYAKORIBB KÉRDÉSEK A D&O BIZTOSÍTÁSRÓL
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
