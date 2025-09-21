import samb_img from "../images/evenement/samb.png";
import diallo_img from "../images/evenement/diallo.jpeg";
import akd_img from "../images/evenement/akd.png";
import hackaton_img from "../images/evenement/hackaton.jpeg";

export default function Evenements() {
  const evenements = [
    {
      img: samb_img,
      date: "15 Mai 2025",
      title: "Parler au bases de données...",
      description:
        "Plongez dans l’univers passionnant du Marketing Digital avec notre expert Mamadou Moustapha SAMB",
      lieu: "UCAD - FASEG",
      statut: "Passé",
    },
    {
      img: diallo_img,
      date: "09 Mai 2025",
      title: "Marketing Digital : Concepts et...",
      description:
        "Vous voulez faire parler vos données avec SQL ? Bakeli vous donne rendez-vous ce vendredi 09 mai à 15h30...",
      lieu: "Google MEET",
      statut: "Passé",
    },
    {
      img: akd_img,
      date: "29 Janvier 2025",
      title: "Comment Trouver et garder un...",
      description:
        'Masterclass : "Comment trouver et garder un stage au Sénégal où décrocher un stage relève ...',
      lieu: "ISEP Thiés",
      statut: "Passé",
    },
    {
      img: hackaton_img,
      date: "18 Janvier 2025",
      title: "Hackathon en ligne JéemaCoder...",
      description:
        "Du 18 au 25 janvier, participez à un hackathon en ligne unique organisé par Bakeli. Un événement qui...",
      lieu: "HLM Grand Yoff",
      statut: "Passé",
    },
  ];

  return (
    <section className="py-5 bg-secondary-subtle evenement">
      <h2 className="text-black text-center fw-bold">Événements</h2>
      <div className="container">
        <div className="row gap-4 gap-md-0 my-5">
          {evenements.map((event, index) => (
            <div key={index} className="col-md-3">
              <div className="card position-relative">
                {event.statut && (
                  <span
                    className={`badge bg-danger position-absolute top-0 end-0 m-2`}
                    style={{ zIndex: 10 }}
                  >
                    {event.statut}
                  </span>
                )}

                <img
                  src={event.img}
                  className="card-img-top"
                  alt={event.title}
                />

                <div className="card-body">
                  <p className="card-text text-warning fs-6 fw-semibold mb-1">
                    {event.date}
                  </p>
                  <p className="card-text fw-bold mb-2">{event.title}</p>
                  <p className="card-text mb-3">{event.description}</p>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-location-dot me-3 fs-6 text-warning"></i>
                    <p className="mb-0 text-muted">{event.lieu}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-warning text-white px-5 py-2 rounded-pill fw-semibold"
            type="button"
          >
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
}
