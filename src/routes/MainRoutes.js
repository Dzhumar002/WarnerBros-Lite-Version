import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPages/NotFoundPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "*", element: <NotFoundPage />, id: 2 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        <Route />
      </Routes>
    </>
  );
};

export default MainRoutes;
