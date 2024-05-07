import { useState } from "react";
import { HashRouter,Route,Routes } from "react-router-dom";
// import componets
import Header from './assets/components/header/Header'
import Home from "./assets/pages/home";

function App() {
  return <div className=" bg-red-500 text-blue-500">
    <HashRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home mode="wait" />} />
      </Routes>
    </HashRouter>
  </div>;
}

export default App;
