import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-blue-700 text-white sm:fixed p-4 bottom-0 left-0 w-full bottom-0 left-0 w-full h-16 bg-blue-700 text-white">
      <nav aria-label="Footer Navigation">
        <ul className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4">
          <p className="text-center sm:text-left w-full sm:w-auto mt-4 sm:mt-0">&copy; {new Date().getFullYear()}</p>
          <li>
            <Link to="/impressum" className="hover:underline">
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/Agb" className="hover:underline">
              AGB
            </Link>
          </li>
          <li>
            <Link to="/Datenschutz" className="hover:underline">
              Datenschutz
            </Link>
          </li>
          <li>
            <Link to="/Cookie" className="hover:underline">
              Cookie-Einstellungen
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:underline">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
