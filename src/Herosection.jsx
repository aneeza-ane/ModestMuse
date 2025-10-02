import React from "react";
function HeroSection() {
  return (
    <div className="container-fluid p-0 position-relative">
      {/* Banner Image */}
      <img
        src="./banner-1.webp"
        className="img-fluid w-100"
        alt="Hero Banner"
        style={{ objectFit: "cover", maxHeight: "90vh" }}
      />

      {/* Overlay Text */}
      <div
        className="position-absolute top-50 start-0 translate-middle-y text-white px-3 px-md-5"
        style={{
          width: "100%",
          maxWidth: "100%",
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h1 className="fw-bold display-4 display-md-3 display-lg-2">
            Modest Muse
          </h1>
          <p className="fs-5 fs-md-4">Abaya Collection</p>
          <button
            className="btn btn-danger btn-lg mt-3"
            style={{ borderRadius: "70px", width: "100%", maxWidth: "300px" }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
