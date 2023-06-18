import React, { useEffect, useState } from "react";
import "../AddForm/AddForm.css";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  getOneProduct,
} from "../../store/products/productsActions";
const EditForm = ({ productDetails }) => {
  const [cardImageOne, setCardImageOne] = useState(productDetails.cardImageOne);
  const [cardTitleOne, setCardTitleOne] = useState(productDetails.cardTitleOne);
  const [cardImageTwo, setCardImageTwo] = useState(productDetails.cardImageTwo);
  const [cardPrice, setCardPrice] = useState(productDetails.cardPrice);
  const [productsDetailsImg, setproductsDetailsImg] = useState(
    productDetails.productsDetailsImg
  );
  const [productDetailsLeftImg, setProductDetailsLeftImg] = useState(
    productDetails.productDetailsLeftImg
  );
  const [neonText, setNeonText] = useState(productDetails.neonText);
  const [textOne, setTextOne] = useState(productDetails.textOne);
  const [textTwo, setTextTwo] = useState(productDetails.textTwo);
  const [minImageOne, setMinImageOne] = useState(productDetails.minImageOne);
  const [minImageTwo, setMinImageTwo] = useState(productDetails.minImageTwo);
  const [minImagethree, setMinImageThree] = useState(
    productDetails.minImagethree
  );
  const [minImageFour, setMinImageFour] = useState(productDetails.minImageFour);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  useEffect(() => {
    setCardImageOne(productDetails.cardImageOne);
    setCardTitleOne(productDetails.cardTitleOne);
    setCardImageTwo(productDetails.cardImageTwo);
    setCardPrice(productDetails.cardPrice);
    setproductsDetailsImg(productDetails.productsDetailsImg);
    setProductDetailsLeftImg(productDetails.productDetailsLeftImg);
    setNeonText(productDetails.neonText);
    setTextOne(productDetails.textOne);
    setTextTwo(productDetails.textTwo);
    setMinImageOne(productDetails.minImageOne);
    setMinImageTwo(productDetails.minImageTwo);
    setMinImageThree(productDetails.minImagethree);
    setMinImageFour(productDetails.setMinImageFour);
  }, [productDetails]);

  console.log(productDetails);
  const handleEdit = (event) => {
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
    let editedProduct = {
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
    dispatch(editProduct(editedProduct));
    // setCardImageOne("");
    // setCardTitleOne("");
    // setCardImageTwo("");
    // setCardPrice("");
    // setproductsDetailsImg("");
    // setProductDetailsLeftImg("");
    // setNeonText("");
    // setTextOne("");
    // setTextTwo("");
    // setMinImageOne("");
    // setMinImageTwo("");
    // setMinImageThree("");
    // setMinImageFour("");
    navigate("/game");
  };

  return (
    <div>
      <div className="card__add">
        <div className="card2">
          <form className="form">
            <p id="heading"> Edit Product</p>
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
              <button onClick={handleEdit} className="button1">
                save Edit changes
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

export default EditForm;
