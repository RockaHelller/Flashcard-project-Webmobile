import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import FlashCards from "./pages/FlashCards";
import React from 'react';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter basename="Flashcard-project-Webmobile">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/flashcards" element={<FlashCards />} />
          </Route>
        </Routes>
      </ BrowserRouter>
    </>
  );
}

export default App;
