import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu";
import "./header.css";
import React from 'react';


const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav
        className={`navbar ${
          location.pathname == "/Flashcard-project-Webmobile/contact" || location.pathname == "/Flashcard-project-Webmobile/flashcards"
            ? "fixed"
            : ""
        }`}
      >
        <div className="max-width">
          <div className="logo">
            <Link to={"/Flashcard-project-Webmobile/"}>
              Web<span>Flow</span>
            </Link>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
