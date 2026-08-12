import { Link } from "react-router";
import { useState } from "react";
import PropertyCard, {
  LikeIcon,
  HeartIcon,
  ShareIcon,
  ShowImgsIcon,
} from "../../components/PropertyCard.jsx";
import ProjectCard from "../../components/ProjectCard.jsx";
import {
  breadcrumbItems,
  tabs,
  facilities,
  property,
  properties,
  projects,
} from "../../StaticData/staticdata.js";
import PropertyMap from "../../components/PropertyMap.jsx";

import mainimg from "../../assets/imgs/gallery/main-img.png";
import sideimg1 from "../../assets/imgs/gallery/sideimg1.png";
import sideimg2 from "../../assets/imgs/gallery/sideimg2.png";
import sideimg3 from "../../assets/imgs/gallery/sideimg3.png";

import AgentLogo from "../../assets/imgs/agentlogos/logo-card.png";
import "./PropertyDetails.css";

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.label}
              aria-current={isLast ? "page" : undefined}
              className={isLast ? "active" : ""}
            >
              {isLast ? item.label : <Link to={item.href}>{item.label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function PropertyInfo({ price, location, title }) {
  return (
    <section id="#details" className="property-info">
      <span className="starting-label">Starting From</span>

      <p className="property-price">
        {price}
        <span>EGP</span>
      </p>

      <div className="property-location">
        <i className="fa-solid fa-location-dot"></i>

        <span className="location">{location}</span>
      </div>

      <h3 className="property-title">{title}</h3>
    </section>
  );
}

function AgentSidebar({ logo, name, properties, location }) {
  return (
    <aside className="agent-sidebar">
      <div className="agent-header">
        <div className="agent-logo">
          <img src={logo} alt={name} className="img-cover" />
        </div>

        <div className="agent-info">
          <h3>{name}</h3>

          <p className="agent-properties">
            properties<span>{properties}</span>
          </p>

          <div className="agent-location">
            <i className="fa-solid fa-location-dot"></i>
            <p>{location}</p>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <h4>Contact Agent for information</h4>

        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input id="name" type="text" placeholder="Mohamed Ahmed" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone*</label>

          <div className="phone-input">
            <input id="phone" type="tel" value="+2" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message*</label>

          <textarea defaultValue="I would like to inquire about your property. Please contact me at your earliest convenience." />
        </div>
      </form>

      <div className="contact-actions">
        <a href="#">
          <i className="fa-solid fa-phone"></i>
          Call
        </a>

        <a href="#">
          <i className="fa-solid fa-envelope"></i>
          Mail
        </a>
      </div>
    </aside>
  );
}

function PropertyTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className="property-tabs">
      {tabs.map((tab, index) => (
        <a
          key={tab.label}
          href={tab.href}
          className={activeTab === index ? "active" : ""}
          onClick={() => setActiveTab(index)}
        >
          <i className={tab.icon}></i>
          <span>{tab.label}</span>
        </a>
      ))}
    </nav>
  );
}

function PropertyFacilities({ facilities }) {
  const [expanded, setExpanded] = useState(false);

  const visibleFacilities = expanded ? facilities : facilities.slice(0, 4);

  return (
    <section id="facilities" className="property-facilities">
      <h2 className="sec-header">Facilities</h2>

      <ul className="facilities-list">
        {visibleFacilities.map((facility) => (
          <li className="facility-item" key={facility.name}>
            <i className={facility.icon}></i>
            <span>{facility.name}</span>
          </li>
        ))}
      </ul>

      {facilities.length > 4 && (
        <button
          className="read-more-btn"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}

          <i
            className={`fa-solid fa-angle-down ${expanded ? "rotate" : ""}`}
          ></i>
        </button>
      )}
    </section>
  );
}

function PropertyDescription({ title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="description" className="property-description">
      <h2 className="sec-header">{title}</h2>

      <p className={`${expanded ? "expanded" : ""}`}>{description}</p>

      <button
        className="read-more-btn"
        type="button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}

        <i className={`fa-solid fa-angle-down ${expanded ? "rotate" : ""}`}></i>
      </button>
    </section>
  );
}

function GalleryControls() {
  const [favorite, setFavorite] = useState(false);
  const [liked, setLiked] = useState(false);
  const [share, setShare] = useState(false);
  const [showimgs, setShowImgs] = useState(false);

  return (
    <div className="gallery-controls">
      <button
        onClick={() => setFavorite(!favorite)}
        className={favorite ? "active" : ""}
      >
        <HeartIcon />
      </button>
      <button
        onClick={() => setLiked(!liked)}
        className={liked ? "active" : ""}
      >
        <LikeIcon />
      </button>
      <button
        onClick={() => setShare(!share)}
        className={share ? "active" : ""}
      >
        <ShareIcon />
        Share
      </button>
      <button
        onClick={() => setShowImgs(!showimgs)}
        className={showimgs ? "active" : ""}
      >
        <ShowImgsIcon />
        Show All Photos
      </button>
    </div>
  );
}

export default function PropertyDetails() {
  return (
    <main>
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        <div className="gallery-grid">
          <div className="gallery-main">
            <img className="main-img img-cover" src={mainimg} alt="Property" />
            <GalleryControls />
          </div>
          <div className="gallery-side">
            <div className="sideimg1">
              <img className="img-cover" src={sideimg1} alt="sideimg1" />
            </div>
            <div className="sideimg2">
              <img className="img-cover" src={sideimg2} alt="sideimg2" />
            </div>
            <div className="sideimg3">
              <img className="img-cover" src={sideimg3} alt="sideimg3" />
            </div>
          </div>
        </div>

        <section className="property-content">
          <PropertyInfo
            price="2,250,000"
            location="Cairo, Mostakbal City - Future.. Mostakbal City - Future.."
            title="Exclusive Sapphire, Tiara Residences, Palm Jumeirah, Dubai Marassi Catania, North Coast"
          />

          <AgentSidebar
            logo={AgentLogo}
            name="Byota Real Estate"
            properties={1200}
            location="Cairo, Mostakbal City Future.."
          />

          <PropertyTabs tabs={tabs} />

          <PropertyDescription
            title="Description"
            description={`Patio Al Zahraa :
          Located in El Sheikh Zayed, 6th of October City, EL PATIO ZAHRAA is situated adjacent to El Ahly Club and El Rabwa Compound, less than 4Km from Smart Village and only 2Km from Designopolis. Hyper One Market is only 6Km away, making EL PATIO ZAHRAA centrally positioned in an exceptional location, easily accessible from both the Cairo-Alexandria Desert Road as well as the 26th of July Corridor (Mehwar). El Patio Zahraa features modern architecture design of stand-alone villas, twin and town houses El Patio Zahraa boasts lush greenery and vast spaces to accommodate the lifestyle needs of its residents`}
          />

          <PropertyFacilities facilities={facilities} />

          <section id="location" className="location-section">
            <h2 className="sec-header">Location</h2>
            <PropertyMap
              latitude={property.latitude}
              longitude={property.longitude}
              location={property.location}
            />
          </section>

          <section id="available-units" className="available-units">
            <h2 className="sec-header">Available Units</h2>
            <div className="cards-grid">
              {properties.slice(0, 3).map((property) => {
                return <PropertyCard key={property.id} {...property} />;
              })}
            </div>
          </section>
        </section>
      </div>

      <section className="related-projects">
        <div className="container">
          <h2 className="sec-header">Related Projects</h2>
          <div className="cards-grid">
            {projects.map((project) => {
              return <ProjectCard key={project.id} {...project} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
