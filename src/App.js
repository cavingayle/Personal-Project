import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/global/Nav/Nav';
import FooterNav from './components/global/FooterNav/FooterNav';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {

  // componentDidMount(){
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //   });
  // }

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
