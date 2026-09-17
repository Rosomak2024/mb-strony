import { useState } from "react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("");

  const projects = [
    {
      id: 1,
      title: "Klub Sportów Walki DZIK",
      category: "Strona klubu sportowego",
      image: "/images/dzik-home.png",
      technologies: "React • JavaScript • CSS • Vite",
    },
      
    {
      id: 2,
      title: "Strona restauracji",
      category: "Restauracja",
      className: "restaurant",
    },
  
    {
      id: 3,
      title: "Portfolio",
      category: "Portfolio osobiste",
      className: "portfolio",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handlePackageClick = (packageName) => {
    setSelectedPackage(packageName);

    document
      .getElementById("kontakt")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">

<header className="nav">
  <a href="#start" className="logo">
    MB
  </a>

  <nav className={menuOpen ? "nav-links active" : "nav-links"}>
    <a href="#projekty" onClick={() => setMenuOpen(false)}>
      Projekty
    </a>

    <a href="#cennik" onClick={() => setMenuOpen(false)}>
      Cennik
    </a>

    <a href="#o-mnie" onClick={() => setMenuOpen(false)}>
      O mnie
    </a>

    <a href="#kontakt" onClick={() => setMenuOpen(false)}>
      Kontakt
    </a>
  </nav>

  <a href="#kontakt" className="btn btn-primary nav-cta">
    Zamów projekt
  </a>

  <button
    className={menuOpen ? "hamburger active" : "hamburger"}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Otwórz menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</header>

      <main>

        <section className="hero" id="start">
          <div className="hero-copy">

            <p className="eyebrow">
              PROSTE STRONY. WIELKIE MOŻLIWOŚCI.
            </p>

            <h1>
              Profesjonalne strony
              <span> dla Ciebie i Twojego biznesu.</span>
            </h1>

            <p>
              Tworzę nowoczesne i responsywne strony internetowe
              dla firm i osób prywatnych.
            </p>

            <a href="#projekty" className="btn btn-primary">
              Zobacz projekty
            </a>

          </div>
        </section>

        <section className="section" id="projekty">

          <h2>Przykładowe realizacje</h2>

          <div className="project-grid">

          {projects.map((project) => (
  <article
    className="project-card"
    key={project.id}
    onClick={() => handleProjectClick(project)}
  >

    {project.image ? (
      <div className="project-preview project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>
    ) : (
      <div className={`project-preview ${project.className}`}>
        <div className="preview-browser">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )}

    <div className="project-info">
      <strong>{project.title}</strong>

      <span>{project.category}</span>

      {project.technologies && (
        <small>{project.technologies}</small>
      )}
    </div>

  </article>
))}

          </div>

          {selectedProject && (
  <div
    className="project-modal"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal-content"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="project-modal-close"
        onClick={() => setSelectedProject(null)}
      >
        ×
      </button>

      <div className="project-modal-header">
        <p className="eyebrow">
          REALIZACJA
        </p>

        <h2>
          {selectedProject.title}
        </h2>

        <p>
          {selectedProject.category}
        </p>
      </div>

      {selectedProject.image && (
        <div className="project-modal-image">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
          />
        </div>
      )}

      {selectedProject.technologies && (
        <p className="project-modal-tech">
          {selectedProject.technologies}
        </p>
      )}

      <div className="project-modal-actions">
        {selectedProject.url && (
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Zobacz stronę →
          </a>
        )}

        <button
          className="btn btn-outline"
          onClick={() => setSelectedProject(null)}
        >
          Zamknij
        </button>
      </div>
    </div>
  </div>
)}

        </section>

        <section className="section dark" id="cennik">

          <h2>Cennik</h2>

          <div className="price-grid">

            <div className="price-card">
              <h3>Landing Page</h3>

              <p>od 799 zł</p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  handlePackageClick("Landing Page")
                }
              >
                Wybieram
              </button>
            </div>

            <div className="price-card">
              <h3>Strona firmowa</h3>

              <p>od 1499 zł</p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  handlePackageClick("Strona firmowa")
                }
              >
                Wybieram
              </button>
            </div>

          </div>

        </section>

        <section className="section" id="kontakt">

          <h2>Kontakt</h2>

          {selectedPackage && (
            <p>
              Wybrany pakiet:{" "}
              <strong>{selectedPackage}</strong>
            </p>
          )}

          <form>

            <input
              type="text"
              placeholder="Imię"
            />

            <input
              type="email"
              placeholder="E-mail"
            />

            <textarea
              placeholder="Napisz czego potrzebujesz"
            />

            <button
              className="btn btn-primary"
              type="submit"
            >
              Wyślij
            </button>

          </form>

        </section>

      </main>
    </div>
  );
}

export default App;
