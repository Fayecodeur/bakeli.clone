export default function Statistique() {
  const stats = [
    {
      value: "70%",
      label: "Frais couverts",
      className: "frais",
      color: "#e68900",
    },
    {
      value: "150",
      label: "Bourses disponibles",
      className: "bourses",
      color: "#0000ff",
    },
    {
      value: "6",
      label: "Mois de formation",
      className: "formation",
      color: "#000000",
    },
    {
      value: "+2000",
      label: "Diplômés",
      className: "diplomes",
      color: "green",
    },
  ];

  return (
    <section className="statistiques py-5">
      <div className="container">
        <div className="row g-0 justify-content-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-12 col-md-3 p-2 rounded-4 mb-2 mb-md-0"
            >
              <div className={`statistique-item text-center ${stat.className}`}>
                <h2 className="fw-bold" style={{ color: stat.color }}>
                  {stat.value}
                </h2>
                <p className="mb-0 text-secondary">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
