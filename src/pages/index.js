import React from 'react';
import { Layout, Hero, Work, About } from '../components/index';

const index = () => {
  return (
    <Layout>
      <Hero />
      <Work />
      <About />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default index;

export const Head = () => <title>Home Page</title>;
