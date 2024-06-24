import React, { useState } from "react";
import Dotted from "../assets/dotted.png";
import { RxCross2 } from "react-icons/rx";
import Star from "../assets/star.png";

const Modal = ({ isOpen, onClose, product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!isOpen) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <button className="close_button" onClick={onClose}>
          <RxCross2 />
        </button>
        <div className="model_section">
          <div className="modal_left">
            <img src={selectedImage} alt="Selected" className="main_image" />
            <div className="thumbnail_container">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${
                    selectedImage === image ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
          <div className="modal_right">
            <h3 className="model_right_product_name">{product.name}</h3>
            <p className="model_right_product_mrp">MRP :</p>
            <p className="model_right_prduct_price">{product.price}</p>
            <img src={Dotted} alt="" className="dotted_imag" />
            <div>
              <p className="product_details_heading">
                {product.description_heading}
              </p>
              <p className="product_details_paragraph">{product.description}</p>
            </div>
            {/* <p>{product.details}</p> */}
            <img src={Dotted} alt="" className="dotted_imag" />

            <div>
              <p className="product_details_heading">
                {product.product_content}
              </p>
              <div className="">
                <div className="start_image_content">
                  <img src={Star} alt="star" className="star_image" />{" "}
                  <p className="product_details_paragraph">
                    {product.product_content_details1}
                  </p>
                </div>
                <div className="start_image_content">
                  <img src={Star} alt="star" className="star_image" />{" "}
                  <p className="product_details_paragraph">
                    {product.product_content_details2}
                  </p>
                </div>
                <div className="start_image_content">
                  <img src={Star} alt="star" className="star_image" />{" "}
                  <p className="product_details_paragraph">
                    {product.product_content_details3}
                  </p>
                </div>
              </div>
            </div>
            <img src={Dotted} alt="" className="dotted_imag" />
            <div>
              <p className="product_details_heading">{product.shipping_time}</p>
              <p className="product_details_paragraph">
                {product.shipping_details}
              </p>
            </div>
            <button className="choose_now_button">Choose Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
