import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Kapcsolat() {
  return (
    <div className="text-white bg-primary-blue min-h-screen">
      {/* Ingyenes Ajánlatkérés Form - Top Section */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-gradient-to-br from-secondary-blue to-primary-blue">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 hover:border-highlight-blue/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-highlight-blue to-yellow-400 p-4 rounded-2xl mb-6 inline-block shadow-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-antonio text-white">
                  Ingyenes Ajánlatkérés
                </h2>
                <p className="text-white font-telegraf text-lg md:text-xl mb-6 font-medium">
                  Töltse ki a kérdőívet, és hamarosan felvesszük Önnel a
                  kapcsolatot. A szolgáltatás ingyenes és kötelezettségmentes.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Company Details */}
      <section className="py-12 md:py-16 px-4 sm:px-12 lg:px-24 bg-gradient-to-br from-primary-blue to-secondary-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 font-antonio text-white text-center lg:text-left">
                Elérhetőségeink
              </h2>

              <div className="space-y-8">
                {/* Név és pozíció */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-highlight-blue/50 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-highlight-blue to-yellow-400 p-4 rounded-2xl mr-6 shadow-2xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl font-antonio text-white mb-1">
                          Szegő Zsombor
                        </h3>
                        <p className="text-highlight-blue font-telegraf font-bold text-lg">
                          Ügyvezető
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telefon */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-highlight-blue/50 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-highlight-blue to-yellow-400 p-4 rounded-2xl mr-6 shadow-2xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-light-blue font-telegraf font-bold text-lg mb-1">
                          Telefon
                        </p>
                        <a
                          href="tel:+36301818047"
                          className="text-white font-telegraf text-2xl font-bold hover:text-highlight-blue transition"
                        >
                          +36 30 18 18 047
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-highlight-blue/50 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-highlight-blue to-yellow-400 p-4 rounded-2xl mr-6 shadow-2xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-light-blue font-telegraf font-bold text-lg mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:szego@premiumbiztositasok.hu"
                          className="text-white font-telegraf text-xl font-bold hover:text-highlight-blue transition"
                        >
                          szego@premiumbiztositasok.hu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cím */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-highlight-blue/50 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-highlight-blue to-yellow-400 p-4 rounded-2xl mr-6 shadow-2xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-light-blue font-telegraf font-bold text-lg mb-1">
                          Cím
                        </p>
                        <p className="text-white font-telegraf text-lg">
                          2120 Dunakeszi, Felsőtabán utca 11.
                        </p>
                        <p className="text-highlight-blue font-telegraf text-sm mt-1">
                          (nem iroda)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email írási gomb */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-highlight-blue/50 transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-highlight-blue to-yellow-400 p-4 rounded-2xl mb-6 inline-block shadow-2xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-2xl font-antonio text-white mb-4">
                        Email írása
                      </h3>
                      <p className="text-light-blue font-telegraf mb-6">
                        Kattintson a gombra, és automatikusan megnyílik az email
                        kliens
                      </p>
                      <a
                        href="mailto:szego@premiumbiztositasok.hu?subject=Ajánlatkérés&body=Kedves Szegő Zsombor!%0D%0A%0D%0AÉrdeklődöm a szolgáltatásaitok iránt.%0D%0A%0D%0AÜdvözlettel,"
                        className="bg-highlight-blue text-primary-blue font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors font-telegraf text-lg inline-block"
                      >
                        EMAIL ÍRÁSA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 font-antonio text-white text-center lg:text-left">
                Cégadatok
              </h2>

              <div className="space-y-8">
                {/* Adószám */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-highlight-blue/50 transition-all duration-300">
                    <h3 className="font-bold text-2xl font-antonio text-white mb-6">
                      Adószám
                    </h3>
                    <div className="space-y-4 text-lg font-telegraf">
                      <div className="flex justify-between items-center">
                        <span className="text-light-blue font-bold">
                          Adószám:
                        </span>
                        <span className="text-white font-bold">
                          27181553-2-13
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-light-blue font-bold">
                          MNB engedély:
                        </span>
                        <span className="text-white font-bold">
                          H-EN-I-596/2018
                        </span>
                      </div>
                      <div className="mt-6 p-4 bg-gradient-to-r from-highlight-blue/20 to-yellow-400/20 rounded-xl border border-highlight-blue/30">
                        <p className="text-highlight-blue font-bold text-center text-lg">
                          A Prémium Biztosítási Alkusz Kft. csoport tagja
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
