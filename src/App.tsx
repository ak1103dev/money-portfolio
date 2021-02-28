import React from 'react';
import Layout from './components/Layout'
import Portfolio from './pages/Portfolio'

const App = (): JSX.Element => {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  );
}

export default App;
