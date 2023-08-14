import React from 'react';
import { About, Contact, Hero, Layout, SEO, Work } from '../components/index';

const index = () => {
  return (
    <Layout type='menu'>
      <Hero />
      <Work />
      <About />
      <Contact id='#contact' />
    </Layout>
  );
};

export default index;

export const Head = () => <SEO />;
