import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
     <div
      style={{
        minHeight: "100vh",
        position: "relative",
        margin: "0 auto",
        width:"80%",
        display: "block",
        flexDirection: "column",
        backgroundColor: "rgb(253, 253, 253)",
      }}
     >
     <Header />
     <About />
     <Skills />
     <Projects />
     <Contact />
   </div>
  );
}

export default App;