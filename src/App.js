import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Home from './pages/Home.js';
import History from './pages/History.js';
import Help from './pages/Help.js';
import superagent from 'superagent';

import './App.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
