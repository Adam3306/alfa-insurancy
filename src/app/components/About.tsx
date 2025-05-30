import Image from "next/image";

const About = () => {
  return (
    <section
      className="py-16 px-6 sm:px-12 lg:px-24 bg-primary-blue"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 font-antonio text-white">
              MIÉRT ÉRDEMES ENGEM VÁLASZTANIA D&O BIZTOSÍTÁSI PARTNERÉÜL?
            </h2>

            <div className="space-y-6 font-telegraf text-white">
              <p>
                Tudom, hogy a biztosítás világa néha bonyolultnak tűnhet.
                Különösen igaz ez a szakmai felelősségbiztosításokra, amelynek
                feltételei sokfélék lehetnek. Azt is tudom, hogy a
                döntéshozóként kevés ideje marad foglalkozni egyéb ügyekkel.
              </p>

              <p className="font-bold">
                Én, mint független biztosítási alkusz, azért vagyok, hogy
                segítsek Önnek eligazodni a lehetőséges labirintusában.
              </p>

              <p>
                Nem egy biztosító termékeit kínálom, hanem megértem az Ön
                helyzetét, a specifikus kockázatait (beleértve a Ptk. szerinti
                szempontokat), és összehasonlítom a piacon elérhető legjobb
                ajánlatokat.
              </p>

              <p className="font-bold">
                Célom, hogy személyre szabott, érthető és valóban megfelelő D&O
                biztosítást találjunk Önnek, ami illeszkedik az igényeihez és a
                költségvetéséhez.
              </p>

              <p className="italic text-highlight">
                Bízza rám a keresést és az összehasonlítást!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#free-quote" className="cta-button">
                  INGYENES AJÁNLATOT KÉREK
                  <span className="arrow ml-2">→</span>
                </a>

                <a
                  href="#consultation"
                  className="cta-button bg-secondary-blue hover:bg-light-blue"
                >
                  KÉRDÉSEM VAN / KONZULTÁCIÓT KÉREK!
                  <span className="arrow ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src="/insurance-consultant.jpg"
                alt="Biztosítási szakértő"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
