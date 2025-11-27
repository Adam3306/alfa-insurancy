import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

export const metadata: Metadata = {
  title:
    "Alpha Trust Insurance Kft. | Ügyvezetői Felelősségbiztosítás és Céges Biztosítások",
  description:
    "Független biztosítási alkusz Budapesten. D&O biztosítás, céges egészségbiztosítás, társasházbiztosítás. Szakértő tanácsadás és piaci összehasonlítás. Ingyenes ajánlatkérés!",
  keywords: [
    "D&O biztosítás",
    "ügyvezetői felelősségbiztosítás",
    "céges egészségbiztosítás",
    "társasházbiztosítás",
    "biztosítási alkusz Budapest",
    "független biztosítási tanácsadó",
    "vállalati biztosítások",
    "csoportos egészségbiztosítás",
    "üzemzünet biztosítás",
    "építési szerelési biztosítás",
  ],
  authors: [{ name: "Szegő Zsombor" }],
  creator: "Alpha Trust Insurance Kft.",
  publisher: "Alpha Trust Insurance Kft.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alphabiztositas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alpha Trust Insurance Kft. | Ügyvezetői Felelősségbiztosítás",
    description:
      "Független biztosítási alkusz Budapesten. D&O biztosítás, céges egészségbiztosítás, társasházbiztosítás. Szakértő tanácsadás és piaci összehasonlítás.",
    url: "https://alphabiztositas.com",
    siteName: "Alpha Trust Insurance Kft.",
    images: [
      {
        url: "/alpha-insurance-logo.png",
        width: 1200,
        height: 630,
        alt: "Alpha Trust Insurance Kft. logó",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Trust Insurance Kft. | Ügyvezetői Felelősségbiztosítás",
    description:
      "Független biztosítási alkusz Budapesten. D&O biztosítás, céges egészségbiztosítás, társasházbiztosítás.",
    images: ["/alpha-insurance-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NDTSSFG2');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Critical Fonts - Preload only the most important ones */}
        <link
          rel="preload"
          href="/fonts/Telegraf-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Antonio-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Non-critical fonts - Load with font-display: swap */}
        <link
          rel="preload"
          href="/fonts/Antonio-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Telegraf-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TTInterphases-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="//favicon.ico" sizes="any" />

        {/* Resource Hints */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "Alpha Trust Insurance Kft.",
              "description": "Független biztosítási alkusz Budapesten. D&O biztosítás, céges egészségbiztosítás, társasházbiztosítás.",
              "url": "https://alphabiztositas.com",
              "logo": "https://alphabiztositas.com/alpha-insurance-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+36-30-18-18-047",
                "contactType": "customer service",
                "availableLanguage": "Hungarian"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "HU",
                "addressLocality": "Budapest"
              },
              "sameAs": ["https://alphabiztositas.com"],
              "serviceArea": {
                "@type": "Country",
                "name": "Hungary"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Biztosítási szolgáltatások",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "D&O biztosítás",
                      "description": "Ügyvezetői felelősségbiztosítás"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Céges egészségbiztosítás",
                      "description": "Csoportos egészségbiztosítás vállalatoknak"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Társasházbiztosítás",
                      "description": "Társasházak biztosítása"
                    }
                  }
                ]
              }
            }`,
          }}
        />
      </head>
      <body className="antialiased font-telegraf">
        {/* Critical CSS inline for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .font-telegraf { font-family: 'Telegraf', system-ui, -apple-system, sans-serif; }
            .font-antonio { font-family: 'Antonio', system-ui, -apple-system, sans-serif; }
            .bg-primary-blue { background-color: #0C1D3D; }
            .bg-secondary-blue { background-color: #1A2B4A; }
            .text-highlight-blue { color: #E2C044; }
            .text-white { color: #ffffff; }
          `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDTSSFG2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <div className="pt-16">{children}</div>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
