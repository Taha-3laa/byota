import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import logo from "../assets/imgs/logos/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["residential", "commercial", "new projects", "agents", "log in"];

  return (
    <>
      <header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} className="img-cover" alt="byotalogo" />
          </Link>
          <nav className={isMenuOpen ? "open" : ""}>
            <div className="links">
              {links.slice(0, 4).map((l, index) => (
                <Link
                  key={index}
                  to={`/${l.replace(/\s+/g, "")}`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {l}
                </Link>
              ))}
            </div>
            <Link
              to={`/${links[links.length-1].replace(/\s+/g, "")}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="login-btn"
            >
              {links[links.length-1]}
            </Link>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="toggle-menu"
          >
            <i
              className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>
        </div>
      </header>
    </>
  );
}
