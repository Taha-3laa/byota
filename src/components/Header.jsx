import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import logo from "../assets/imgs/logos/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} className="img-cover" alt="byotalogo" />
          </Link>
          <nav className={isMenuOpen?"open":""}>
            <div className="links">
              <Link to="/residential">Residential</Link>
              <Link to="/commercial">Commercial</Link>
              <Link to="/newprojects">New Projects</Link>
              <Link to="/agents">Agents</Link>
            </div>
            <Link to="/login" className="login-btn">
              log in
            </Link>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="toggle-menu">
            <i
              className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>
        </div>
      </header>
    </>
  );
}
