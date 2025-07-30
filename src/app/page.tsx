"use client";
import About from "./components/About";
import Footer from "./components/Footer";
import HomeContactForm from "./components/HomeContactForm";

export default function Home() {
  return (
    <div className="text-white bg-primary-blue">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
