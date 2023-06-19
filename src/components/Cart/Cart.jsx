import React, { useEffect } from "react";
import "../Cart/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import { calcSubPrice, calcTotalPrice } from "../../helpers/functions";
const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = { products: [], totalPrice: 0 };
    }
    dispatch(getCart(cart));
  }, []);

  const { products, totalPrice } = useSelector((state) => state.cart.cart);
  console.log(products, totalPrice);

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  };

  return (
    <div className="cart">
      <div className="container_cart">
        <div className="head">
          <h2> Shopping Cart</h2>
        </div>
        <div id="border"></div>
        <div className="content">
          <div className="cart_item">
            <img src="https://images.wallpaperscraft.com/image/single/cube_figure_dark_142157_300x225.jpg" />
            <div className="item_desc">
              <h2>Lorem IPSUM</h2>
            </div>
            <div className="cart_item_price">
              <h2>Price of lorem ipsum $</h2>
            </div>
            <p>x</p>
          </div>
        </div>
        <div id="border"></div>
        <div className="total">
          <p>Total:</p>
          <h2> Total price $</h2>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
