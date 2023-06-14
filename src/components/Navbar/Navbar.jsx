import React from "react";
import "../Navbar/Navbar.css";
import Search from "../NavSearch/Search";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar__container">
        <div className="nav__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Warner_Bros._Games.svg"
            alt="logo"
            height={"90vh"}
            onClick={() => navigate("/")}
          />
        </div>

        <div className="nav__list">
          <ul>
            <li className="nav__home">HOME</li>
            <li className="nav__games">GAMES</li>
            <li className="nav__news">NEWS</li>
            <li className="nav__careers">CAREERS</li>
            <li className="nav__paly">PLAYTEST</li>
          </ul>
        </div>

        <div className="nav__inp">
          <Search />
          <p className="login" onClick={() => navigate("/login")}>
            Log In
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
