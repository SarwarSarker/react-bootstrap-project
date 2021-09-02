import React from "react";
import { NavLink } from "react-router-dom";

const Common = ({name,brand_name,imgsrc,btname}) => {
  return (
    <>
      <section id="header" className="header d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-md-6  order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>
                    {name}<br/>
                    <strong className="brand_name">{brand_name}</strong>
                  </h1>
                  <h2 className="py-3">
                    We are the team of talent developer making websites.
                  </h2>
                  <div className="pt-3">
                    <NavLink to="/services" className="btn btn-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 pt-lg-5 order-1 order-lg-2 header-img">
                  <img src={imgsrc} className="img-fluid amimated" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
