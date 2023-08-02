import React from 'react';
import styled from 'styled-components';
import { Layout, Header, Hero } from '../components/index';

const index = () => {
  return (
    <Layout>
      <Hero />
      {/* <Work />
      <About />
      <Contact />
      <Footer /> */}
    </Layout>
  );
};

export default index;

export const Head = () => <title>Home Page</title>;
