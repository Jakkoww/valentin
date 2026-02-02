import { Routes, Route, Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Servane</p>
        <h1>Veux-tu etre ma Valentine ?</h1>
        <p className="subtitle">
          Choisis de façon avisée.
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
          Voici un message d'amour pour toi.
        </p>
      </header>

      <div className="card message">
        <p>
          Ma Servane,<br />

          Je sais que certains jours sont plus lourds que d’autres, que la distance parfois nous met à l’épreuve et que les mots ont du mal à porter tout ce que nos cœurs ressentent. <br/>
          Pourtant, il y a une chose essentielle que je veux que tu entendes aujourd’hui. <br/>

          Tu n’as rien à me prouver, jamais. Tu es déjà, telle que tu es — avec ta lumière et tes failles, tes élans et tes doutes — bien au-delà de tout ce que j’aurais pu rêver. <br/>
          Ce que j’aime en toi ne dépend d’aucune réussite, d’aucune perfection, d’aucun rôle que tu penserais devoir jouer. <br/>

          Nous changeons tous au fil du temps, comme des saisons qui se répondent. Et moi, je ne suis pas tombé amoureux d’une image figée, mais de toi entière, vivante, unique, dans toute ta splendeur. <br/>
          <br/>
          J’ai hâte de découvrir chaque jour la Servane que la vie fera éclore, celle avec qui je continuerai d’avancer main dans la main. <br/>
          Je t’aime infiniment et je t’embrasse avec toute ma tendresse. <br/>
          Jacques, ton bibou.
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
