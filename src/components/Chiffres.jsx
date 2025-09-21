export default function Chiffres() {
  const chiffres = [
    {
      value: "9",
      label: "Ans d’existence",
      icon: "fa-solid fa-bolt",
      iconColor: "text-orange",
      cardClass: "custom-card-annee",
    },
    {
      value: "+2000",
      label: "Étudiants formés",
      icon: "fa-solid fa-users-line",
      iconColor: "text-info",
      cardClass: "custom-card-etudiants",
    },
    {
      value: "+20",
      label: "Coachs",
      icon: "fa-solid fa-suitcase",
      iconColor: "",
      cardClass: "custom-card-coach",
    },
    {
      value: "+90%",
      label: "Taux de réussite",
      icon: "fa-solid fa-thumbs-up",
      iconColor: "",
      cardClass: "custom-card-reussite",
    },
  ];

  return (
    <section className="py-5 chiffres">
      <h2 className="text-black fw-bold fs-3 text-center">
        Les chiffres témoignent du travail acharné accompli depuis 2016.
      </h2>

      <div className="container my-5">
        <div className="row gap-3 gap-md-0">
          {chiffres.map((chiffre, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div
                className={`custom-card shadow p-4 rounded-4 h-100 text-start ${chiffre.cardClass}`}
              >
                <div className="d-flex align-items-center justify-content-start mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "18px",
                    }}
                  >
                    <i
                      className={`${chiffre.icon} ${chiffre.iconColor} rounded-2`}
                    ></i>
                  </div>
                  <h3 className="fw-bold text-black fs-2 mb-0">
                    {chiffre.value}
                  </h3>
                </div>
                <div className="ms-5">
                  <p className="text-secondary fs-5 fw-semibold mb-0">
                    {chiffre.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
