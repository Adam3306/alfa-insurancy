const FAQs = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-primary-blue" id="faqs">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-antonio text-white">
          KÉRDÉSE VAN?
          <br />
          ÍME A LEGGYAKORIBB KÉRDÉSEK A D&O BIZTOSÍTÁSRÓL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary-blue p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 font-antonio text-white">
              MI AZ A PTK. SZERINTI ÜGYVEZETŐI FELELŐSSÉG, ÉRTHETŐEN?
            </h3>
            <p className="font-telegraf text-white">
              A 2014-es Polgári Törvénykönyv szerint a vezető tisztségviselők
              kötelesek a társaság érdekeinek elsődlegessége szerint eljárni. Ha
              ezt megszegik, akkor a társaságnak okozott károkért személyesen
              felelnek. Sőt, bizonyos esetekben akár harmadik személyek felé is
              közvetlenül felelősséggel tartozhatnak, ami a magánvagyonukat is
              érintheti.
            </p>
          </div>

          <div className="bg-secondary-blue p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 font-antonio text-white">
              MIBEN MÁS EZ, MINT A CÉGÜNK &ldquo;NORMÁL&rdquo;
              FELELŐSSÉGBIZTOSÍTÁSA?
            </h3>
            <p className="font-telegraf text-white">
              A cég általános felelősségbiztosítása a társaság által okozott
              károkat fedezi, míg a D&O biztosítás kifejezetten a vezető
              tisztségviselők személyes felelősségére vonatkozik. Ez lényeges
              különbség, hiszen a vezető magánvagyonát védi, nem pedig a cég
              vagyonát.
            </p>
          </div>

          <div className="bg-secondary-blue p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 font-antonio text-white">
              MI TÖRTÉNIK, HA ELHAGYOM A VEZETŐI POZÍCIÓT? VÉGE A
              FELELŐSSÉGEMNEK?
            </h3>
            <p className="font-telegraf text-white">
              Nem, a felelősség nem szűnik meg automatikusan a pozíció
              elhagyásával. A korábbi döntéseiért való felelősség akár évekig
              fennmaradhat. Ezért fontos, hogy a biztosítás kiterjedjen a
              pozíció elhagyása utáni időszakra is (ezt hívják &ldquo;extended
              reporting period&rdquo;-nak).
            </p>
          </div>

          <div className="bg-secondary-blue p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 font-antonio text-white">
              MIKOR NEM FIZET A D&O BIZTOSÍTÁS?
            </h3>
            <p className="font-telegraf text-white">
              A biztosítás nem fizet szándékos károkozás, bűncselekmények,
              jogszabályok szándékos megsértése, vagy ha a vezető személyes
              haszonszerzésre használta pozícióját. Fontos a kötvény pontos
              feltételeit ismerni, mert biztosítónként eltérések lehetnek a
              kizárásokban.
            </p>
          </div>

          <div className="bg-secondary-blue p-8 rounded-lg shadow-lg col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-antonio text-white">
              MI TÖRTÉNIK, HA FELSZÁMOLÁS ALÁ KERÜL A CÉG?
            </h3>
            <p className="font-telegraf text-white">
              Ez különösen kockázatos helyzet a vezetők számára, hiszen ilyenkor
              kerülnek leginkább célkeresztbe. A jó D&O biztosítás tartalmaz
              &ldquo;run-off&rdquo; fedezetet, ami a cég megszűnése után is védi
              a vezetőket egy meghatározott ideig. Fontos, hogy a biztosítást
              még a felszámolási eljárás megindítása előtt megkössük, mert utána
              már nem vagy csak speciális feltételekkel lehetséges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
