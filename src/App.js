import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import Cards from './components/Cards/Cards';
import GradientCards from './components/Cards/Gradient/GradientCards';
import Parallax from './components/Parallax/Parallax';
import About from './components/About/About';
import axios from './axios-orders';
import Aux from './hoc/Aux';
import './App.css';

class App extends Component {
	state = {
    resumeData: {},
    error: false
  }
  
  getResumeData(){
    axios
    .get("../../resumeData.json")
    .then(response => response.data)
    .then((data) => {
      this.setState({resumeData: data})
      console.log(this.state.resumeData)
    })
    .catch(error => {
      this.setState({error: true});
      console.log('Failed to fetch data successfully');
      console.log(error);
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render () {
    return (
      <Aux>
          <Layout>
            <Cards />
            <GradientCards />
            <Parallax />
            <About />
            <Contact data={this.state.resumeData}/>
          </Layout>
      </Aux>
    );
  }
}

export default App;
