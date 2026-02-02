import { Routes, Route, Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Servane</p>
        <h1>Veux-tu etre ma Valentine ?</h1>
        <p className="subtitle">
          J&apos;ai une petite question pour toi, ma aurore boréale.
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
          
          Je sais que tous les jours ne sont pas faciles, entre la distance et la difficulté que l'ont peut avoir à dire ce que l'on ressent parfois. <br/>
          Je veux tout de même te dire quelque chose de très important pour moi. <br/>
          Tu n'as absolument rien à me prouver! Tu es amplement à la hauteur, telle que tu es avec tes qualités et tes fragilités, de mes rêves les plus fous. <br/>
          Et ce que j'aime chez toi ne dépend en rien de ce que tu peux faire de bien ou de mal, ni de ce que tu peux croire devoir être. <br/>
          Tout le monde change, et tu ne fais pas exception. Je n'arrêterai pas de t'aimer pour qui tu es, car je n'ai jamais choisi une version figée de toi, mais plutôt toi, dans toute ta splendeur! <br/>
          <br/>
          J'ai hâte de voir la Servane avec qui j'avancerai demain. <br/>
          Je t'aime et je t'embrasse tendrement. <br/>
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
