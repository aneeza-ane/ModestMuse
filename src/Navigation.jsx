function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "white" }} data-bs-theme="light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" width="30" height="24" />
            </a>
            <a class="navbar-brand" href="#">Modest Muse</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Abayas</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Hijabs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="#">Niqabs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="#">UnderCaps</a>
                </li><li class="nav-item">
                <a class="nav-link " href="#">Hair Scrunchies</a>
                </li>
            </ul>
            </div>
            <a class="navbar-brand" href="#">
                <img src="./cart.png" width="30" height="24" />
                </a>
        </div>
        </nav>
    </>
  );
}

export default Navigation;