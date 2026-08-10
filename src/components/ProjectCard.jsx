import { useState } from "react";
import { HeartIcon } from "./PropertyCard";
import { LikeIcon } from "./PropertyCard";

export default function ProjectCard({ image, location, title, price, developerLogo }) {
  const [liked, setLiked] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} className="img-cover" />

        <span className="featured-badge">Featured</span>

        <div className="project-actions">
          <button
            onClick={() => setLiked(!liked)}
            className={liked ? "active" : ""}
          >
            <LikeIcon />
          </button>

          <button
            onClick={() => setFavorite(!favorite)}
            className={favorite ? "active" : ""}
          >
            <HeartIcon />
          </button>
        </div>
      </div>

      <div className="project-body">
        <p className="project-location">{location}</p>

        <h4 className="project-title">{title}</h4>

        <div className="project-footer">
          <div className="price">
            <span>Starting Prices</span>

            <h3>
              {price}
              <span>EGP</span>
            </h3>
          </div>

          <div className="developer-logo">
            <img src={developerLogo} className="img-cover" alt="" />
          </div>
        </div>
      </div>
    </article>
  );
}

