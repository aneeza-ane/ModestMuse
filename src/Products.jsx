function Products({ title, products }) {
  
  return (
    <div className="container my-5 text-center">

      <h2 className="mb-2 fw-light">{title}</h2>

      <button className="btn btn-outline-dark mb-4">VIEW ALL</button>

      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2 mb-4 mx-auto">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid mb-2"
              style={{
                objectFit: "cover",
                height: "300px",
                width: "100%",
              }}
            />
            <p className="mb-1 fw-bold">{product.name}</p>
            <p className="text-muted">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;