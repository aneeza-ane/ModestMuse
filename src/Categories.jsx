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
      <h2 className="text-center mb-4">Shop by Category</h2>
      <div className="row g-3 justify-content-center">
        {categories.map((cat, index) => (
          <div key={index} className="col-6 col-md-4 text-center">
            <a href="" style={{textDecoration: "none", color: "inherit"}}>
            <img
              src={cat.image}
              alt={cat.name}
              className="img-fluid"
              style={{
                height: "350px",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h5 className="mt-2">{cat.name}</h5>
            </a>
          </div>
        ))}
      </div>
    </div>


  );
}

export default Categories;
