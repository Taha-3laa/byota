import { useState } from "react";
import "./Sliderdots.css";

export default function SliderDots() {
  const [activeDot, setActiveDot] = useState(1);
  const dots = [1, 2, 3, 4];
  return (
  <ul className="slider-dots">
    {dots.map((dot) => (
      <li
        key={dot}
        className={activeDot === dot ? "active" : ""}
        onClick={() => setActiveDot(dot)}
      ></li>
    ))}
  </ul>
  );
}
