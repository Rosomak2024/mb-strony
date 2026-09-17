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
      title: "Restauracja Ostoja",
      category: "Strona restauracji",
      image: "/images/ostoja-home.png",
      technologies: "React • JavaScript • CSS • Vite",
      url: "https://ostoja-restauracja.picsmaster2025.chatgpt.site",
    },
    {
      id: 3,
      title: "Portfolio",
      category: "Portfolio osobiste",
      className: "portfolio",
    },
  ];

  const offerPackages = [
    {
      id: "landing-page",
      name: "Landing Page",
      price: "799 zł",
      description: "Dla jednej konkretnej usługi, wydarzenia lub kampanii.",
      features: [
        "Jedna nowoczesna strona",
        "Wersja na telefon i komputer",
        "Formularz kontaktowy",
        "Podstawowe SEO",
        "Publikacja strony",
        "Jedna seria poprawek",
      ],
    },
    {
      id: "business-site",
      name: "Strona firmowa",
      price: "1499 zł",
      description:
        "Dla firmy, która chce profesjonalnie zaprezentować swoją ofertę.",
      features: [
        "Do 5 podstron",
        "Wersja na telefon i komputer",
        "Formularz kontaktowy",
        "Podstawowe SEO",
        "Optymalizacja szybkości",
        "Publikacja strony",
        "Dwie serie poprawek",
      ],
      popular: true,
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

        <section className="section dark pricing" id="cennik">
  <p className="eyebrow">OFERTA STARTOWA</p>

  <h2>Prosta oferta. Jasny zakres.</h2>

  <p className="pricing-lead">
    Wybierz rozwiązanie dopasowane do Twojej firmy. Każda strona jest
    tworzona indywidualnie i przygotowana do działania na telefonie.
  </p>

  <div className="launch-offer">
    <strong>Szukam 3 firm do pierwszych realizacji</strong>

    <span>
      Strona firmowa w cenie startowej od 1499 zł, gotowa nawet w 5–7 dni
      roboczych.
    </span>
  </div>

  <div className="price-grid">
    {offerPackages.map((offerPackage) => (
      <article
        className={
          offerPackage.popular
            ? "price-card popular"
            : "price-card"
        }
        key={offerPackage.id}
      >
        {offerPackage.popular && (
          <span className="popular-label">
            NAJCZĘŚCIEJ WYBIERANA
          </span>
        )}

        <h3>{offerPackage.name}</h3>

        <p className="package-description">
          {offerPackage.description}
        </p>

        <p className="price">
          <small>od</small> {offerPackage.price}
        </p>

        <ul>
          {offerPackage.features.map((feature) => (
            <li key={feature}>✓ {feature}</li>
          ))}
        </ul>

        <button
          className="btn btn-primary"
          onClick={() =>
            handlePackageClick(offerPackage.name)
          }
        >
          Zapytaj o ten pakiet
        </button>
      </article>
    ))}
  </div>

  <p className="pricing-note">
    Domena, płatny hosting, przygotowanie tekstów i dodatkowe funkcje są
    wyceniane osobno. Ostateczna cena zależy od zakresu projektu.
  </p>
</section>

<section className="contact-section" id="kontakt">
  <div className="contact-wrapper">
    <div className="contact-copy">
      <p className="eyebrow">POROZMAWIAJMY</p>

      <h2>Zacznijmy od krótkiej rozmowy o Twojej stronie.</h2>

      <p className="contact-description">
        Napisz, czym zajmuje się Twoja firma i jakiej strony potrzebujesz.
        Odpowiem z propozycją rozwiązania oraz wstępną wyceną.
      </p>

      <div className="contact-benefits">
        <div className="contact-benefit">
          <span>01</span>

          <div>
            <strong>Bezpłatna konsultacja</strong>
            <p>Najpierw ustalimy, czego naprawdę potrzebuje Twoja firma.</p>
          </div>
        </div>

        <div className="contact-benefit">
          <span>02</span>

          <div>
            <strong>Jasna wycena</strong>
            <p>Przed rozpoczęciem poznasz zakres, cenę i termin realizacji.</p>
          </div>
        </div>

        <div className="contact-benefit">
          <span>03</span>

          <div>
            <strong>Bez zobowiązań</strong>
            <p>Samo wysłanie zapytania nie oznacza zamówienia projektu.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-form-card">
      <div className="contact-form-header">
        <span>Napisz do mnie</span>
        <h3>Opowiedz o swoim projekcie</h3>
      </div>

      {selectedPackage && (
        <div className="selected-package">
          <span>Wybrany pakiet</span>
          <strong>{selectedPackage}</strong>
        </div>
      )}

      <form
        className="contact-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="form-row">
          <label>
            Imię
            <input
              type="text"
              name="name"
              placeholder="Jak masz na imię?"
              autoComplete="name"
              required
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              placeholder="twoj@email.pl"
              autoComplete="email"
              required
            />
          </label>
        </div>

        <label>
          Nazwa firmy
          <input
            type="text"
            name="company"
            placeholder="Nazwa firmy – opcjonalnie"
            autoComplete="organization"
          />
        </label>

        <label>
          Wiadomość
          <textarea
            name="message"
            placeholder="Napisz, czym zajmuje się Twoja firma i jakiej strony potrzebujesz..."
            rows="6"
            required
          />
        </label>

        <button
          className="btn btn-primary contact-submit"
          type="submit"
        >
          Wyślij zapytanie
        </button>

        <p className="form-note">
          Odpowiem najszybciej, jak to możliwe. Wysłanie zapytania jest
          bezpłatne i do niczego nie zobowiązuje.
        </p>
      </form>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}

export default App;
