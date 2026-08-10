import { properties, projects } from "../../../../StaticData/staticdata";
import PropertyCard from "../../../../components/PropertyCard";
import ProjectCard from "../../../../components/ProjectCard";


import "./recommended.css";

export default function Recommended() {
  return (
    <section className="recommended">
      <div className="sectionone">
        <div className="container">
          <h2 className="section-title">Recommended Units For you</h2>
          <div className="cards-grid">
            {properties.map((property) => {
              return <PropertyCard key={property.id} {...property} />;
            })}
          </div>
        </div>
      </div>

      <div className="sectiontwo">
        <div className="container">
          <h2 className="section-title">Recommended Projects For you</h2>
          <div className="cards-grid">
            {projects.map((project) => {
              return <ProjectCard key={project.id} {...project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
