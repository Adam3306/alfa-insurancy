"use client";

import { useEffect, useState, useCallback } from "react";

export default function ScrollControls() {
  const [activeSection, setActiveSection] = useState("");

  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    // Performance optimization: use requestAnimationFrame to limit calculations
    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section[id]");

      let current = "";

      sections.forEach((section) => {
        const sectionEl = section as HTMLElement;
        const sectionHeight = sectionEl.offsetHeight;
        const sectionTop = sectionEl.offsetTop - 100;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = sectionEl.getAttribute("id") || "";

          // Add active class to current section and inactive class to others
          sections.forEach((s) => {
            const sEl = s as HTMLElement;
            const sId = sEl.getAttribute("id") || "";
            const sTop = sEl.offsetTop;

            if (sId === current) {
              sEl.classList.add("active");
              sEl.classList.remove("inactive-above", "inactive-below");
            } else if (sTop < scrollPosition) {
              sEl.classList.add("inactive-above");
              sEl.classList.remove("active", "inactive-below");
            } else {
              sEl.classList.add("inactive-below");
              sEl.classList.remove("active", "inactive-above");
            }
          });
        }
      });

      setActiveSection(current);
    });
  }, []);

  useEffect(() => {
    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Get previous and next section IDs
  const getSiblingSection = (direction: "prev" | "next") => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const currentIndex = sections.findIndex(
      (section) => section.getAttribute("id") === activeSection
    );

    if (direction === "prev" && currentIndex > 0) {
      return sections[currentIndex - 1].getAttribute("id") || "";
    }

    if (direction === "next" && currentIndex < sections.length - 1) {
      return sections[currentIndex + 1].getAttribute("id") || "";
    }

    return "";
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        const nextSection = getSiblingSection("next");
        if (nextSection) {
          e.preventDefault();
          scrollToSection(nextSection);
        }
      } else if (e.key === "ArrowUp") {
        const prevSection = getSiblingSection("prev");
        if (prevSection) {
          e.preventDefault();
          scrollToSection(prevSection);
        }
      }
    },
    [activeSection]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Only render section dots for the main sections (to avoid too many dots)
  const mainSections = [
    "hero",
    "risks",
    "areas",
    "about",
    "benefits",
    "faq",
    "free-quote",
  ];

  return (
    <>
      {/* Section dots navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-4">
          {mainSections.map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === sectionId
                  ? "bg-highlight-blue shadow-glow scale-125"
                  : "bg-gray-400 opacity-70 hover:opacity-100"
              }`}
              aria-label={`Scroll to ${sectionId} section`}
            />
          ))}
        </div>
      </div>

      {/* Scroll to explore indicator (first screen only) */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 text-white text-opacity-80 text-center transition-opacity duration-500 z-30 ${
          activeSection === "hero" ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="mb-2 text-sm font-antonio"> GÖRGESSEN TOVÁBB</p>
        <div className="w-6 h-10 border-2 border-white border-opacity-60 rounded-full mx-auto relative">
          <div className="absolute top-1 left-1/2 w-2 h-2 bg-white rounded-full animate-scroll-down transform -translate-x-1/2"></div>
        </div>
      </div>
    </>
  );
}
