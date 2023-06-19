import React from "react";
import "../Cart/Cart.css";
const Cart = () => {
  return <div className="cart">
    <div className="container_cart">
        <div className="head">
        <h2>Your cart</h2>
        </div>
      <div id="border"></div>
        <div className="content">
          <div className="cart_item">
            <img src="https://images.wallpaperscraft.com/image/single/cube_figure_dark_142157_300x225.jpg"/>
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
};

export default Cart;


