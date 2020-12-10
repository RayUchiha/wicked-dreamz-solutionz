import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends Component {
    render () {
        return (
          <div>
            <Layout>
              <h2>Wicked Dreamz</h2>
              <Contact />
            </Layout>
          </div>
        );
    }
}

export default App;
