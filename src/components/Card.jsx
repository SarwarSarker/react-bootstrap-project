import React from 'react';


const Card = ({imgsrc,title}) => {
    return (
        <>
            <div className="col-md-4 col-sm-6 col-10 mx-auto p-3 ">
                <div className="card">
                  <img src={imgsrc} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title  fw-bolder">{title}</h4>
                    <p className="card-text fw-lighter fs-6">
                      Repellendus cumque quidem sequi. Pariatur obcaecati sapiente quis modi explicabo distinctio incidunt.
                    </p>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Card
