import About from "./components/About";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import HomeContactForm from "./components/HomeContactForm";
import HeroImage from "./components/HeroImage";

export default function Home() {
  return (
    <div className="text-white bg-primary-blue">
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row min-h-[70vh] md:min-h-[60vh] items-center md:items-stretch relative bg-[#3A5D98] px-2 sm:px-4"
        id="hero"
      >
        {/* Left column - Image with blue border */}
        <HeroImage />

        {/* Right column - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 md:px-12 py-8 md:py-12">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-antonio text-white leading-tight">
              ÜGYVEZETŐI FELELŐSSÉGBIZTOSÍTÁS
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 font-telegraf text-light-blue leading-relaxed">
              Védje meg a személyes vagyonát! A 2014-es Ptk. szerint Ön, mint
              vezető, személyesen felel a döntéseiért.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-highlight-blue rounded-full mr-3"></div>
                <span className="font-telegraf text-white">
                  Független alkusz - objektív tanácsadás
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-highlight-blue rounded-full mr-3"></div>
                <span className="font-telegraf text-white">
                  Piaci összehasonlítás és legjobb ajánlatok
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-highlight-blue rounded-full mr-3"></div>
                <span className="font-telegraf text-white">
                  Személyre szabott megoldások
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Form Section */}
      <section
        className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-secondary-blue"
        id="free-quote"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-antonio text-white">
              KÉRJE INGYENES AJÁNLATÁT
            </h2>
            <p className="text-lg font-telegraf text-light-blue">
              Töltse ki az alábbi űrlapot, és hamarosan felvesszük Önnel a
              kapcsolatot!
            </p>
          </div>

          <div className="bg-primary-blue p-6 md:p-8 rounded-lg shadow-xl">
            <HomeContactForm />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
