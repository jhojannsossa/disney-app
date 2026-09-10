import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Disney App</h1>

      <nav>
        <Link to="/">Personajes</Link>
        <Link to="/about">Sobre mí</Link>
      </nav>
    </header>
  );
}

export default Header;