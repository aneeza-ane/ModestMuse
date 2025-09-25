import React from "react";

function HeroSection() {
  return (
    <div className="container-fluid p-0 position-relative">

      <img
        src="./banner-1.webp" 
        className="img-fluid w-100"
        alt="Hero Banner"
      />


      <div
        className="position-absolute top-50 translate-middle-y text-start text-white "
        style={{ maxWidth: "40%", textShadow: "2px 2px 8px rgba(0,0,0,0.6)",paddingLeft:'10%' }}
      >
        <h1 className="fw-bold display-3">Modest Muse</h1>
        <p className="fs-4">Abaya Collection</p>
        <button className="btn btn-danger btn-lg mt-3" style={{width:'100%',borderRadius:'70px'}}>Shop Now</button>
      </div>
    </div>
  );
}

export default HeroSection;
