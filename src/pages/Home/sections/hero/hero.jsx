import { useState } from "react";
import SliderDots from "../../../../components/Sliderdots";
import "./hero.css";
import logo from "../../../../assets/imgs/logos/logo-white.png";
import herobg from "../../../../assets/imgs/HomePage/landing1.png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="hero">
      {!loaded && <div className="hero-skeleton" />}
      

      <img
        className={`herobg ${loaded ? "loaded" : ""}`}
        src={herobg}
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
        alt="herobackground"
      />

      <div className="container">
        <SliderDots />
        <img src={logo} alt="logo" className="logo-card" />
      </div>
    </section>
  );
}
