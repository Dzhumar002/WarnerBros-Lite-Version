import React, { useState } from "react";
import "../AddForm/AddForm.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../store/products/productsActions";
const AddForm = () => {
  const [cardImageOne, setCardImageOne] = useState("");
  const [cardTitleOne, setCardTitleOne] = useState("");
  const [cardImageTwo, setCardImageTwo] = useState("");
  const [cardPrice, setCardPrice] = useState("");
  const [productsDetailsImg, setproductsDetailsImg] = useState("");
  const [productDetailsLeftImg, setProductDetailsLeftImg] = useState("");
  const [neonText, setNeonText] = useState("");
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [minImageOne, setMinImageOne] = useState("");
  const [minImageTwo, setMinImageTwo] = useState("");
  const [minImagethree, setMinImageThree] = useState("");
  const [minImageFour, setMinImageFour] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProduct = (event) => {
    event.preventDefault();

    if (
      !cardImageOne.trim() ||
      !cardTitleOne.trim() ||
      !cardImageTwo.trim() ||
      !cardPrice.trim() ||
      !productDetailsLeftImg.trim() ||
      !productsDetailsImg.trim() ||
      !neonText.trim() ||
      !textOne.trim() ||
      !textTwo.trim() ||
      !minImageOne.trim() ||
      !minImageTwo.trim() ||
      !minImagethree.trim() ||
      !minImageFour.trim()
    ) {
      alert("заполните все поля");
    }
    let newProduct = {
      cardImageOne,
      cardTitleOne,
      cardImageTwo,
      cardPrice,
      productsDetailsImg,
      productDetailsLeftImg,
      neonText,
      textOne,
      textTwo,
      minImageOne,
      minImageTwo,
      minImagethree,
      minImageFour,
    };
    // console.log(newProduct);
    dispatch(addProduct(newProduct));
    navigate("/game");
  };

  return (
    <div>
      <div className="card__add">
        <div className="card2">
          <form className="form">
            <p id="heading"> Add new product</p>
            <div className="field">
              <input
                value={cardImageOne}
                onChange={(e) => setCardImageOne(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Card Image One"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                value={cardTitleOne}
                onChange={(e) => setCardTitleOne(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Card Title One"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                value={cardImageTwo}
                onChange={(e) => setCardImageTwo(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Card Image Two"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                value={cardPrice}
                onChange={(e) => setCardPrice(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Card Price"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                value={productsDetailsImg}
                onChange={(e) => setproductsDetailsImg(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details Main img"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                value={productDetailsLeftImg}
                onChange={(e) => setProductDetailsLeftImg(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details left img"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                value={neonText}
                onChange={(e) => setNeonText(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details Neon text"
                autoComplete="off"
              />
            </div>

            <div className="field">
              <input
                value={textOne}
                onChange={(e) => setTextOne(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Detail P one "
              />
            </div>
            <div className="field">
              <input
                value={textTwo}
                onChange={(e) => setTextTwo(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details P two"
              />
            </div>
            <div className="field">
              <input
                value={minImageOne}
                onChange={(e) => setMinImageOne(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details min Img 1"
              />
            </div>
            <div className="field">
              <input
                value={minImageTwo}
                onChange={(e) => setMinImageTwo(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details min Img 2"
              />
            </div>
            <div className="field">
              <input
                value={minImagethree}
                onChange={(e) => setMinImageThree(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details min Img 3"
              />
            </div>
            <div className="field">
              <input
                value={minImageFour}
                onChange={(e) => setMinImageFour(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Product Details min Img 4"
              />
            </div>
            <div className="btn">
              <button onClick={handleProduct} className="button1">
                add new
              </button>
              <button onClick={() => navigate("/game")} className="button2">
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
