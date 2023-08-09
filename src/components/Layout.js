import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from '../components/index';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{
          type: 'spring',
          mass: 0.5,
          stiffness: 100,
          duration: 0.15,
        }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
