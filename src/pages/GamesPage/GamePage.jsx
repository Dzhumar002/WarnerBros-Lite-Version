import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import "../GamesPage/GamePage.css";
import Carusel from "../../components/CaruselGames/Carusel";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../store/products/productsActions";
const GamePage = () => {
  // const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  return (
    <div>
      <div className="head__block">
        <Carusel />
      </div>

      <div className="products__block">
        <ProductList />
      </div>
    </div>
  );
};

export default GamePage;
