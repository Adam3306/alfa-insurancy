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
              MIÉRT ÉRDEMES ENGEM VÁLASZTANIA D&O BIZTOSÍTÁSI PARTNERÉÜL?
            </h2>

            <div className="space-y-4 md:space-y-6 font-telegraf text-white">
              <p className="text-sm md:text-base">
                Tudom, hogy a biztosítás világa néha bonyolultnak tűnhet.
                Különösen igaz ez a szakmai felelősségbiztosításokra, amelynek
                feltételei sokfélék lehetnek. Azt is tudom, hogy a
                döntéshozóként kevés ideje marad foglalkozni egyéb ügyekkel.
              </p>

              <p className="font-bold text-sm md:text-base">
                Én, mint független biztosítási alkusz, azért vagyok, hogy
                segítsek Önnek eligazodni a lehetőséges labirintusában.
              </p>

              <p className="text-sm md:text-base">
                Nem egy biztosító termékeit kínálom, hanem megértem az Ön
                helyzetét, a specifikus kockázatait (beleértve a Ptk. szerinti
                szempontokat), és összehasonlítom a piacon elérhető legjobb
                ajánlatokat.
              </p>

              <p className="font-bold text-sm md:text-base">
                Célom, hogy személyre szabott, érthető és valóban megfelelő D&O
                biztosítást találjunk Önnek, ami illeszkedik az igényeihez és a
                költségvetéséhez.
              </p>

              <p className="italic text-highlight text-sm md:text-base">
                Bízza rám a keresést és az összehasonlítást!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                <a
                  href="#free-quote"
                  className="cta-button text-sm md:text-base"
                >
                  INGYENES AJÁNLATOT KÉREK
                  <span className="arrow ml-2">→</span>
                </a>

                <a
                  href="#consultation"
                  className="cta-button bg-secondary-blue hover:bg-light-blue text-sm md:text-base"
                >
                  KÉRDÉSEM VAN / KONZULTÁCIÓT KÉREK!
                  <span className="arrow ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative mt-6 md:mt-0">
            <div className="relative h-[300px] md:h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src="/insurance-consultant.jpg"
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
