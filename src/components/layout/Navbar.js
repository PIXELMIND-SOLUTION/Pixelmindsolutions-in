import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP CONTACT BAR (DESKTOP ONLY) ================= */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block fixed top-0 w-full z-50 bg-gradient-to-r from-[#05c2b5] to-[#06cabc] text-white"
          >
            <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-sm">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <Mail size={14} /> hello@pixelmindsolutions.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} /> +91 98765 43210
                </span>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="font-semibold hover:underline"
              >
                Free Consultation →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 glass-effect shadow-lg"
            : "top-10 md:top-10 top-0 bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 sm:h-18 md:h-20">

            {/* LOGO WITH SHAPE */}
            <div className="relative flex items-center">
              {/* <div className="absolute -bottom-2 -left-6 w-36 h-12 sm:w-40 sm:h-14 bg-gradient-to-r from-[#05c2b5] to-[#06cabc] rounded-br-[40px] rounded-tl-[20px]" /> */}
              <Link to="/" className="relative z-10 flex items-center pl-2">
                <img
                  src="/logo.png"
                  alt="Pixelmindsolutions Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium transition-colors hover:text-[#06cabc] ${
                    location.pathname === link.path
                      ? "text-[#06cabc]"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#05c2b5] to-[#06cabc]"
                    />
                  )}
                </Link>
              ))}
              <button
                onClick={() => navigate("/getstarted")}
                className="px-6 py-2 bg-gradient-to-r from-[#05c2b5] to-[#06cabc] text-white font-semibold rounded-full shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-gray-700 dark:text-gray-300"
            >
              <Menu size={26} />
            </button>
          </div>

          {/* ANIMATED BOTTOM BORDER */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]">
            <motion.div
              className="h-full w-1/3 bg-gradient-to-r from-[#05c2b5] to-[#06cabc]"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-[85%] sm:w-[70%] max-w-sm h-full bg-white dark:bg-gray-900 z-50 shadow-xl flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
                <img src="/logo.png" alt="Logo" className="h-9" />
                <button onClick={() => setIsOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6 space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium transition ${
                      location.pathname === link.path
                        ? "text-[#06cabc]"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* CONTACT DETAILS (MOBILE ONLY) */}
              <div className="px-6 py-5 border-t border-gray-200 dark:border-gray-800 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Mail size={16} className="text-[#06cabc]" />
                  hello@pixelmindsolutions.com
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Phone size={16} className="text-[#06cabc]" />
                  +91 98765 43210
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/getstarted");
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#05c2b5] to-[#06cabc] text-white font-semibold rounded-lg"
                >
                  Get Started
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
