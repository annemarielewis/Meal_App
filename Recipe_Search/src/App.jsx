import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main";
import Header from './components/Header'

function App() {
  return (
    <div className="outer">
      <Header></Header>
      <Main />
    </div>
  );
}

export default App;
