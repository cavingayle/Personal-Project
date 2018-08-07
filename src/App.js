import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/global/Nav/Nav';
import FooterNav from './components/global/FooterNav/FooterNav';
import 'aos/dist/aos.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        { routes }
        <FooterNav />
      </div>
    );
  }
}

export default App;
