import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY > 79) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*TOGGLE MENU*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <img
          src={logo}
          alt=""
        />

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                className="nav__link"
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className="nav__link"
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
