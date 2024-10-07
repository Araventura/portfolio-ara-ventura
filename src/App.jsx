import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";

import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;
