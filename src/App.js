import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import Cards from './components/Cards/Cards';
import Parallax from './components/Parallax/Parallax';
import Aux from './hoc/Aux';
import './App.css';

class App extends Component {
  render () {
    return (
      <Aux>
          <Layout>
            <Cards />
            <Parallax />
            <Contact />
          </Layout>
      </Aux>
    );
  }
}

export default App;
