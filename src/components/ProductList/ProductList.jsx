import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductList/ProductList.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../store/products/productsActions";

const ProductList = () => {
  // const { products } = useSelector((state) => state.products);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  return (
    <div>
      <div className="filter__panel">
        <span>Some filters things</span>
      </div>

      <div id="list__block">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
