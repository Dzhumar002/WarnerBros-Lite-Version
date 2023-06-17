import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPages/NotFoundPage";
import Login from "../pages/LoginPage/Login";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import GamePage from "../pages/GamesPage/GamePage";
import ProductDetails from "../pages/ProductDetailsPages/ProductDetails";
import Admin from "../pages/AdminPage/Admin";
import PlayTestPage from "../pages/PlayTest/PlayTestPage";
import CartPage from "../pages/CartPage/CartPage";
import { ADMIN } from "../helpers/consts";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/games", element: <GamePage />, id: 2 },
    { link: "/details", element: <ProductDetails />, id: 3 },
    { link: "/login", element: <Login />, id: 4 },
    { link: "/register", element: <RegisterPage />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
    { link: "/playtest", element: <PlayTestPage />, id: 7 },
    { link: "/cart", element: <CartPage />, id: 8 },
  ];

  const PRIVATE_ROUTES = [{ link: "/admin", element: <Admin />, id: 1 }];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user &&
          PRIVATE_ROUTES.map((item) => (
            <Route
              path={item.link}
              key={item.id}
              element={
                user === ADMIN ? item.element : <Navigate replace to="*" />
              }
            />
          ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
