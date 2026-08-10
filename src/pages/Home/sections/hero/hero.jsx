import SliderDots from "../../../../components/Sliderdots";
import "./hero.css";
import logo from "../../../../assets/imgs/logos/logo-white.png"

export default function Hero() {
  return (
      <section className="hero">
        <div className="container">
          <SliderDots/>
          <img src={logo} alt="logo" className="logo-card"/>
        </div>
      </section>
  );
}
