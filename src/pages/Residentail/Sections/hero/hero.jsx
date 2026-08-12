import { useState } from "react";
import agentlogo from "../../../../assets/imgs/agentlogos/logo.png";
import herobg from "../../../../assets/imgs/residential/bg.png";
import "./hero.css";

function PropertyCard({ location, price, currency, logo, logoAlt }) {
  return (
    <div className="property-card">
      <div className="property-info">
        <p className="location">{location}</p>

        <h3 className="price">
          {price}
          <span>{currency}</span>
        </h3>
      </div>

      <img className="logo" src={logo} alt={logoAlt} />
    </div>
  );
}

function SelectBox({ name, options, defaultValue, className = "" }) {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option) {
    setSelected(option);
    setIsOpen(false);
  }

  return (
    <div className={`select-box ${className}`}>
      <input type="hidden" name={name} value={selected} />
      <button
        type="button"
        className="select-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}

        <i className={"fa-solid fa-chevron-" + (isOpen ? "up" : "down")}></i>
      </button>
      {isOpen && (
        <ul className="select-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Hero() {
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  return (
    <section className="resdential-hero">
      {!isBgLoaded && <div className="hero-skeleton"></div>}
      <img
        className={`herobg ${isBgLoaded ? "loaded" : ""}`}
        fetchPriority="high"
        onLoad={() => setIsBgLoaded(true)}
        src={herobg}
        alt="herobackground"
      />
      <PropertyCard
        location="Cairo, Mostakbal City"
        price="3,150,000"
        currency="EGP"
        logo={agentlogo}
        logoAlt="New Giza"
      />

      <div className="container">
        <h1>
          We Will help You To Find <br /> your beautiful <span>Home..</span>
        </h1>

        <form className="search-form" method="get">
          <div className="tabs">
            <input
              type="radio"
              id="residential"
              name="category"
              value="residential"
              hidden
              defaultChecked
            />

            <label className="tab" htmlFor="residential">
              Residential
            </label>

            <input
              type="radio"
              id="commercial"
              name="category"
              value="commercial"
              hidden
            />

            <label className="tab" htmlFor="commercial">
              Commercial
            </label>
          </div>

          <SelectBox
            name="purpose"
            defaultValue="buy"
            options={["buy", "rent"]}
          />

          <SelectBox
            name="property-type"
            defaultValue="apartment"
            options={["apartment", "villa", "townhouse"]}
            className="second-select"
          />

          <div className="location-field">
            <input
              name="location"
              type="text"
              placeholder="City or Town or District"
              required
            />

            <i className="fa-solid fa-location-dot icon"></i>
          </div>

          <input type="submit" className="find-btn" value="Find" />
        </form>
      </div>
    </section>
  );
}
