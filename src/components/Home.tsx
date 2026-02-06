import "../styles/home.css"
import {Link} from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import counterImg from "../assets/counter.png";
import pokemonImg from "../assets/pokemon.png";
import shoppingCartImg from "../assets/shoppingCart.png";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <img src={counterImg} alt="Counter" className="floating-img floating-img-1" />
      <img src={pokemonImg} alt="Pokemon" className="floating-img floating-img-2" />
      <img src={shoppingCartImg} alt="Shopping Cart" className="floating-img floating-img-3" />

      <div className="home-container">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <h1 className="home-title">Renzo ShowCase</h1>
        <div className="home-cards">
          <Link to="/counter" className="home-card">Counter</Link>
          <Link to="/pokemon" className="home-card">Pokemon</Link>
          <Link to="/shop" className="home-card">Shopping Cart</Link>
        </div>
      </div>
    </>
  )
}

export default Home;