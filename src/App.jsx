import { Routes, Route, Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Saint Valentin</p>
        <h1>Veux-tu etre ma Valentine ?</h1>
        <p className="subtitle">
          J&apos;ai une petite question pour toi, la plus belle de toutes.
        </p>
      </header>

      <div className="card">
        <div className="buttons">
          <button className="btn primary" onClick={() => navigate("/love")}>
            Oui
          </button>
          <button
            className="btn ghost"
            onClick={() => navigate("/love?reponse=oui")}
          >
            Oui aussi
          </button>
        </div>
        <p className="hint">
          (Promis, la bonne reponse est a gauche.)
        </p>
      </div>
    </div>
  );
}

function LovePage() {
  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Merci</p>
        <h1>Mon coeur est a toi.</h1>
        <p className="subtitle">
          Ici, j&apos;ecrirai mon message d&apos;amour plus tard.
        </p>
      </header>

      <div className="card message">
        <p>
          Message d&apos;amour a personnaliser. Remplace ce texte par tes mots.
        </p>
      </div>

      <Link className="back" to="/">
        Revenir a la question
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/love" element={<LovePage />} />
    </Routes>
  );
}
