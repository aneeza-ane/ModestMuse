function HeroSection() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./banner-1.jpeg"
            className="d-block w-100"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./banner-2.jpeg"
            className="d-block w-100"
            alt="Second slide"
          />
        </div>
      </div>

      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          width: "100%",
        }}
      >
        <h1 style={{ fontFamily: "Consolas, monospace" ,fontSize: "2.5rem", fontWeight: "bold" }}>
          Modest Muse
        </h1>
        <p style={{ fontFamily: "Consolas, monospace" ,fontSize: "1.25rem", marginBottom: "15px" }}>
          Everyday Abaya & Hijabs
        </p>
        <button
          className="btn btn-light fw-bold px-4 py-2"
          style={{ borderRadius: "4px" }}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
