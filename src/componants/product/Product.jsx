import React from "react";
import product1 from "../../assets/product1.jpg";
import { Rating } from "@mui/material";
function Product() {
  return (
    <>
      <div className="product-container">
        <div className="container-fluid">
          <div className="product-row fle">
            <div className="product-img px-6 py-6">
              <img src={product1} alt="" className="w-full" />
            </div>
            <div className="product-info">
              <div className="brand">snacks</div>
              <h1>Blue Diamond Almonds Lightly Salted Vegetables</h1>
              <Rating />
              <div className="vendor">By StarKist</div>
              <div className="price-cart"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
