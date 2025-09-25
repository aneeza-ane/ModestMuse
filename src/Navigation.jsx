function Navigation() {
  return (
    <div>

      <div className="bg-danger text-white text-center py-2">
        FREE DELIVERY ON ALL ORDERS ABOVE RS.3999
      </div>


      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container-fluid">

          <button className="btn border-0">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto">
            <img
              src="./logo.jpeg"
              alt="Logo"
              height="90"
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className="d-flex align-items-center gap-3">

            <a href="#" className="text-dark">
              <i className="bi bi-person"></i>
            </a>
            <a href="#" className="text-dark">
              <i className="bi bi-search"></i>
            </a>
            <a href="#" className="text-dark">
              <i className="bi bi-bag"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;