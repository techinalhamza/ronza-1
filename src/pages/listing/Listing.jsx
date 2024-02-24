import React from "react";
import Sidebar from "../../componants/sidebar/Sidebar";
import "./Listing.css";

function ShopListing() {
  return (
    <>
      <div className="listing-container my-12">
        <div className="container-fluid">
          <div className="top-heading">
            <h1 className="text-5xl font-bold">Snack</h1>
            <ul>
              <li>home</li>
              <li>shop</li>
              <li>snack</li>
            </ul>
          </div>
          <div className="listing-content">
            <div className="row">
              <div className="col-3">
                <Sidebar />
              </div>
              <div className="col-9"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopListing;
