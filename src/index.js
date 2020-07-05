import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Form from './components/Form';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Header/>
    <Projects />
    <Form/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
