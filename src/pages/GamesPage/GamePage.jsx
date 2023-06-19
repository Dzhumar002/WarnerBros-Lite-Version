import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import "../GamesPage/GamePage.css";
import Carusel from "../../components/CaruselGames/CaruselGame";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
const GamePage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [page, setPage] = useState(1);

  const itemsPerPage = 20;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }
  console.log(currentData);
  const handleChange = (_, p) => {
    setPage(p);
  };
  return (
    <div>
      <div className="head__block">
        <Carusel />
      </div>

      <div className="products__block">
        <ProductList currentData={currentData} />
        <div className="pagination__block">
          <Pagination count={count} page={page} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
