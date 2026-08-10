import {Link} from "react-router";
import "./searches.css";

export default function Searches() {
  return (
    <section className="searches">
      <div className="container">
        <div className="cards-grid">
          <div className="links-column">
            <h3>Popular Search</h3>

            <ul>
              <li>
                <Link to ="/residential">Studios in Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Al Rehab City Apartments for Sale</Link>
              </li>
              <li>
                <Link to ="/residential">Madinaty Villas for Sale</Link>
              </li>
              <li>
                <Link to ="/residential">Apartments for Sale in Hurghada</Link>
              </li>
              <li>
                <Link to ="/residential">Rent in Marassi North Coast</Link>
              </li>
              <li>
                <Link to ="/residential">Rent in North Coast Egypt</Link>
              </li>
              <li>
                <Link to ="/residential">Commercial Properties for Sale</Link>
              </li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Trends Areas</h3>

            <ul>
              <li>
                <Link to ="/residential">Villa for Rent in New Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Villa for Sale in New Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Apartment for Rent in Maadi</Link>
              </li>
              <li>
                <Link to ="/residential">Apartment for Sale in Maadi</Link>
              </li>
              <li>
                <Link to ="/residential">Apartments for Rent in Alexandria</Link>
              </li>
              <li>
                <Link to ="/residential">Apartments for Sale in Alexandria</Link>
              </li>
              <li>
                <Link to ="/residential">Chalets for Rent in North Coast</Link>
              </li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Trends Areas</h3>

            <ul>
              <li>
                <Link to ="/residential">Studios in Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Al Rehab City Apartments for Sale</Link>
              </li>
              <li>
                <Link to ="/residential">Madinaty Villas for Sale</Link>
              </li>
              <li>
                <Link to ="/residential">Apartments for Sale in Hurghada</Link>
              </li>
              <li>
                <Link to ="/residential">Rent in Marassi North Coast</Link>
              </li>
              <li>
                <Link to ="/residential">Rent in North Coast Egypt</Link>
              </li>
              <li>
                <Link to ="/residential">Commercial Properties for Sale</Link>
              </li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Popular Search</h3>

            <ul>
              <li>
                <Link to ="/residential">Apartments for Rent in Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Apartments for Sale in Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Apartments for Sale in New Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Apartments for Rent in New Cairo</Link>
              </li>
              <li>
                <Link to ="/residential">Villas for Rent in El Gouna</Link>
              </li>
              <li>
                <Link to ="/residential">Apartment for Rent in Zamalek</Link>
              </li>
              <li>
                <Link to ="/residential">Katameya Heights Villas for Sale</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
