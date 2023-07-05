import React, { useEffect } from "react";
import "../Cart/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { calcSubPrice, calcTotalPrice } from "../../helpers/functions";
import { getCart } from "../../store/cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector((state) => state.cart.cart);
  console.log(products, totalPrice);

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

        {products?.map((item) => (
          <div className="content">
            <div className="cart_item">
              <img src={item.item.cardImageOne} />
              <div className="item_desc">
                <h2>{item.item.cardTitleOne}</h2>
              </div>
              <div className="cart_item_price">
                <h2>{item.item.cardPrice}$</h2>
              </div>
              <p onClick={() => deleteCartProduct(item.item.id)}>x</p>
            </div>
          </div>
        ))}

        <div id="border"></div>
        <div className="total">
          <p>Total:</p>
          <h2> {totalPrice} $</h2>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
