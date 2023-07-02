import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import './App.css'
import Layout from "./Layout";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
