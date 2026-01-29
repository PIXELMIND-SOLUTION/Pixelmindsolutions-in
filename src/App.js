import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./pages/ScrollToTop";

import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import SingleServicePage from "./pages/SingleService";
import Portfolio from "./pages/Portfolio";
import SinglePortfolioPage from "./pages/SinglePortfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetStartedPage from "./pages/GetStartedPage";

/* ================= Animated Routes Wrapper ================= */
const AnimatedRoutes = () => {
  const location = useLocation(); // ✅ FIX

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<SingleServicePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/:id"
            element={<SinglePortfolioPage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getstarted" element={<GetStartedPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      {/* ✅ Scroll reset on every route change */}
      <ScrollToTop />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
