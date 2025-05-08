import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./pages/Hero";
import { Route, Routes } from "react-router-dom";
import Nav from "./ui/Nav";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>

  );
}

export default App;
