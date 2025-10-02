import React from "react";

function Categories() {
  const categories = [
    { name: "Abayas", image: "./abayas.jpeg" },
    { name: "Hijabs", image: "./hijab.jpeg" },
    { name: "Niqabs", image: "./niqab.jpeg" },
    { name: "Scrunchies", image: "./scrunchies.jpeg" },
    { name: "UnderCaps", image: "./undercaps.jpeg" },
    { name: "Hand Gloves", image: "./handgloves.jpeg"}
  ];
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-light">COLLECTION LIST</h2>
      <div className="row">
        {categories.map((item, index) => (
          <div key={index} className="col-6 col-md-4  mb-4">
            <div className="position-relative">

              <img
                src={item.image}
                alt={item.name}
                className="img-fluid w-100"
                style={{  height: "40vh" }}
              />

             <h5
                className="position-absolute text-white"
                style={{
                  bottom: '10px',
                  right: '10px',
                  fontWeight: '500',
                  letterSpacing: '2px'
                }}
              >
                {item.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


}

export default Categories;
