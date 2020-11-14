import React from "react";
import {BrowserRouter ,Route,Link}from "react-router-dom";
import './App.css';
import './props.css';
import Homepage from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  return (
<BrowserRouter>
<Header />
<Route path="/" component={Homepage} />
<Footer />
</BrowserRouter>
  );
}

export default App;
