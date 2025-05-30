"use client";

import { useEffect, useState } from "react";

const ScrollControls = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  // Define navbar height offset
  const NAVBAR_OFFSET = 80; // adjust based on your navbar height

  useEffect(() => {
    // Get all sections
    const sectionElements = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    setSections(sectionElements);

    // Set initial active section
    const checkActiveSection = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (activeSection !== i) {
            setActiveSection(i);

            // Add active class to current section and remove from others
            sectionElements.forEach((sec, idx) => {
              if (idx === i) {
                sec.classList.add("active");
                sec.classList.remove("inactive-above", "inactive-below");
              } else if (idx < i) {
                sec.classList.add("inactive-above");
                sec.classList.remove("active", "inactive-below");
              } else {
                sec.classList.add("inactive-below");
                sec.classList.remove("active", "inactive-above");
              }
            });
          }
          break;
        }
      }
    };

    // Check active section on scroll
    window.addEventListener("scroll", checkActiveSection);

    // Initial check
    checkActiveSection();

    // Update section heights to match viewport
    const updateSectionHeights = () => {
      sectionElements.forEach((section) => {
        // Add padding top to account for navbar
        section.style.minHeight = `${window.innerHeight}px`;
        section.style.paddingTop = `${NAVBAR_OFFSET}px`;
      });
    };

    // Set initial heights
    updateSectionHeights();

    // Update heights on resize
    window.addEventListener("resize", updateSectionHeights);

    return () => {
      window.removeEventListener("scroll", checkActiveSection);
      window.removeEventListener("resize", updateSectionHeights);
    };
  }, [isScrolling, activeSection]);

  const scrollToSection = (direction: "up" | "down" | number) => {
    if (sections.length === 0 || isScrolling) return;

    let targetIndex;
    if (typeof direction === "number") {
      targetIndex = Math.max(0, Math.min(direction, sections.length - 1));
    } else if (direction === "down") {
      targetIndex = Math.min(activeSection + 1, sections.length - 1);
    } else {
      targetIndex = Math.max(activeSection - 1, 0);
    }

    if (targetIndex === activeSection) return;

    setIsScrolling(true);

    const targetSection = sections[targetIndex];

    // Smooth scroll with offset for navbar
    window.scrollTo({
      top: targetSection.offsetTop - NAVBAR_OFFSET,
      behavior: "smooth",
    });

    // Apply fancy animation class
    targetSection.classList.add("scroll-target");
    setTimeout(() => {
      targetSection.classList.remove("scroll-target");
    }, 1000);

    // Wait for scrolling to finish
    setTimeout(() => {
      setActiveSection(targetIndex);
      setIsScrolling(false);
    }, 1000);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      scrollToSection("down");
    } else if (e.key === "ArrowUp") {
      scrollToSection("up");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, sections, isScrolling]);

  return (
    <>
      {/* Section indicators (dots) */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
        {sections?.map((section, index) => (
          <button
            key={section.id || index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none
              ${
                activeSection === index
                  ? "bg-highlight-blue scale-125 shadow-glow"
                  : "bg-white opacity-60 hover:opacity-100 hover:scale-110"
              }`}
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollControls;
