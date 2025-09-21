import Logo from "../images/logo.png";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg shadow-sm bg-white fixed-top ">
      <div class="container">
        <a class="navbar-brand me-5" href="#">
          <img src={Logo} class="h-25 w-50" alt="Logo Bakeli" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse my-3 my-md-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto mb-2 d-flex gap-2 gap-md-4">
            <li class="nav-item">
              <a class="nav-link active fw-medium" href="#">
                Acceuil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium" href="#">
                Formation
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium" href="#">
                Coachs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium" href="#">
                Evenements
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium" href="#">
                Bourses
              </a>
            </li>
          </ul>

          <button
            type="button"
            class="btn btn-warning text-white px-3 py-2 rounded-pill fw-semibold"
          >
            Nous rejoindre
          </button>
        </div>
      </div>
    </nav>
  );
}
