import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm bg-white fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <button
          className="navbar-toggler order-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand mx-auto order-1" href="#">
          <img src={Logo} className="h-25 w-50" alt="Logo Bakeli" />
        </a>

        <div
          className="collapse navbar-collapse order-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 d-flex gap-2 gap-md-4">
            <li className="nav-item">
              <a className="nav-link active fw-medium" href="#">
                Acceuil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                Formation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                Coachs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                Evenements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                Bourses
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-warning text-white px-3 py-2 rounded-pill fw-semibold"
          >
            Nous rejoindre
          </button>
        </div>
      </div>
    </nav>
  );
}
