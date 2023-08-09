import React from 'react';
import { About, Contact, Hero, Layout, SEO, Work } from '../components/index';

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

export const Head = () => <SEO />;
