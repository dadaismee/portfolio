import React from 'react';
import { Layout, Hero, Work, About, Contact, SEO } from '../components/index';

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
