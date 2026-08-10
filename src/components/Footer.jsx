import { Link } from "react-router";
import "./Footer.css";
import footerbg from "../assets/imgs/svg/footer-bg.svg";
import logo from "../assets/imgs/logos/logo-white.png";

export default function Footer() {
  return (
    <>
      <footer>
        <img src={footerbg} className="footer-bg" alt="" />
        <div className="container">
          <div className="footer-top">
            <Link to="/" className="logo">
              <img src={logo} className="img-cover" alt="BYOTA" />
            </Link>
            <nav className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/residential">Residential</Link>
                </li>
                <li>
                  <Link to="/commercial">Commercial</Link>
                </li>
                <li>
                  <Link to="/newprojects">New projects</Link>
                </li>
                <li>
                  <Link to="/agents">Agents</Link>
                </li>
                <li>
                  <Link to="/">Magazine</Link>
                </li>
              </ul>
            </nav>
            <nav className="about-us">
              <h3>About Us</h3>
              <ul>
                <li>
                  <Link to="">About Us</Link>
                </li>
                <li>
                  <Link to="">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Company Registration</Link>
                </li>
              </ul>
            </nav>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">© Copyright 2025 BYOTA REALESTATE</p>
        </div>
      </footer>
    </>
  );
}
