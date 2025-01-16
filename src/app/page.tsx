import About from "./components/About";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 sm:text-5xl">
            Biztosítsa jövőjét szakértői biztosítási tanácsadással
          </h1>
          <p className="mt-4 text-lg text-blue-700">
            Személyre szabott biztosítási megoldások az Ön igényeire szabva.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Ingyenes konzultáció kérése
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">Szolgáltatásaink</h2>
          <p className="mt-4 text-lg text-blue-700">
            Teljes körű biztosítási fedezet minden igényére.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-blue-900">Ingatlanbiztosítás</h3>
              <p className="mt-2 text-blue-700">
                Védje otthonát és értékeit átfogó ingatlanbiztosítással.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-blue-900">Egészségbiztosítás</h3>
              <p className="mt-2 text-blue-700">
                Megfizethető tervek az egészség és jóllét megóvására.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-semibold text-blue-900">Életbiztosítás</h3>
              <p className="mt-2 text-blue-700">
                Biztosítsa szerettei pénzügyi biztonságát megbízható fedezettel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">Kapcsolat</h2>
          <p className="mt-4 text-lg text-blue-700">
            Segítünk Önnek. Küldje el kérdéseit, vagy időpontot egyeztessen konzultációra.
          </p>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-700">
                Név
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Teljes neve"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Email címe"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-700">
                Üzenet
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Üzenete itt..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Üzenet küldése
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;