import React from "react";
import "../ProductCard/ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="myCard" onClick={() => navigate("/details/" + item.id)}>
        <div className="innerCard">
          <div className="frontSide">
            <img
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
              width={"190vw"}
              height={"209vh"}
              src={item.cardImageOne}
              alt="Harry"
            />
            <p>{item.cardTitleOne}</p>
          </div>
          <div className="backSide">
            <img
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
              width={"190vw"}
              height={"209vh"}
              src={item.cardImageTwo}
              alt="Harry"
            />
            <p>{item.cardPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
