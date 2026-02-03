import "../styles/home.css"
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Renzo ShowCase</h1>
      <div className="home-cards">
        <Link to="/counter" className="home-card">Counter</Link>
        <Link to="/pokemon" className="home-card">Pokemon</Link>
        <Link to="/shop" className="home-card">Shopping Cart</Link>
      </div>
    </div>

  )
}

export default Home;