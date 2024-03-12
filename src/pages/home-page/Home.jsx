import React, { useContext } from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "../../componants/catSlider/CatSlider";
import Banner from "../../componants/banner/Banner";
import { NavLink } from "react-bootstrap";
import "./Home.css";
import Product from "../../componants/product/Product";
import "../../componants/product/Product.css";
import banner4 from "../../assets/banner4.jpg";
import Slider from "react-slick";
import Foods from "../../componants/foods/Foods";
import { useProductContext } from "../../context/productContext";

function Home() {
  var settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "60px",
    adaptiveHeight: true,

    // fade: true,
  };
  const fName = useProductContext();
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <h1>{fName}</h1>
      <Banner />

      <div className="product-container  mt-8">
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
          <div className="product-box mt-8 flex items-center flex-wrap">
            <div className="item">
              <Product tag={"hot"} />
            </div>
            <div className="item">
              <Product tag={"new"} />
            </div>
            <div className="item">
              <Product tag={"top"} />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag={"sale"} />
            </div>
            <div className="item">
              <Product tag={"hot"} />
            </div>
            <div className="item">
              <Product tag={"sale"} />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag={"hot"} />
            </div>
            <div className="item">
              <Product tag={"top"} />
            </div>
          </div>
        </div>
      </div>
      {/* -------------------- daily sales section-------------------------- */}
      <div className="sales-container mt-8">
        <div className="container-fluid">
          <div className="heading-content flex items-center ">
            <div className="hd">daily best deals</div>
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
              </ul>
            </div>
          </div>
          <div className="row mt-8">
            <div className="col-2">
              <div className="img w-[20rem] h-[28rem] z-10 relative rou">
                <img src={banner4} alt="" className="h-full" />
              </div>
            </div>
            <div className="col-10 product-box ">
              <Slider {...settings}>
                <div className="item ">
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------- foods section-------------------------- */}
      <div className="food-container  my-8">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Foods title={"Top Selling"} />
            </div>
            <div className="col-3">
              <Foods title={"Trending Products"} />
            </div>
            <div className="col-3">
              <Foods title={"Recently added"} />
            </div>
            <div className="col-3">
              <Foods title={"Top Rated"} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------footer banner section ---------------------- */}

      {/* ---------------------footer section ---------------------- */}
    </>
  );
}

export default Home;
