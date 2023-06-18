import React from "react";
import "../ProductCard/ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="myCard" onClick={() => navigate("/details")}>
        <div className="innerCard">
          <div className="frontSide">
            <img
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
              width={"190vw"}
              height={"182vh"}
              src="https://cdn.wbgames.com/media/502/conversions/thumb_1644443888-sized.jpg"
              alt="Harry"
            />
            <p>Harry Poter: Magik Awakened</p>
          </div>
          <div className="backSide">
            <img
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
              width={"190vw"}
              height={"199vh"}
              src="https://www.giantbomb.com/a/uploads/scale_medium/45/450707/3154683-73474972_107640597341999_4035494268515647488_n%20%281%29.jpg"
              alt="Harry"
            />
            <p> Price: 13.85$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
