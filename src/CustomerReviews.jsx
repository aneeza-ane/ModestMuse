
const reviews = [
  {
    stars: 5,
    title: "Satisfied",
    text: "Fabric acha hai or color bhi boht acha laga hai. 😍🥰",
    name: "Farooq Ch"
  },
  {
    stars: 5,
    title: "Georgette Black Ditsy Hijab",
    text: "",
    name: "Maryam Naseer Ahmed"
  },
  {
    stars: 5,
    title: "Fantastic Abaya.",
    text: "I absolutely adore the trendy styles this store offers. The abaya fit so...",
    name: "Dr Naseemullah Memon"
  },
  {
    stars: 5,
    title: "Fantastic Abaya.",
    text: "I absolutely adore the trendy styles this store offers. The abaya fit so...",
    name: "Dr Naseemullah Memon"
  }
];


function CustomerReviews () {
  return (
    <div className="container my-5 text-center">
      <h2 className="fw-light">LET CUSTOMERS SPEAK FOR US</h2>
      <div className="text-success fs-4 mb-1">
        {'★'.repeat(5)}
      </div>
      <p className="text-muted">from 2105 reviews</p>

      <div className="row justify-content-center mt-4">
        {reviews.map((review, idx) => (
          <div className="col-12 col-md-4 mb-4" key={idx}>
            <div className="card p-3 shadow-sm h-100">
               <div className="text-success mb-2">
      {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
    </div>
              <h5 className="fw-bold">{review.title}</h5>
              {review.text && <p>{review.text}</p>}
              <p className="fw-bold mb-0">{review.name}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-outline-secondary me-2">
          <span>&larr;</span>
        </button>
        <button className="btn btn-outline-secondary">
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
