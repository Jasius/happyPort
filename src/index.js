import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Helmet } from "react-helmet";
import porfolioData from './assets/portfolioData.json'
import './index.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Form from './components/Form';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Router>
      <Nav />
      <Route exact path="/about">
        <Header />
      </Route>
      <Route exact path="/">
        <Header />
        <Projects />
        {porfolioData.testimonials.length !== 0 && <Testimonials />}
        <Form />
      </Route>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
