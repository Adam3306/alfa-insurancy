import Image from "next/image";

const About = () => {
  return (
    <section
      className="py-10 md:py-16 px-4 sm:px-12 lg:px-24 bg-primary-blue"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-antonio text-white">
              MIÉRT ÉRDEMES ENGEM VÁLASZTANIA D&O BIZTOSÍTÁSI PARTNERÉÜL? KEDVESEN SEGÍTÜNK!
            </h2>

            <div className="space-y-4 md:space-y-6 font-telegraf text-white">
              <p className="text-sm md:text-base">
                Tudjuk, hogy a biztosítás világa néha bonyolultnak tűnhet. Különösen igaz ez a szakmai felelősségbiztosításokra, amelynek feltételei sokfélék lehetnek. Azt is tudom, hogy a döntéshozóként kevés ideje marad foglalkozni egyéb ügyekkel.
              </p>

              <p className="text-sm md:text-base">
                Én, mint független biztosítási alkusz, azért vagyok, hogy segítsek Önnek eligazodni a lehetőséges labirintusában. Nem egy biztosító termékét kínálom, hanem megértem az Ön helyzetét, a specifikus kockázatait (beleértve a Ptk. szerinti szempontokat), és összehasonlítom a piacon elérhető legjobb ajánlatokat. Célom, hogy személyre szabott, érthető és valóban megfelelő D&O biztosítást találjunk Önnek, ami illeszkedik az igényeihez és a költségvetéséhez.
              </p>

              <p className="font-bold text-sm md:text-base">
                Bízza rám a keresést és az összehasonlítást!
              </p>

              <p className="text-sm md:text-base">
                Ne aggódjon az ügyintézés hossza miatt. Lépjen velem kapcsolatba, és együtt megtaláljuk a legjobb védelmet!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                <a
                  href="#free-quote"
                  className="cta-button text-sm md:text-base"
                >
                  Kérek Ingyenes Ajánlatot Kockázatmentesen!
                  <span className="arrow ml-2">→</span>
                </a>

                <a
                  href="mailto:szego@premiumbiztositasok.hu"
                  className="cta-button bg-secondary-blue hover:bg-light-blue text-sm md:text-base"
                >
                  Kérdésem Van / Konzultációt Kérek
                  <span className="arrow ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative mt-6 md:mt-0">
            <div className="relative h-[300px] md:h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src="/do_ceo.jpg"
                alt="Biztosítási szakértő"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
