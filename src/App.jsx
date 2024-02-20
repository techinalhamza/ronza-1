import { useState } from "react";
import "./App.css";
import Header from "./componants/header/Header";
import Nav from "./componants/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
