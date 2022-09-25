//React Dependency Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS styles
import './index.css';

//Imported pages to the router
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Game from "./pages/Game"
import Explore from "./pages/Explore"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="play" element={<Game/>} />
          <Route path="explore" element={<Explore/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
