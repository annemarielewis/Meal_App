import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main";
import Header from './components/Header'
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <div className="outer">
      <Header></Header>
      <Main />
      <Footer></Footer>
    </div>
  );
}

export default App;
