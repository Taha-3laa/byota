import {neighborhoods} from "../../../../StaticData/staticdata.js";
import "./neighborhoods.css";

function NeighborhoodCard({ image, name, units }) {
  return (
    <article className="neighborhood-card">
      <img src={image} alt={name} className="img-cover"/>

      <div className="card-content">
        <h3>{name}</h3>
        <span>{units} Units</span>
      </div>
    </article>
  );
}

export default function Neighborhoods() {

  
  return (
    <section className="neighborhoods">
      <div className="container">
        <h2 className="section-title">Find the Neighborhood For You</h2>
        <div className="cards-grid">
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} {...neighborhood} />
            ))}
        </div>
      </div>
    </section>
  );
}
