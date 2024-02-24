import React from "react";
import { categoryData } from "../categoryData";
import cat1 from "../../assets/201.svg";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="container-fluid">
          <div className="box mb-8">
            <div className="hd border-b-2 pb-8">category</div>
            <div className="card max-h-[40vh] overflow-hidden overflow-y-scroll">
              {categoryData.map((val) => {
                return (
                  <>
                    <div className="cat-list flex items-center justify-between mt-4 mb-2 py-2 px-2 border">
                      <div className="img">
                        <img src={val.img} alt="" className="w-10" />
                      </div>
                      <div className="title">{val.title}</div>
                      <div className="qty">{val.qty}</div>
                    </div>
                  </>
                );
              })}
            </div>
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
