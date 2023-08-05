import React from 'react';
import {
  Layout,
  Hero,
  Work,
  About,
  Contact,
  Footer,
} from '../components/index';

const index = () => {
  return (
    <Layout>
      <Hero />
      <Work />
      <About />
      <Contact />
    </Layout>
  );
};

export default index;

export const Head = () => <title>V--S | Designer and creative coder</title>;
