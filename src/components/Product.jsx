import React from "react";
import About1 from "../assets/about1.png";
import BackImg from "../assets/banner1.png";
import Border from "../assets/productb.png";

const Product = ({ onClickBtn }) => {
  return (
    <>
      <div className="products">
        <div className="product1">
          <img src={About1} alt="ab1" className="product_side_img" />
          <h3 className="product_text"> Our Product</h3>

          <img src={About1} alt="ab1" className="product_side_img" />
        </div>
        <div className="product_cards">
          <div className="product_card">
            <img src={BackImg} alt="prdo" className="product_card_image" />
            <div className="card">
              <p className="product_card_name">Raju Rassimbomb</p>
              <button onClick={onClickBtn} className="product_card_btn">
                Quik View
              </button>
            </div>
          </div>

          <div className="product_card">
            <img src={BackImg} alt="prdo" className="product_card_image" />
            <div className="card">
              <p className="product_card_name">Ladiyon ki Rani Chani</p>
              <button onClick={onClickBtn} className="product_card_btn">
                Quik View
              </button>
            </div>
          </div>
        </div>
        <div className="prduct_bottom_border">
          <img src={Border} alt="abt1" className="product_bottom_img" />
        </div>
      </div>
    </>
  );
};

export default Product;
