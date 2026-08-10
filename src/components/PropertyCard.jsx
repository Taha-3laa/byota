import { useState } from "react";
import { Link } from "react-router";
import bedimg from "../assets/imgs/svg/bed.svg";
import bathimg from "../assets/imgs/svg/bath.svg";
import areaimg from "../assets/imgs/svg/area.svg";

export function HeartIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6915 1.39764C13.864 0.508103 12.7043 0.00196945 11.4893 9.31434e-05C10.2734 0.00150037 9.11252 0.507366 8.28366 1.39707L8.00117 1.69557L7.71869 1.39707C6.07401 -0.373057 3.30572 -0.474713 1.53562 1.16997C1.45719 1.24288 1.38143 1.3186 1.30852 1.39707C-0.436174 3.27894 -0.436174 6.18728 1.30852 8.06915L7.58604 14.6892C7.80322 14.9185 8.16515 14.9283 8.39443 14.7111C8.40193 14.704 8.40924 14.6967 8.41634 14.6892L14.6916 8.06915C16.4361 6.18748 16.4361 3.27931 14.6915 1.39764ZM13.8641 7.28174H13.8636L8.00117 13.4649L2.13825 7.28174C0.805405 5.84382 0.805405 3.62183 2.13825 2.18391C3.34864 0.87204 5.39338 0.789784 6.70525 2.00017C6.76894 2.05894 6.83022 2.12022 6.88899 2.18391L7.58604 2.91929C7.81575 3.14753 8.18663 3.14753 8.41634 2.91929L9.11339 2.18448C10.3238 0.872609 12.3685 0.790353 13.6804 2.00074C13.7441 2.05951 13.8054 2.12079 13.8641 2.18448C15.2086 3.62468 15.2184 5.85072 13.8641 7.28174Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LikeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_565)">
        <path
          d="M8.85462 16.3333H7.35035V0.333313H8.85462V16.3333ZM5.84607 13.4242H2.83753V3.2424H5.84607V1.78786H2.83753C2.00265 1.78786 1.33325 2.43513 1.33325 3.2424V13.4242C1.33325 13.81 1.49174 14.18 1.77384 14.4527C2.05595 14.7255 2.43857 14.8788 2.83753 14.8788H5.84607V13.4242ZM13.3674 4.69695V6.15149H14.8717V4.69695H13.3674ZM13.3674 3.2424H14.8717C14.8717 2.85663 14.7132 2.48667 14.4311 2.21388C14.149 1.9411 13.7664 1.78786 13.3674 1.78786V3.2424ZM14.8717 10.5151H13.3674V11.9697H14.8717V10.5151ZM13.3674 7.60604V9.06059H14.8717V7.60604H13.3674ZM11.8632 1.78786H10.3589V3.2424H11.8632V1.78786ZM13.3674 14.8788C14.2023 14.8788 14.8717 14.2315 14.8717 13.4242H13.3674V14.8788ZM11.8632 13.4242H10.3589V14.8788H11.8632V13.4242Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_565">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ShareIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_1129)">
        <path
          d="M13.9952 6.99626L7.61491 0V4.19086H6.87375C5.03777 4.19086 3.31158 4.90585 2.01329 6.20415C0.714996 7.50244 0 9.22862 0 11.0647V14L1.22449 12.6583C2.86244 10.8638 5.18751 9.8257 7.61491 9.80209V13.9926L13.9952 6.99626ZM0.820419 11.8909V11.0647C0.820419 9.4478 1.45007 7.92755 2.59338 6.78424C3.73669 5.64093 5.25683 5.01128 6.87375 5.01128H8.43523V2.11711L12.885 6.99626L8.43523 11.8755V8.98135H7.69919C5.10965 8.98135 2.61945 10.0383 0.820419 11.8909Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1129">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ShowImgsIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7633 9C11.7467 8.98667 10.0363 6.343 9.52333 6.343C9.02 6.343 8.05967 7.62667 8.05967 7.62667C7.313 6.85667 5.65967 4.67 5.17267 4.67C4.66967 4.67 2.68967 7.37667 1.57633 9H11.7633ZM8.77033 3.33333C8.77033 4.01333 9.32 4.56333 10 4.56333C10.68 4.56333 11.2297 4.01333 11.2297 3.33333C11.2297 2.65333 10.68 2.10333 10 2.10333C9.32 2.10333 8.77033 2.65333 8.77033 3.33333ZM0 1V10C0 10.84 0.17 11 1 11H12.3333C13.157 11 13.3333 10.8467 13.3333 10V1C13.3333 0.18 13.1763 0 12.3333 0H1C0.173333 0 0 0.143333 0 1ZM1 1H12.3333V10H1V1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PropertyCard({
  image,
  category,
  type,
  price,
  currency,
  title,
  bedrooms,
  bathrooms,
  area,
  location,
}) {
  const [liked, setLiked] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
  <Link to="/property-details">
    <article  className="property-card" >
      <div className="property-image">
        <img src={image} alt="Unit" className="img-cover" />

        <span className="featured-badge">Featured</span>

        <div className="property-actions">
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

      <div className="property-body">
        <div className="property-category">
          <span>{category}</span>
          <span>{type}</span>
        </div>

        <h3 className="property-price">
          {price}
          <span>{currency}</span>
        </h3>

        <h4 className="property-title">{title}</h4>

        <div className="property-features">
          <div className="feature">
            <img src={bedimg} alt="Bedrooms" />
            <span>{bedrooms}</span>
          </div>

          <div className="feature">
            <img src={bathimg} alt="Bathrooms" />
            <span>{bathrooms}</span>
          </div>

          <div className="feature">
            <img src={areaimg} alt="Area" />
            <span>{area}</span>
          </div>
        </div>

        <p className="property-location">{location}</p>
      </div>
    </article>
    </Link>
  );
}
