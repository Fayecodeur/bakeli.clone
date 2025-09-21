import hero from "../images/hero.png";
export default function Home() {
  return (
    <section class="mt-3 mt-md-0 py-4 py-md-5" id="acceuil">
      <div class="container">
        <div class="row gap-5 gap-md-0 justify-content-around align-items-center">
          <div class="col-12 col-md-7">
            <p class="offre">
              <i class="fas fa-bolt me-2"></i> Volkeno vous offre une chance
              unique !
            </p>
            <h1 class="text-black fw-bold mb-3">
              Volkeno offre des bourses pour 6 <br /> mois de formation Bakeli !
            </h1>
            <p class="mb-3 description">
              Nous croyons que le talent ne devrait jamais être limité par des
              contraintes financières. Bakeli, en partenariat avec Volkeno,
              offre une bourse exceptionnelle couvrant{" "}
              <span>
                70% des <br /> frais de formation
              </span>
            </p>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="dropdown">
                <button
                  class="btn btn-warning text-white px-4 py-2 rounded-pill fw-semibold dropdown-toggle"
                  type="button"
                  id="programmeDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choisir mon programme
                </button>

                <ul class="dropdown-menu" aria-labelledby="programmeDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Analyse des données & IA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Développement Web & Mobile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Développement Backend
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Community Management
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Développement Fullstack JS & DevOps
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Design Graphique & Audiovisuel
                    </a>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                class="btn btn-outline-warning text-black px-4 py-2 rounded-pill fw-semibold"
              >
                En savoir plus
              </button>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <div class="hero-image shadow-lg w-100 overflow-hidden position-relative mx-auto">
              <span class="icon code">
                <i class="fa-solid fa-code"></i>
              </span>

              <span class="icon magic">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
              </span>

              <div class="info">
                <div class="point-vert"></div>
                <div class="statistique">
                  Formation en cours <br />
                  <span class="fw-bold">127 Bakelistes</span>
                </div>
              </div>

              <img src={hero} alt="hero image" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
