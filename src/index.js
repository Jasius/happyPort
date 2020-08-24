import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Helmet } from "react-helmet";
import portfolioData from './assets/portfolioData.json'
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
      <title>{portfolioData.profile.firstName} {portfolioData.profile.lastName} - Portfolio</title>
      <meta content={portfolioData.profile.firstName + " " + portfolioData.profile.lastName + " - Portfolio"} property="og:title" />
      <meta name="Description" content={portfolioData.profile.websiteDescription} property="og:description" />
    </Helmet>
    <Router>
      <Nav />
      <Route exact path="/about">
        <Header />
      </Route>
      <Route exact path="/">
        <Header />
        <Projects />
        {portfolioData.testimonials.length !== 0 && <Testimonials />}
        <Form />
      </Route>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
