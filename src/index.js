import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import LayoutMain from './layout/LayoutMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <LayoutMain />
    <App />
    <Footer />
  </>
);

