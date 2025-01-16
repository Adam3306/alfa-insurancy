import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-blue-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl pb-5">Rólam</h2>
            <p className="text-lg text-gray-600 mb-6">
              Szegő Zsombornak hívnak, független biztosítási tanácsadó vagyok. Évek óta dolgozom a biztosítási iparágban, és személyre szabott megoldásokat kínálok, hogy a legjobb fedezetet találhassák meg az egyedi igényeikhez. Célom, hogy a biztosítás egyszerű és elérhető legyen mindenki számára.
            </p>
            <p className="text-lg text-gray-600">
              Legyen szó élet-, egészség- vagy vagyonbiztosításról, objektív tanácsokat adok, és széles választékot kínálok, hogy a legjobb áron biztosítást találhasson. Ne habozzon kapcsolatba lépni velem, és beszéljünk az Ön biztosítási igényeiről!
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mx-auto">
              <Image
                src="/me.jpeg"
                alt="Szegő Zsombor"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;