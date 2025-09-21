import React from "react";

export default function Temoignages() {
  const temoignages = [
    {
      texte:
        "Ma formation chez Bakeli School of Technology m'a aidé à développer mes compétences techniques. Au-delà de la formation qui est 100% pratique, j'ai pu bénéficier d'un accompagnement en développement personnel qui m'a permis de pouvoir m'insérer professionnellement.",
      auteur: "Mountaga Diao Leye DIOP",
      avatar:
        "https://bakeli.tech/storage/testimonials_authors_image/6dVErNd2rq3T0RS7cn78yMJWnkNGPg-metaRFZfSW1hZ2UuSlBH-.jpg",
    },
    {
      texte:
        "(...) Telle est mon histoire, comme celle de beaucoup d'autres. Bakeli ne se contente pas de nous former, elle nous accompagne au-delà des quatre murs du bâtiment, de la lumière de notre écran, jusqu'à dans notre vie de tous les jours. Suis fière d'être une Bakeliste et j'emporterai ce nom avec moi.",
      auteur: "Sharon OKE",
      avatar:
        "https://bakeli.tech/storage/testimonials_authors_image/01JQXNSBSX9M954TTA74F0RBCZ.jpg",
    },
    {
      texte:
        "Ma formation chez Bakeli School of Technology m'a aidé à développer mes compétences techniques. Au-delà de la formation qui est 100% pratique, j'ai pu bénéficier d'un accompagnement en développement personnel qui m'a permis de pouvoir m'insérer professionnellement.",
      auteur: "Mountaga Diao Leye DIOP",
      avatar:
        "https://bakeli.tech/storage/testimonials_authors_image/6dVErNd2rq3T0RS7cn78yMJWnkNGPg-metaRFZfSW1hZ2UuSlBH-.jpg",
    },
    {
      texte:
        "(...) Telle est mon histoire, comme celle de beaucoup d'autres. Bakeli ne se contente pas de nous former, elle nous accompagne au-delà des quatre murs du bâtiment, de la lumière de notre écran, jusqu'à dans notre vie de tous les jours. Suis fière d'être une Bakeliste et j'emporterai ce nom avec moi.",
      auteur: "Sharon OKE",
      avatar:
        "https://bakeli.tech/storage/testimonials_authors_image/01JQXNSBSX9M954TTA74F0RBCZ.jpg",
    },
    {
      texte:
        "Ma formation chez Bakeli School of Technology m'a aidé à développer mes compétences techniques. Au-delà de la formation qui est 100% pratique, j'ai pu bénéficier d'un accompagnement en développement personnel qui m'a permis de pouvoir m'insérer professionnellement.",
      auteur: "Mountaga Diao Leye DIOP",
      avatar:
        "https://bakeli.tech/storage/testimonials_authors_image/6dVErNd2rq3T0RS7cn78yMJWnkNGPg-metaRFZfSW1hZ2UuSlBH-.jpg",
    },
    {
      texte:
        "(...) Telle est mon histoire, comme celle de beaucoup d'autres. Bakeli ne se contente pas de nous former, elle nous accompagne au-delà des quatre murs du bâtiment, de la lumière de notre écran, jusqu'à dans notre vie de tous les jours. Suis fière d'être une Bakeliste et j'emporterai ce nom avec moi.",
      auteur: "Sharon OKE",
      avatar:
        "https://bakeli.tech/storage/testimonials_authors_image/01JQXNSBSX9M954TTA74F0RBCZ.jpg",
    },
  ];

  // Grouper par slide (ici 3 par slide)
  const slides = [];
  for (let i = 0; i < temoignages.length; i += 3) {
    slides.push(temoignages.slice(i, i + 3));
  }

  return (
    <section className="py-5 temoignages">
      <h2 className="text-black text-center fw-bold">
        Nos Bakelistes témoignent
      </h2>
      <div className="container my-5">
        <div
          id="carouselTemoignages"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              >
                <div className="row justify-content-center">
                  {slide.map((temoignage, index) => (
                    <div key={index} className="col-12 col-md-4 mb-3">
                      <div className="card h-100 p-2 border-0 rounded-4 shadow-sm">
                        <div className="card-body d-flex flex-column">
                          <p className="card-text fs-6 mb-3">
                            {temoignage.texte}
                          </p>
                          <hr
                            className="my-4"
                            style={{ borderColor: "#ccc" }}
                          />
                          <div className="d-flex justify-content-between align-items-center mt-auto">
                            <strong className="mb-0">
                              {temoignage.auteur}
                            </strong>
                            <img
                              src={temoignage.avatar}
                              alt="avatar"
                              className="rounded-circle"
                              width="50"
                              height="50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselTemoignages"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselTemoignages"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
