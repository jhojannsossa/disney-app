import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Disney App
        </Link>

        <nav className="flex gap-6">
          <Link
            to="/"
            className="transition hover:text-blue-200"
          >
            Personajes
          </Link>

          <Link
            to="/about"
            className="transition hover:text-blue-200"
          >
            Sobre mí
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;