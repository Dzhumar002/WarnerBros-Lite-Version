import React from "react";
import "../Navbar/Navbar.css";
import Search from "../NavSearch/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../store/auth/authActions";
import { clearInputs } from "../../store/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

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
            <li className="nav__home" onClick={() => navigate("/")}>
              HOME
            </li>
            <li onClick={() => navigate("/games")} className="nav__games">
              GAMES
            </li>
            <li className="nav__news">NEWS</li>
            <li className="nav__careers" onClick={() => navigate("/cart")}>
              CART
            </li>
            <li className="nav__paly" onClick={() => navigate("/playtest")}>
              PLAYTEST
            </li>
          </ul>
        </div>

        <div className="nav__inp">
          <Search />

          {user ? (
            <>
              <p
                className="login"
                onClick={() => {
                  dispatch(handleLogout());
                  dispatch(clearInputs());
                  navigate("/");
                }}
              >
                Log out
              </p>
            </>
          ) : (
            <>
              <p
                className="login"
                onClick={() => {
                  navigate("/login");
                  dispatch(clearInputs());
                }}
              >
                Log in
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
