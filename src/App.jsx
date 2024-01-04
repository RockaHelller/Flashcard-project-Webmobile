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
        <Routes>
          <Route element={<Layout />}>
            <Route path="/Flashcard-project-Webmobile/" element={<Home />} />
            <Route path="/Flashcard-project-Webmobile/contact" element={<Contact />} />
            <Route path="/Flashcard-project-Webmobile/flashcards" element={<FlashCards />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
