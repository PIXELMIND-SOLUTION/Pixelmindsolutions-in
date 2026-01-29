import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

/* ================= Navigator Config ================= */
const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "portfolio", label: "Work" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative">
      {/* ===== Navigator ===== */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-3"
            >
              {/* Dot */}
              <span
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary-600 scale-125 shadow-lg shadow-primary-500/50"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />

              {/* Label */}
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0 text-primary-600"
                    : "opacity-0 -translate-x-2 text-gray-500 group-hover:opacity-80"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* ===== Sections ===== */}
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
