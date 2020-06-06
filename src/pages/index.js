import React from 'react';
import { Link, navigate } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    <Link to="/sample" state={{ key1: 'value1' }}>
      Go to My Awesome Sample Page
    </Link>
    <br />
    <button onClick={e => navigate('/sample', { state: { key1: 'value1' } })}>
      Go to My Awesome Sample Page
    </button>
  </Layout>
);

export default IndexPage;
