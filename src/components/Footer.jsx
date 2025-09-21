import Logo from "../images/logo.png";

export default function Footer() {
  const socialIcons = [
    { icon: "fa-x", link: "#" },
    { icon: "fa-facebook-f", link: "#" },
    { icon: "fa-linkedin-in", link: "#" },
    { icon: "fa-instagram", link: "#" },
  ];

  const bakeliLinks = [
    { label: "Accueil", link: "#" },
    { label: "Nos coach", link: "#" },
    { label: "Evenement", link: "#" },
    { label: "Blog", link: "#" },
  ];

  const contactLinks = [
    {
      label:
        "Hlm Grand Yoff Villa n°241 Près du terminus des bus Dakar Dem Dikk qui vont à l'AIBD",
      link: "#",
    },
    { label: "+221 78 546 15 51", link: "#" },
    { label: "contact@bakeli.tech", link: "mailto:contact@bakeli.tech" },
  ];

  return (
    <footer className="py-5">
      <div className="container">
        <div className="row gap-5 gap-md-0">
          <div className="col-md-4">
            <img src={Logo} className="mb-4" alt="Logo Bakeli" />
            <p className="text-muted mb-4 lh-base">
              Bakeli est une école de formation professionnelle dans les
              nouvelles technologies créée par Volkeno. Elle a formé + de 6000
              étudiants et professionnels aux métiers des nouvelles technologies
              et du digital.
            </p>
            <div className="d-flex gap-2">
              {socialIcons.map((item, index) => (
                <a key={index} href={item.link} className="social-icon">
                  <i className={`fa-brands ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-2 gap-2">
            <p className="text-muted fs-5">Bakeli</p>
            <div className="links d-flex flex-column gap-2">
              {bakeliLinks.map((item, index) => (
                <a key={index} href={item.link} className="link-hover">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-2">
            <p className="text-muted fs-5">Contacts</p>
            <div className="links d-flex flex-column gap-3">
              {contactLinks.map((item, index) => (
                <a key={index} href={item.link} className="link-hover">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <p className="text-muted fs-5">S'abonner à la Newsletter</p>
            <input type="email" placeholder="Votre email" />
            <button className="btn btn-success px-4 py-3 fw-bold">
              S'inscrire
            </button>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "#ccc" }} />
      </div>

      <div className="py-2 d-flex justify-content-center align-items-center">
        <p className="mb-0 text-muted">
          &copy; Copyright 2025, Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
