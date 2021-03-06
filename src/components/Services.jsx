import React from "react";
import Card from "./Card";
import Adata from './Adata';


const Services = () => {
  return (
    <>
      <div className ="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto p-3 ">
            <div className="row gy-4 ">
              { Adata.map((val,index) => <Card  key={index} imgsrc={val.imgsrc} title= {val.title} />) }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
