"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { initializeTracking } from "../utils/tracker";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if consent cookie already exists
    const consentGiven = Cookies.get("cookie-consent");
    if (!consentGiven) {
      setShowConsent(true);
    } else if (consentGiven === "true") {
      // If consent is already given, initialize tracking
      initializeTracking();
    }
  }, []);

  const acceptAllCookies = () => {
    // Set consent cookie (expires in 365 days)
    Cookies.set("cookie-consent", "true", { expires: 365 });

    // Set analytics cookies
    Cookies.set("allow-analytics", "true", { expires: 365 });
    Cookies.set("allow-marketing", "true", { expires: 365 });

    // Initialize tracking
    initializeTracking();

    setShowConsent(false);
  };

  const acceptEssentialCookies = () => {
    // Set only essential cookies
    Cookies.set("cookie-consent", "essential", { expires: 365 });

    // Remove any existing analytics/marketing cookies
    Cookies.remove("allow-analytics");
    Cookies.remove("allow-marketing");
    Cookies.remove("user-id");

    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary-blue border-t border-light-blue z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-grow pr-4">
            <p className="font-telegraf text-sm md:text-base mb-2">
              Ez a weboldal cookie-kat használ a felhasználói élmény javítása és
              a látogatók nyomon követése érdekében. A &quot;Minden cookie
              elfogadása&quot; gombra kattintva hozzájárul a sütik
              használatához.
            </p>
            <p className="font-telegraf text-sm">
              <Link
                href="/cookie"
                className="text-light-blue underline hover:text-highlight-blue"
              >
                További információk a Cookie Szabályzatban
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={acceptEssentialCookies}
              className="px-4 py-2 border border-light-blue text-white hover:bg-light-blue/20 transition text-sm md:text-base rounded-md"
            >
              Csak alapvető cookie-k
            </button>
            <button
              onClick={acceptAllCookies}
              className="px-4 py-2 bg-highlight-blue text-white hover:bg-highlight-blue/80 transition text-sm md:text-base rounded-md"
            >
              Minden cookie elfogadása
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
