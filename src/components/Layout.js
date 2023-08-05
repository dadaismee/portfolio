import React from 'react';
import { Header, Footer } from '../components/index';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
