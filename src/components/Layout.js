import { motion } from 'framer-motion';
import React from 'react';
import { Footer, Header } from '../components/index';
import './layout.css';

const Layout = ({ children, type, pages, url }) => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{
          type: 'spring',
          mass: 0.5,
          stiffness: 90,
          duration: 0.15,
        }}>
        <Header type={type} pages={pages} url={url} />
      </motion.header>

      <motion.main
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{
          type: 'spring',
          mass: 0.75,
          stiffness: 90,
          duration: 0.15,
        }}>
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
