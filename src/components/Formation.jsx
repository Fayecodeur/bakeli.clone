export default function Formation() {
  const formations = [
    {
      title: "Développement web et mobile",
      description:
        "À une époque où tout le monde est connecté, il est primordial pour toute entreprise d’avoir un site Internet ou une application mobile. Le développement Web et mobile représente une grande opportunité pour les entreprises de lancer...",
      icon: "fas fa-code",
      iconBg: "bg-success",
    },
    {
      title: "Marketing et Communication digitale",
      description:
        "Le Marketing Digital désigne l’utilisation des canaux numériques afin de vendre un produit ou un service tout en promouvant sa marque ! L’objectif principal de cette discipline est d’augmenter le nombre de visites sur la plateforme...",
      icon: "fas fa-lightbulb",
      iconBg: "btn-warning",
    },
    {
      title: "Informatique de Gestion",
      description:
        "Maîtrisez l’art de faire parler les données. À l’intersection du digital et de la performance, cette formation vous prépare à automatiser les processus, structurer l’information et piloter l’activité d’une entreprise à l’ère numérique.",
      icon: "fas fa-magnifying-glass-chart",
      iconBg: "bg-success",
    },
    {
      title: "Webmaster & Réseaux Sociaux",
      description:
        "Soyez le chef d’orchestre de la présence digitale : de la gestion de site web à l’animation de communautés en ligne, cette formation vous arme pour piloter la visibilité et l’engagement d’une entreprise. Avec une approche 360°, vous devenez...",
      icon: "fa-solid fa-house-laptop",
      iconBg: "btn-warning",
    },
    {
      title: "Infographie",
      description:
        "Créez l’émotion par le design Maîtrisez les outils du desin et bien plus pour concevoir des visuels percutants, harmonieux et alignés avec l’image de marque. Chez Bakeli, vous ne faites pas que “dessiner” : vous racontez des histoires, vous...",
      icon: "fa-solid fa-object-ungroup",
      iconBg: "bg-success",
    },
    {
      title: "Secrétariat Bureautique",
      description:
        "L’efficacité au cœur de l’action administrative Vous aimez l’organisation, la rigueur et la polyvalence ? Cette formation vous forme aux outils bureautiques essentiels, à la gestion documentaire et à la communication professionnelle. Bakeli vous...",
      icon: "fa-solid fa-file-pen",
      iconBg: "bg-danger",
    },
    {
      title: "Assistant de Gestion de PME/PMI",
      description:
        "Soyez le bras droit des dirigeants d’entreprise Comptabilité, ressources humaines, gestion commerciale, organisation des opérations : cette formation vous donne toutes les clés pour accompagner la gestion d’une PME avec efficacité...",
      icon: "fa-solid fa-building-user",
      iconBg: "bg-success",
    },
  ];

  return (
    <section className="formations py-5 text-center">
      <p className="etudiant_formes">+2000 Étudiants formés</p>
      <h2 className="fw-bold mb-3">Formez-vous aux métiers de demain !</h2>
      <p>
        Améliorez vos compétences dans le domaine de vos rêves en suivant l'un
        de nos programmes de formation.
      </p>

      <div className="container my-4">
        <div className="row g-4 align-items-stretch mb-4">
          {formations.map((formation, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className={`icon-wrapper ${formation.iconBg} text-white d-flex align-items-center justify-content-center rounded-3 me-3`}
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i className={formation.icon}></i>
                    </div>
                    <h5 className="card-title mb-0 fw-bold fs-5 text-start">
                      {formation.title}
                    </h5>
                  </div>
                  <p className="card-text text-start">
                    {formation.description}
                  </p>
                  <a href="#" className="btn btn-sm rounded-pill mt-auto">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
