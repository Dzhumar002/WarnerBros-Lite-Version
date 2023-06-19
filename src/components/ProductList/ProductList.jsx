import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductList/ProductList.css";
import Filter from "../FilterThing/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";

const ProductList = ({ currentData }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div className="filter__panel">
        <Filter />
      </div>

      <div id="list__block">
        {products ? (
          currentData().map((item) => <ProductCard item={item} key={item.id} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductList;
