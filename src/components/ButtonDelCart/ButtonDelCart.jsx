import React from "react";
import "../ButtonDelCart/ButtonDelCart.css";
const ButtonDelCart = () => {
  return (
    <div>
      <button data-text="Awesome" className="button__delCart">
        <span className="actual-text">&nbsp;delete&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp; cart&nbsp;
        </span>
      </button>
    </div>
  );
};

export default ButtonDelCart;
