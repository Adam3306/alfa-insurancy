'use client';

export default function Home() {
  return (
    <div className='text-white bg-primary-blue'>
      {/* Hero Section */}
      <section className='flex flex-col md:flex-row py-12 px-6 sm:px-12 lg:px-24'>
        <div className='md:w-1/2 flex items-center justify-center'>
          <img
            src='/executive-businessman.jpg'
            alt='Executive businessman'
            className='max-h-96 object-cover'
          />
        </div>
        <div className='md:w-1/2 flex flex-col justify-center mt-8 md:mt-0'>
          <h1 className='text-3xl md:text-4xl font-bold text-white font-antonio'>
            BIZTONSÁGBAN
            <br />
            ÜGYVEZETŐKÉNT IS:
            <br />
            A D&O
            <br />
            FELELŐSSÉGBIZTOSÍTÁS,
            <br />
            AMI ÖNT VÉDI
          </h1>
        </div>
      </section>

      {/* Executive Risk Section */}
      <section className='py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-10'>
            <div className='flex flex-col md:flex-row items-center mb-8'>
              <div className='md:w-1/3 mb-4 md:mb-0'>
                <img
                  src='/stressed-executive.jpg'
                  alt='Stressed executive'
                  className='rounded-lg max-h-72 object-cover'
                />
              </div>
              <div className='md:w-2/3 md:pl-8'>
                <h2 className='text-2xl font-bold mb-4 font-antonio'>
                  TISZTELT ÜGYVEZETŐ, IGAZGATÓSÁGI TAG, DÖNTÉSHOZÓ!
                </h2>
                <p className='text-lg mb-2 font-telegraf'>
                  Tudta Ön, hogy az ügyvezetők és igazgatósági tagok a vállalat
                  tevékenységével kapcsolatban személyes és korlátlan
                  felelősséggel tartoznak?
                </p>
                <p className='text-lg font-telegraf'>
                  Mindez azt jelenti, hogy a vállalat üzleti tevékenységével,
                  vagyonával kapcsolatosan okozott károk esetén a saját
                  magánvagyonával felelhet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Areas Section */}
      <section className='py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8 text-center font-antonio'>
            MIK AZOK A VEZETŐI KOCKÁZATOK, AMELYEK SZEMÉLYES FELELŐSSÉGGEL
            JÁRNAK?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            <div className='bg-secondary-blue p-6 rounded-lg faq-card'>
              <h3 className='text-xl font-semibold mb-3 font-antonio'>
                SZEMÉLYES FELELŐSSÉG A PÉL. SZERINT
              </h3>
              <p className='font-interphases'>
                Az ügyvezető a társaság ügyvezetését az ilyen tisztséget betöltő
                személyektől elvárható gondossággal köteles ellátni.
              </p>
            </div>
            <div className='bg-secondary-blue p-6 rounded-lg faq-card'>
              <h3 className='text-xl font-semibold mb-3 font-antonio'>
                BÜNTETŐJOGI KÖVETKEZMÉNYEK
              </h3>
              <p className='font-interphases'>
                Az ügyvezetőt akár büntetőjogi felelősség is terhelheti bizonyos
                jogszabálysértések esetén.
              </p>
            </div>
            <div className='bg-secondary-blue p-6 rounded-lg text-center flex flex-col items-center justify-center faq-card'>
              <h3 className='text-xl font-semibold mb-3 font-antonio'>
                BŐVEBB INFÓ
              </h3>
              <button className='bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg mt-auto font-telegraf cta-button'>
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className='bg-secondary-blue p-6 rounded-lg text-center flex flex-col items-center justify-center faq-card'>
              <h3 className='text-xl font-semibold mb-3 font-antonio'>
                BŐVEBB INFÓ
              </h3>
              <button className='bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg mt-auto font-telegraf cta-button'>
                TUDJ MEG TÖBBET
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className='py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
            <div className='bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between faq-card'>
              <h3 className='text-xl font-semibold mb-3 text-center font-antonio'>
                EVENT GYANÚS
              </h3>
              <p className='text-center mb-4 font-telegraf'>
                Ön egy vezetőként felelős a vállalat eseményeiért és azok
                következményeiért.
              </p>
              <button className='bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf cta-button'>
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className='bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between faq-card'>
              <h3 className='text-xl font-semibold mb-3 text-center font-antonio'>
                SPECIÁLIS ESETEK
              </h3>
              <p className='text-center mb-4 font-telegraf'>
                Speciális esetek, amelyek vezetői felelősséget vonnak maguk
                után.
              </p>
              <button className='bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf cta-button'>
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className='bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between faq-card'>
              <h3 className='text-xl font-semibold mb-3 text-center font-antonio'>
                BŐVEBB INFÓ
              </h3>
              <p className='text-center mb-4 font-telegraf'>
                További információk a vezetői felelősségről és kockázatokról.
              </p>
              <button className='bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf cta-button'>
                TUDJ MEG TÖBBET
              </button>
            </div>
            <div className='bg-primary-blue p-6 rounded-lg flex flex-col items-center justify-between faq-card'>
              <h3 className='text-xl font-semibold mb-3 text-center font-antonio'>
                BŐVEBB INFÓ
              </h3>
              <p className='text-center mb-4 font-telegraf'>
                További információk a D&O felelősségbiztosításról.
              </p>
              <button className='bg-light-blue hover:bg-highlight-blue py-2 px-4 rounded-lg font-telegraf cta-button'>
                TUDJ MEG TÖBBET
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* D&O Insurance Benefits - Main Title */}
      <section className='py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue border-t border-secondary-blue'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8 text-center font-antonio'>
            MIBEN SEGÍT AZ ÜGYVEZETŐI FELELŐSSÉGBIZTOSÍTÁS?
          </h2>
          <p className='text-lg font-telegraf text-center mb-8 max-w-3xl mx-auto'>
            A D&O Biztosítás Létfontosságú Fedezetei
            <br />
            (mindig a konkrét kötvény a mérvadó)
          </p>
        </div>
      </section>

      {/* D&O Insurance Benefits - First Row */}
      <section className='pb-8 px-6 sm:px-12 lg:px-24 bg-primary-blue'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='relative rounded-lg overflow-hidden image-card'>
              <img
                src='/legal-protection.jpg'
                alt='Jogi védekezés'
                className='w-full h-72 object-cover'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end card-content'>
                <h3 className='text-2xl font-bold text-white mb-3 font-antonio'>
                  JOGI VÉDEKEZÉS
                  <br />
                  KÖLTSÉGEINEK FEDEZÉSE
                </h3>
                <p className='text-white font-telegraf'>
                  Átvállalja a jogi eljárások minden indokolt költségét (ügyvédi
                  díjak, bírósági költségek), akár a bűnösség jogerős
                  kimondásáig büntetőügyekben is.
                </p>
              </div>
            </div>
            <div className='relative rounded-lg overflow-hidden image-card'>
              <img
                src='/claim-settlement.jpg'
                alt='Kártérítési összegek'
                className='w-full h-72 object-cover'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end card-content'>
                <h3 className='text-2xl font-bold text-white mb-3 font-antonio'>
                  KÁRTÉRÍTÉSI ÖSSZEGEK
                  <br />
                  KIFIZETÉSE
                </h3>
                <p className='text-white font-telegraf'>
                  Segít a jogosan megítélt kártérítési összegek megfizetésében a
                  biztosítási limit erejéig.
                </p>
              </div>
            </div>
            <div className='relative rounded-lg overflow-hidden image-card'>
              <img
                src='/businessman-presses-face-emoji-concept-evaluating-customer-service.jpg'
                alt='Bírságok fedezete'
                className='w-full h-72 object-cover'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end card-content'>
                <h3 className='text-2xl font-bold text-white mb-3 font-antonio'>
                  BIZONYOS BÍRSÁGOK
                  <br />
                  FEDEZETE
                </h3>
                <p className='text-white font-telegraf'>
                  Bizonyos típusú bírságokra és adminisztratív szankciókra is
                  fedezetet nyújthat a biztosítási szerződés feltételei szerint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D&O Insurance Benefits - Second Row */}
      <section className='pt-8 pb-16 px-6 sm:px-12 lg:px-24 bg-primary-blue'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='relative rounded-lg overflow-hidden image-card'>
              <img
                src='/reputation-defense.jpg'
                alt='Jó hírnév helyreállítása'
                className='w-full h-72 object-cover'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end card-content'>
                <h3 className='text-2xl font-bold text-white mb-3 font-antonio'>
                  JÓ HÍRNÉV
                  <br />
                  HELYREÁLLÍTÁSÁNAK
                  <br />
                  TÁMOGATÁSA
                </h3>
                <p className='text-white font-telegraf'>
                  A biztosítás fedezetet nyújthat a hírnévvédelemmel kapcsolatos
                  költségekre, beleértve a PR és kommunikációs szakértők díjait.
                </p>
              </div>
            </div>
            <div className='relative rounded-lg overflow-hidden image-card'>
              <img
                src='/man-stands-front-cross-that-says-word-it.jpg'
                alt='Múltbeli tevékenység'
                className='w-full h-72 object-cover'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end card-content'>
                <h3 className='text-2xl font-bold text-white mb-3 font-antonio'>
                  MÚLTBELI TEVÉKENYSÉG
                  <br />
                  FEDEZETE
                </h3>
                <p className='text-white font-telegraf'>
                  A biztosítás kiterjed olyan múltbeli tevékenységekre is,
                  amelyek a szerződés megkötése előtt történtek, de a kárigény
                  később merül fel.
                </p>
              </div>
            </div>
            <div className='relative rounded-lg overflow-hidden image-card'>
              <img
                src='/close-up-man-hand-holding-crystal-ball.jpg'
                alt='Védelem távozás után'
                className='w-full h-72 object-cover'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end card-content'>
                <h3 className='text-2xl font-bold text-white mb-3 font-antonio'>
                  VÉDELEM TÁVOZÁS
                  <br />
                  UTÁN IS
                </h3>
                <p className='text-white font-telegraf'>
                  A biztosítás akkor is fedezetet nyújt, ha a vezető már
                  elhagyta a vállalatot, de korábbi tisztségével kapcsolatban
                  merül fel kártérítési igény.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8 text-center font-antonio'>
            MIÉRT ÉRDEMES IGÉNYBE VENNI A D&O BIZTOSÍTÁST VÁLLALATÁNÁL?
          </h2>

          <div className='flex flex-col md:flex-row items-center mb-12'>
            <div className='md:w-1/2 md:pr-8 mb-6 md:mb-0'>
              <img
                src='/executive-smiling.jpg'
                alt='Smiling executive'
                className='rounded-lg w-full h-auto'
              />
            </div>
            <div className='md:w-1/2'>
              <p className='text-lg mb-4 font-telegraf'>
                A modern üzleti környezetben elengedhetetlen a vezetők védelme a
                személyes felelősségre vonás kockázataival szemben. A D&O
                biztosítás segít Önnek:
              </p>
              <ul className='list-disc pl-5 space-y-2 font-interphases'>
                <li>Jogi védelem és szakértői támogatás biztosítása</li>
                <li>Személyes vagyon védelmének garantálása</li>
                <li>Nyugodt döntéshozatal lehetővé tétele</li>
                <li>Vonzóbb munkahely teremtése a vezetők számára</li>
                <li>A vállalat stabilitásának növelése</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className='py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-0 font-antonio'>
              KÉRJEN INGYENES
              <br />
              AJÁNLATOT!
            </h2>

            <div className='flex flex-col md:flex-row gap-4'>
              <a
                href='#contact'
                className='bg-light-blue hover:bg-highlight-blue text-white py-4 px-8 rounded-full flex items-center justify-between min-w-[320px] cta-button'
              >
                <span className='font-antonio text-lg'>
                  INGYENES AJÁNLATOT KÉREK
                </span>
                <span className='text-2xl arrow'>&raquo;</span>
              </a>
              <a
                href='#contact'
                className='bg-light-blue hover:bg-highlight-blue text-white py-4 px-8 rounded-full flex items-center justify-between min-w-[320px] cta-button'
              >
                <span className='font-antonio text-lg'>
                  KÉRDÉSEM VAN / KONZULTÁCIÓT KÉREK!
                </span>
                <span className='text-2xl arrow'>&raquo;</span>
              </a>
            </div>
          </div>

          <div className='mt-12'>
            <img
              src='/handshake-business.jpg'
              alt='Business handshake'
              className='w-full h-80 object-cover'
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-12 px-6 sm:px-12 lg:px-24 bg-primary-blue'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center font-antonio'>
            KÉRDÉSE VAN?
          </h2>
          <h3 className='text-2xl font-bold mb-12 text-center font-antonio'>
            ÍME A LEGGYAKORIBB KÉRDÉSEK A D&O BIZTOSÍTÁSRÓL
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <div className='border border-secondary-blue p-6 rounded-lg faq-card'>
              <h3 className='text-xl font-semibold text-center mb-4 font-antonio'>
                MI AZ A PTK. SZERINTI ÜGYVEZETŐI FELELŐSSÉG, ÉRTHETŐEN?
              </h3>
            </div>

            <div className='border border-secondary-blue p-6 rounded-lg faq-card'>
              <h3 className='text-xl font-semibold text-center mb-4 font-antonio'>
                MIBEN MÁS EZ, MINT A CÉGÜNK 'NORMÁL' FELELŐSSÉGBIZTOSÍTÁSA?
              </h3>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <div className='border border-secondary-blue p-6 rounded-lg faq-card'>
              <h3 className='text-xl font-semibold text-center mb-4 font-antonio'>
                MI TÖRTÉNIK, HA ELHAGYOM A VEZETŐI POZÍCIÓT? VÉGE A
                FELELŐSSÉGEMNEK?
              </h3>
            </div>

            <div className='border border-secondary-blue p-6 rounded-lg faq-card'>
              <h3 className='text-xl font-semibold text-center mb-4 font-antonio'>
                MIKOR NEM FIZET A D&O BIZTOSÍTÁS?
              </h3>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='border border-secondary-blue p-6 rounded-lg w-full md:w-1/2 faq-card'>
              <h3 className='text-xl font-semibold text-center mb-4 font-antonio'>
                MI TÖRTÉNIK, HA FELSZÁMOLÁS ALÁ KERÜL A CÉG?
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id='contact'
        className='py-12 px-6 sm:px-12 lg:px-24 bg-secondary-blue'
      >
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold mb-6 text-center font-antonio'>
            KÉRJEN INGYENES AJÁNLATOT!
          </h2>
          <form className='bg-primary-blue p-8 rounded-lg shadow-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-1 font-telegraf'
                >
                  Név
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf'
                  placeholder='Teljes neve'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-1 font-telegraf'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf'
                  placeholder='Email címe'
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium mb-1 font-telegraf'
                >
                  Telefonszám
                </label>
                <input
                  type='tel'
                  id='phone'
                  className='w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf'
                  placeholder='+36 XX XXX XXXX'
                />
              </div>
              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium mb-1 font-telegraf'
                >
                  Cég
                </label>
                <input
                  type='text'
                  id='company'
                  className='w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf'
                  placeholder='Cég neve'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block text-sm font-medium mb-1 font-telegraf'
              >
                Üzenet
              </label>
              <textarea
                id='message'
                rows={4}
                className='w-full p-3 border border-light-blue rounded-lg bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf'
                placeholder='Üzenete itt...'
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-highlight-blue hover:bg-light-blue text-white py-3 px-6 rounded-lg font-medium text-lg font-antonio cta-button'
              >
                AJÁNLATKÉRÉS KÜLDÉSE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
