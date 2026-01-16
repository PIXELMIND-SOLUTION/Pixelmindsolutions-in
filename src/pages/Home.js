import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;