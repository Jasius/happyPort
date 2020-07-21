import React from 'react';
import ReactDOM from 'react-dom';
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
    <Nav/>
    <Header/>
    <Projects />
    <Testimonials />
    <Form/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
