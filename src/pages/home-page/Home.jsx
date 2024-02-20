import React from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "../../componants/catSlider/CatSlider";
import Banner from "../../componants/banner/Banner";
import { NavLink } from "react-bootstrap";
import "./Home.css";
import Product from "../../componants/product/Product";
function Home() {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />

      <div className="product-container mb-56 mt-8">
        <div className="container-fluid">
          <div className="heading-content flex items-center ">
            <div className="hd">Popular products</div>
            <div className="filter-tabs ml-auto">
              <ul className="flex gap-">
                <li className="active">
                  <NavLink>all</NavLink>
                </li>
                <li>
                  <NavLink>Milks & Dairies</NavLink>
                </li>
                <li>
                  <NavLink>Coffes & Teas</NavLink>
                </li>
                <li>
                  <NavLink>Pet Foods</NavLink>
                </li>
                <li>
                  <NavLink>Meats</NavLink>
                </li>
                <li>
                  <NavLink>Vegetables</NavLink>
                </li>
                <li>
                  <NavLink>Fruits</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-box mt-8 flex items-center">
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
