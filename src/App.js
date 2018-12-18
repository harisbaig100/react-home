import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Video from './components/Video';
import Grid from './components/Grid';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar></NavBar>
          <br />
          <Grid>
          </Grid>
          <br />
          <Card></Card>
          <br />
          <Video></Video>
          <Footer />
        </div>
        <div class="container">
        
        </div>
      </div>
    );
  }
}

export default App;
